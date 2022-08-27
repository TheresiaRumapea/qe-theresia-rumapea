## A.	Software Testing

    A process of analyzing a software item to detect the differences between existing and required conditions (i.e., defects) and to evaluate the features of the software item.

##### Ada 4 hal yang membuat Software Testing penting
    1.	Save Money
    2.	Product Quality (Menjamin kualitas produk)
    3.	Security (Keamanan Terjaga)
    4.	Customer Satisfaction (Kepuasaan Pelanggan)
    Software bugs could be expensive or even dangerous. Software bugs can potentially cause monetary and human loss.

##### Testing Platform 
    1.	API 
    2.	Web
    3.	Mobile
    4.	Desktop


## B.	Types of Software Testing

### a.	Functional Testing
    Jenis pengujian yang memverifikasi bahwa setiap fungsi sudah berfungsi sesuai dengan requirement spesification.
##### -	Manual Testing 
        i.	Dalam proses ini, penguji perangkat lunak mengeksekusi test case dan menghasilkan laporan pengujian
        ii.	Ini adalah metode klasik dari semua jenis pengujian dan membantu menemukan bug dalam sistem perangkat lunak.
        iii.	Merupakan langkah untuk mencari cacat/bug pada program perangkat lunak. Dalam metode ini tester memiliki peran penting dan berperan sebagai pengguna akhir untuk pengecekan semua fitur aplikasi tanpa bantuan tools/ script.
        -	Automation Testing 
        i.	Penguji menulis kode / skrip uji untuk mengotomatisasi eksekusi pengujian
        ii.	Penguji menggunakan alat otomatisasi yang sesuai untuk mengembangkan skrip pengujian dan memvalidasi perangkat lunak
        iii.	Tujuannya adalah untuk menyelesaikan eksekusi tes dalam waktu yang lebih singkat
        iv.	Sebuah metode pengujian software yang menggunakan suatu software testing denga tujuan membandingkan output yang diprediksikan dan dihasilkan oleh sistem.


### b.	Non-Functional Testing
        Non-Functional Testing diadakan setelah Functional Testing selesai dilakukan.
    
##### - Performance Testing
        Artinya Pengujian performa didefinisikan sebagai jenis pengujian perangkat lunak untuk memastikan aplikasi perangkat lunak akan berkinerja baik di bawah beban kerja yang diharapkan.

        Berikut beberapa konsep yang dihadapkan pada performance testing
        1.	Speed : menentukan kecepatan respon suatu aplikasi
        2.	Scalability : menentukan maksimum user load yang dapat di handle oleh aplikasi
        3.	Stability : menentukan kestabilan aplikasi dalam berbagai jenis jumlah load.

        Berdasarkan Performance testing inilah, sebagai pedoman mengetahui harus ditingkatkan dalam aplikasi. Contoh : Logic code, query database, atau penggunaan CPU dan memory.
        •	Penguji menulis kode / skrip uji untuk mengotomatisasi eksekusi pengujian
        •	Penguji menggunakan alat otomatisasi yang sesuai untuk mengembangkan skrip pengujian dan memvalidasi perangkat lunak
        •	Tujuannya adalah untuk menyelesaikan eksekusi tes dalam waktu yang lebih singkat

### c.	Maintenance Testing
        Maintenance Testing dilakukan ketika aplikasi sudah rilis ke konsumen. Tujuan: mempertahankan dan meningkatkan karakteristik kualitas non-fungsional dari komponen/ sistem selama masa pakainya. Terutama efisiensi kerja, kompetebilitas, keandalan, keamanan dan portabilitas
        Regression Testing

        Jenis pengujian regresi pengujian perangkat lunak untuk mengonfirmasi bahwa fitur baru atau perubahan kode tidak berdampak buruk pada fitur yang ada.


## C.	Level Of Testing

### I.	Unit Testing
    -	Unit Testing adalah tingkat pengujian perangkat lunak di mana unit/ komponen individual dari suatu perangkat lunak diuji.

    -	Unit-unit tersebut dapat berupa: 
        o	Function
        o	Method
        o	Prosedur
        o	Modul
        o	Object, etc

    -	Dilakukan saat masa development oleh developer.

    -	Tujuan : Memvalidasi setiap unit dari code perangkat lunak dapat berjalan sesuai yang diharapkan.

    -	Tools yang digunakan: 
        o	JUnit
        o	EndUnit
        o	JMockit
        o	Ema
        o	PHPUnit, etc

### II.	Integration Testing
    -	Integration Testing adalah tingkat pengujian perangkat lunak di mana unit individu digabungkan dan diuji sebagai grup.
    -	Sebaiknya dilakukan secara bertahap, untuk menghindari kesulitan penelusuran apabila terjadi kesalahan error/ bug.
    -	Tujuan: 
        o	memeriksa software dapat berfungsi / berjalan dengan baik
        o	memeriksa kinerja dari sebuah aplikasi/software
        o	mengetes struktur program yang sudah dirancang

### III.	System Testing
    -	System Testing adalah tingkat pengujian perangkat lunak di mana perangkat lunak yang lengkap dan terintegrasi diuji.
    -	Atau dengan kata lain testing pada keseluruhan sistem, dan yang dilakukan yaitu end to end testing untuk menverifikasi scenario dapat berjalan dengan baik. Cakupan system testing akan mengetes aspek-aspek functional dan non-functional sebuah per.lunak, apakah per.lunak ini telah memenuhi persyaratan dapat digunakan oleh pengguna.


### IV.	Acceptance Testing
    -	Acceptance Testing adalah tingkat pengujian perangkat lunak di mana sistem diuji untuk dapat diterima.
    -	Tujuan : apakah aplikasi yang sudah selesai dibuat sudah sesuai dengan proses bisnis.
    -	Dilakukan di tahap akhir pengujian, yaitu sebelum diserahkan pada pengguna.


