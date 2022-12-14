# SUMMARY SECTION 19
# Restful API Testing with Rest Assured

#### REST API TESTING
REST merupakan standrard arsitektur komunikasi berbasis web yang sering diterapkan dalam pengembangan layanan berbasis web umumnya menggunakan HTTP sebagai protokol sebagai komunikasi data. REST merupakan salah satu pemgimplementasian web service yang digunakan sebagai pertukaran data.

REST API berisi aturan yang membatasi programmer dalam melakukan tindakan tertentu, terdapat request dan response pada data yang dikirimkan atau diterima , data biasanya yang diterima adalah JSON.

#### API Concept 
Ketika kita berasa di restoran atau rumah makan dimana client diibaratkan sebagai kita , dimana client akan melakukan request atau pemesanan makanan kepada waiter , dimana waiter disini akan berperan sebagai API . waiter tugasnya menerima request dari client dan menyampaikan request kepada koki atau yang berada di dapur. Kemudian setelah request diberikan kepada chef maka chef akan memproses pesanan dan memberikan hasil request kepada waiter, kemudian waiter akan memberikan makanan atau request pesanan ke pemesan makanan.

#### Fundamental API
Record, Define API Information (Definisikan API yang akan ditest) inputkan data baik di header maupun di body request
Parsing , Filter of Recording API DATA And then extract
Reconstruction API calls and sent them from a simulate a client
Test Validation

###### The Practical Test Pyramid Test Pyramid dikelompokkkan ke dalam berbagai kategori, mirip dengan konsep piramida nutrisi jumlah test akan secara teoritis akan berkurang saat kita naik dalam kategori dan memiliki test setiap kategori memungkinkan mempunyai rangkaian menyeluruh.

#### UNIT Testing 
Merupakan pengujian perangkat lunak yang menguji sebuah perangkat lunak. UNIT testing dilakukan pada saat masa pengembangan atau pada saat menuliskan kode program yang diuji dalam hal ini adalah unit unit dari prangkat lunak. 
UNIT dapat berupa: 
- function 
- method 
- procedure 
- module dan
- objek. 

###### Tujuan UNIT Testing 
Memvalidasi setiap unit dari kode perangkat lunak agar dapat berjalan seperti yang diharapkan.

#### Komponen Testing 
Merupakan pengujian perangkat lunak dimana pengujian dilakukan pada setiap komponen terpisah tanpa mengintegrasikan dengan komponen lain. Salah satu black box testing yang dilakukan QA.

#### Integration Testing 
Adalah pengujian dari hasil penggabungan unit unit yang ada di dalam software. Integration testing sebaaiknya dilakukan bertahap jika terdapat error.

#### UI Test (End To End)