import React, { useState, useEffect } from 'react';
import { IonIcon, IonSelect, IonSelectOption } from "@ionic/react";
import { warning } from "ionicons/icons";
import "./HomeContentContainer.css";

const availableMetric = [
    {
        'name': 'Panjang',
        'units': ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'],
        'unit_factor': 10,
        'base_unit': 'm'
    },
    {
        'name': 'Massa',
        'units': ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg'],
        'unit_factor': 10,
        'base_unit': 'g'
    },
    {
        'name': 'Waktu',
        'units': ['detik', 'menit', 'jam'],
        'unit_factor': 60,
        'base_unit': 'detik'
    },
    {
        'name': 'Kuat Arus',
        'units': ['mA', 'cA', 'dA', 'A', 'daA', 'hA', 'kA'],
        'unit_factor': 10,
        'base_unit': 'A'
    },
    {
        'name': 'Suhu',
        'units': ['C', 'R', 'K', 'F'],
        'unit_factor': 1,
        'special': true
    },
    {
        'name': 'Mol',
        'units': ['nmol', 'μmol', 'mmol', 'mol', 'kmol'],
        'unit_factor': 1000, 
        'base_unit': 'mol'
    }
];

const temperatureConvert = (value, from, to) => {
    let celsius;
    switch(from) {
        case 'C': celsius = value; break;
        case 'R': celsius = value * 5/4; break;
        case 'K': celsius = value - 273.15; break;
        case 'F': celsius = (value - 32) * 5/9; break;
    }
    switch(to) {
        case 'C': return celsius;
        case 'R': return celsius * 4/5;
        case 'K': return celsius + 273.15;
        case 'F': return celsius * 9/5 + 32;
    }
};

const convertToBase = (value, unit, metric) => {
    const index = metric.units.indexOf(unit);
    const baseIndex = metric.units.indexOf(metric.base_unit);
    return value * Math.pow(metric.unit_factor, index - baseIndex);
};

const convertFromBase = (value, unit, metric) => {
    const index = metric.units.indexOf(unit);
    const baseIndex = metric.units.indexOf(metric.base_unit);
    return value / Math.pow(metric.unit_factor, index - baseIndex);
};

export function ContentContainer() {
    const [selectedMetric, setSelectedMetric] = useState(null);
    const [fromUnit, setFromUnit] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState({});
    const [isInvalidInput, setIsInvalidInput] = useState(false);

    useEffect(() => {
        if (selectedMetric && fromUnit && inputValue !== '') {
            const newResults = {};
            const value = parseFloat(inputValue);
            if (!isNaN(value)) {
                if (selectedMetric.special) {
                    selectedMetric.units.forEach((toUnit) => {
                        if (toUnit !== fromUnit) {
                            newResults[toUnit] = temperatureConvert(value, fromUnit, toUnit);
                        }
                    });
                } else {
                    const baseValue = convertToBase(value, fromUnit, selectedMetric);
                    selectedMetric.units.forEach((toUnit) => {
                        if (toUnit !== fromUnit) {
                            newResults[toUnit] = convertFromBase(baseValue, toUnit, selectedMetric);
                        }
                    });
                }
                setResults(newResults);
                setIsInvalidInput(false);
            } else {
                setIsInvalidInput(true);
            }
        }
    }, [selectedMetric, fromUnit, inputValue]);

    const handleMetricChange = (event) => {
        const metric = availableMetric.find(m => m.name === event.detail.value);
        setSelectedMetric(metric);
        setFromUnit('');
        setResults({});
    };

    const handleFromUnitChange = (event) => {
        setFromUnit(event.detail.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="content_container">
            <IonSelect label="Pilih Metrik" placeholder="Metrik" onIonChange={handleMetricChange}>
                {availableMetric.map(metric => (
                    <IonSelectOption key={metric.name} value={metric.name}>
                        {metric.name}
                    </IonSelectOption>
                ))}
            </IonSelect>

            {selectedMetric && (
                <IonSelect 
                    label="Dari" 
                    placeholder="Pilih unit" 
                    onIonChange={handleFromUnitChange}
                    value={fromUnit}
                >
                    {selectedMetric.units.map(unit => (
                        <IonSelectOption key={unit} value={unit}>
                            {unit}
                        </IonSelectOption>
                    ))}
                </IonSelect>
            )}

            <div className="input_container">
                <label htmlFor="input_element">Input</label>
                <input
                    type="number"
                    onChange={handleInputChange}
                    className="input_ion"
                    required={true}
                    id="input_element"
                    placeholder="123"
                    step="any"
                />
            </div>

            {isInvalidInput && (
                <div className="error_container">
                    <IonIcon icon={warning} color="warning" />
                    <p>Error, input bukan dalam bentuk angka</p>
                </div>
            )}

            {!isInvalidInput && Object.keys(results).length > 0 && (
                <div className="result_container">
                    <h3>Hasil Konversi:</h3>
                    {Object.entries(results).map(([unit, value]) => (
                        <p key={unit}>{unit}: {value.toFixed(6)}</p>
                    ))}
                </div>
            )}
        </div>
    );
}
