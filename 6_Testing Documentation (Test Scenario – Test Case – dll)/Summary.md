## BAGIAN 1 – TEST SCENARIO
Test scenario merupakan sebuah dokumen yang berisi sekumpulan langkah-langkah sistematis yang disusun oleh software tester agar sistem yang akan di test 
o	memenuhi ketentuan yang diinginkan oleh user
o	memenuhi standard tertentu
o	berfungsi dengan baik

#### Tujuan pembuatan tes scenario yaitu 
    o	Memudahkan developer dan tester untuk melakukan testing
    o	Menjadi dasar pengembangan project
    o	Sebagai dasar client atau product owner menyesuai kan dengan sistem requirement

#### Bagaimana membuat test scenario yang baik, berikut kriteria nya

###### 1.	Inline with system requirement
Sistem Requirement itu adalah kunci, sehingga kita dapat menyusun test scenario sesuai flow yang telah ditentukan.

###### 2.	Give Context
User bersikap seolah-olah perlu melakukan hal tersebut.

###### 3.	Give Detail
Berikan rincian secara spesifik hal-hal yang perlu diketahui oleh user

###### 4.	Crystal clear - Easy to Understand
Berikan penjelasan secara detail terkait tes step dan spesifikasi expected result. Sehingga akan memudahkan kita dalam melakukan proses testing.

###### 5.	Complete
User dapat melakukan apapun dengan sistem requirement yang diberikan

###### 6.	Coheren
Antara scenario satu dengan yang lain dan antara step yang satu dengan yang lain harus saling berkesinambungan

###### 7.	Proofs
Lengkapi dengan hasil yang didapatkan dari scenario yang telah dilakukan, seperti resultnya pass or fail.

###### 8.	Consistent
Penggunaan kata haruslah konsisten, jika ingin menggunakan kata failed email maka pada kata test step selanjutnya harus sesuai dengan kata yang ditulis diawal.

###### 9.	End-user mind - Don’t assume
Contohnya: dalam pembuatan aplikasi kita harus memastikan client menginginkan notifikasi berupa pop-up message atau alert message.

>>> Source dari Internet 

###### End-user mind
        Tester bermindset bahwa ia adalah end-user. Untuk itu, kemudahan dalam penggunaan aplikasi juga perlu diperhatikan karena kepuasan konsumen adalah saat aplikasi tidak memiliki kegagalan sistem yang bisa menghambat berjalannya sistem tersebut.

######	Don’t assume
        Tester diharapkan tidak berasumsi bahwa end-user mengerti keseluruhan dari aplikasi. Jadi usahakan susun test case walaupun hal yang termudah.

###### 10.	Update
Catat pembaharuannya dan perbaharui proses pembaharuannya.

## BAGIAN 2 – TEST CASE
Test Case merupakan rancangan atau rangkaian mengenai tindakan yang dilakukan oleh software tester untuk melakukan verifikasi terhadap fitur atau fungsi tertentu dari sebuah perangkat lunak
Tujuan pembuatan test case yaitu memastikan bahwa suatu sistem dapat dijalankan dengan baik sesuai dengan kebutuhan awal awal, serta mampu memberikan respon ketika terdapat suatu masukan yang tidak valid.

#### Test case mempunyai komponen seperti 
1.	Feature
2.	Test Summary
3.	Pre Test Case
4.	Test Type
5.	Test Case Description
6.	Pre Condition
7.	Test Step
8.	Expected Result
9.	Actual Result
10.	Status
11.	Bukti
12.	Note



## BAGIAN 3 – TAMBAHAN MENGENAI TEST CASE
#### Beberapa hal di perhatikan dalam membuat test case:

1.	Test case dibuat dengan sederhana dan transparan. Dalam pengujian test case yang sederhana dengan penjelasan jelas dan ringkas supaya orang lain dapat mengeksekusi. Gunakan bahasa yang mudah dipahami sehingga membantu pemahaman pengujian dan pelaksanaan tes atau pengujian menjadi lebih cepat.

2.	Test case dibuat dengan end users in mind, tujuan utama pembangunan perangkat lunak adalah untuk membuat kasus uji yang memenuhi persyaratan clien mudah di gunakan dan operasikan. Dengan demikian software tester mampu membuatkan sistem uji dengan mengingat prespektif pengguna akhir.

3.	Hindari perulangan khasus uji. Dalam pembuatan test case usahan pengujian yang berulang, jika test case di perlukan untuk beberapa case lain. Jika penguji memanggil test case lain maka peguji dapat memanggil free condition.

Dalam pembuatan test case jangan mengasumsikan firtur dari perangkat yang sedang di uji. Dimana pengujian harus sesuaikan ketentuan dan dokumen spesifikasi, dalam pengujian pastikan software tester udah memeriksa semua fitur sistem secara keseluruhan dan juga memenuhi persyaratan perangkat lunak yang ada di dokumen spesifikasi. Software testing dapat menggunakan traceability Matrix untuk memastikan bahwa tidak ada fungsi yang belum teruji.


