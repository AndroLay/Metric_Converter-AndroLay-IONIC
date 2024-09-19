# Metric Converter
Aplikasi ini merupakan aplikasi sederhana yang bertujuan untuk mengkonversi 
satuan pada suatu metrik.

## Instalasi
Aplikasi ini dapat didownload melalui google drive melalui link ini  
[apk-release](https://drive.google.com/drive/folders/1bc_6uSmIs-iFJQlmnGiSf0QvS46Uf6mp?usp=sharing)
Pada link diatas, download file yang bernama `apk-release.apk`


## Cara Kerja
Aplikasi ini menggunakan array yang tersedia di `availableMetric`.
Pada setiap metrik terdapat kumpulan satuan pada `units`. Setiap `unit` dalam `units` disusun secara berurutan untuk dapat dibandingkan posisi indexnya antara satuan unit konversi `dari` ke `ke`. Perbedaan nilai index ini kemudian dikalikan dengan faktor pengali (`unit_factor`) pada metrik tersebut dan dimasukan ke dalam nilai hasil.

## Cara Penggunaan
1. Pilih metrik pada dropdown Pilih metrik  
![tutorial_1](https://github.com/sihotang-yonathan1/metric_converter-yonathan_sihotang_1-ionic/blob/main/assets/tutorial_1.gif)
2. Pilih Satuan yang di konversi di dropdown Dari dan Ke  
![tutorial_2](https://github.com/sihotang-yonathan1/metric_converter-yonathan_sihotang_1-ionic/blob/main/assets/tutorial_2.gif)
3. Masukkan nilai angka yang ingin dihitung
![tutorial_3](https://github.com/sihotang-yonathan1/metric_converter-yonathan_sihotang_1-ionic/blob/main/assets/tutorial_3.gif)

## Metrik dan Satuan yang didukung
1. Panjang:
    - km
    - hm
    - dam
    - m
    - dm
    - cm
    - mm
2. Massa:
    - kg
    - hg
    - dag
    - g
    - dg
    - cg
    - mg
3. Waktu:
    - Jam
    - Menit
    - Detik
4. Kuat Arus
    - kA
    - hA
    - daA
    - A
    - dA
    - cA
    - mA
5. Suhu
    - C
    - F
    - R
    - K

## Demo
![demo](https://github.com/sihotang-yonathan1/metric_converter-yonathan_sihotang_1-ionic/blob/main/assets/demo_metric_converter.gif)