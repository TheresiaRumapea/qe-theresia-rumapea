# SUMMARY SECTION 9
# Agile Testing

## Bagian 1 _ Pengertian SDLC

SDLC(Software development Life Cycle) adalah sebuah proses yang digunakan untuk merancang, mengembangkan dan menguji software yang berkualitas tinggi. 

###### Tujuan dari SDLC
Menyediakan alur terstruktur dalam membantu organisasi menghasilkan software berkualitas tinggi yang diselesaikan dengan perkiraan waktu yang singkat dan biaya yang lebih rendah, namun tetap memenuhi atau melebihi harapan pelanggan.

## Bagian 2 _ Tahap SDLC (Software Development Life Cycle)

##### 1.	Requirement Gathering Pada tahap ini 
Sistem akan dianalisis bagaimana akan dijalankan nantinya. Hasil analisis berupa kelebihan dan kekurangan sistem, fungsi sistem, hingga pembaharuan yang dapat diterapkan. Bagian ini termasuk dalam bagian perencanaan. 

Hasil dari tahap perencanaan adalah 
- rencana proyek
- jadwal
- estimasi biaya
- ketentuan 

Idealnya manajer proyek dan pengembang dapat bekerja maksimal pada tahap ini.

##### 2.	Design
> 	Fase desain dalam SDLC adalah tahapan dimana membuat model cara kerja aplikasi / software.

>	Ada beberapa aspek yang diperhatikan dalam tahapan design, antara lain:

i.	Communications yaitu mendefinisikan metode / cara aplikasi berkomunikasi dengan asset lainnya seperti server pusat atau server lainnya. 

ii.	Programming yaitu tidak hanya menetukan bahasa pemograman namun juga metode pemecahan masalah dan tugas-tugas dalam aplikasi

iii.Architecture yaitu Menentukan bahasa pemrograman praktik dalam industri keseluruhan dan menggunkan template tertentu. 

iv.	User Interface yaitu Mendefinisikan cara pelanggan beriteraksi dengan software dan bagaimana software tersebut dapat merepson input yang ada

v.	Platforms yaitu Dimana software akan dijalankan. Misalanya versi android, linux dll. 

vi.	Security yaitu Mengamankan aplikasi. Seperti membuat perlindungan kata sandi/enkripsi

##### 3.	Development (Code)
>	Fase ini adalah tahap di mana program ditulis. Biasanya jika proyek tersebut kecil maka program dapat ditulis oleh satu developer. Namun, jika proyek besar bisa dipecah dan dikerjakan oleh beberapa tim.
>	Pada fase ini bisa juga digunakan aplikasi Access Control atau Source Code Management untuk membantu developer melacak perubahan pada kode dan memastikan kompatibilitas antar proyek tim yang berbeda sehingga sasaran terpenuhi.
>	Proses coding tidak hanya dilakukan sebatas menyusun kode agar aplikasi dapat berjalan, tapi juga mencakup banyak tugas lain misalnya menemukan dan memperbaiki error atau glitches yang ditemukan, serta penulisan dokumentasi seperti panduan pengguna atau bantuan FAQ untuk masalah teknis.
> Tahap ini memakan waktu yang cukup panjang dalam SDLC karena akan muncul kendala baru yang akan menghambat jalannya pengembangan sistem karena hal satu dan lainnya. 

##### 4.	Testing
>	Sesudah sistem dikembangkan sistem harus melalui pengujian sebelum digunakan atau dipublish. Tahap testing sistem harus dijalankan untuk mencoba apakah sistem yang dikembangkan dapat bekerja optimal atau tidak.
>	Pada tahap ini ada beberapa hal yang harus diperhatikan seperti kemudahan penggunaan sistem pencapaian tujuan dari sistem yang sudah disusun sejak perancangan sistem dilakukan.
> Tahap ini merupakan tahap yang paling penting dalam SDLC, karena sangat tidak mungkin mempublikasikan aplikasi tanpa testing terlebih dahulu. 

Beberapa testing yang harus dilewati antara lain : 
a. Kualitas code
b. Functional Testing
c. Integration Testing
d. Perfomance Testing
e. Security Testing 

Untuk memastikan testing berjalan teratur dan tidak ada bagian yang terlewati, tes dapat dilakukan menggunakan *Perangkat Continious Integration* sehingga dapat diperoleh software yang siap untuk dirilis. 


##### 5.	Deployment
> Pada fase ini aplikasi sudah tersedia pada pelanggan untuk digunakan. Meski begitu tahapan ini bisa jadi lebih rumit. Contohnya beberapa perusahaan mungkin perlu melakukan pembaharuan database ke aplikasi yang baru dikembangkan sehingga memakan lebih banyak waktu dan tenaga.
> Tahap dimana user memberikan feedback yang dapat didengar sehingga dilakukan lagi penyesuaian terhadap produk. 

##### 6.	Maintenance
> Pada tahap ini sebetulnya aplikasi benar-benar sudah selesai dan bisa digunakan di lapangan. Namun, tahapan operasi dan pemeliharaan masih dianggap penting. Sebab, dalam tahapan ini pengguna bisa jadi menemukan bug yang tidak ditemukan selama pengujian sehingga kesalahan perlu diatasi.Sehingga dibutuhkan pembaruan aplikasi untuk memperbaiki Bug yang ada
> Mungkin di tahap ini dapat muncul siklus SDLC yang baru untuk memperbaiki bug, menentukan perencanaan pengembangan berulang atau tambahan fitur dalam rilis mendatang. 

## Bagian 3 _ Model SDLC

##### 1.	Waterfall model
Model SDLC ini adalah salah satu model tertua dan tersingkat dalam penerapannya. Dalam sistem ini, setelah satu fase selesai, fase berikutnya harus segera dimulai. Setiap fase memiliki rencana kecil dan menurun ke fase berikutnya. Maka dari itu, fase ini dikatakan waterfall atau air terjun karena tiap fase memiliki ‘turunan’ kecil lainnya. Namun, salah satu kekurangan dari model ini adalah jika ada satu detail kecil yang tertinggal, dapat mempengaruhi keseluruhan rencana dan berakhir berantakan.

##### 2.	Iterative model
Metode SDLC ini adalah metode yang memiliki repetisi tinggi. Developer akan menciptakan produk dengan versi cepat dan pastinya murah. Setelah itu, mereka akan mencoba produk dan merevisi jika ada kesalahan. Salah satu kekurangan dari metode ini adalah dapat mengkonsumsi bahan baku jika ada satu detail yang tertinggal untuk dikerjakan.

##### 3.	Agile model
Agile model adalah model SDLC yang dapat memisahkan produk dengan proses dan waktu pengerjaannya secara cepat. Metodologi ini diyakini sangat efektif untuk keberhasilan penciptaan sebuah produk. Dalam metode ini, tim akan mencoba tiap produk yang sudah selesai untuk meminimalisir kesalahan. Namun, salah satu kelemahan dari metode ini dapat memicu proyek ke arah yang salah dan tidak sesuai dengan kemauan dan ekspektasi dari customer.

##### 4.	V-Shaped model
V-shaped SDLC model adalah lanjutan dari Waterfall Model. Metode SDLC ini akan mencoba tiap fase dalam proses pengembangan suatu produk.

##### 5.	Big bang model
Model software development life cycle ini adalah model yang diklaim memiliki risiko tinggi saat dijalankan. Hal ini dikarenakan dalam pengerjaannya, tim akan menginvestasikan semua bahan baku ke dalam projek tersebut. Sehingga metode ini akan berhasil jika mengerjakan proyek yang kecil dan cenderung berbahaya untuk proyek besar.

##### 6.	Spiral model
Metode ini merupakan metode yang paling fleksibel dan mirip dengan iterative model. Metode ini fokus pada repetisi dalam pengerjaannya.

