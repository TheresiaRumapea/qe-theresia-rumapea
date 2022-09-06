# SUMMARY SECTION 10
# Linux Basic Command

## Bagian 1 _ Pengertian Linux Basic Command

Linux command merupakan sebuah utilitas sistem operasi linux, semua tugas dasar dan tugas lanjutan dapat dijalankan dengan commans. Commands dapat dijalankan di terminal linux. 

**Kelebihan Command Line**
#####    1. Less Resources
Command line ringan digunakan sehingga tidak mengharuskan komputer untuk memiliki spesifikasi tinggi bila ingin menggunakan command line. 
        
#####    2. **Repetitive Task Friendly**
Dapat menyimpan script untuk mengotomatiskan tugas yang sama berulang kali 
        
#####    3. **Powerful**
Karena hanya menggunakan teks, antar muka system operasi ini terlihat lebih stabil dibanding GUI.

###### Linux Commands Structure
command [options] [parameters]

#contoh
> ls -a /usr
> ls -a -l
> ls -al

## Bagian 2 _ Jenis Commands Linux

### A. Basic Commands
1. **cal** : fungsi menampilkan kalender 
2. **date** : menampilkan  tanggal dan waktu yang tertera di OS kita. 
3. **etc**

### B. File System Commands
1. **touch** : membuat file baru yang kosong melalui baris perintah linux.
Contoh: **touch / home / username /web.html**
Arti : membuat file html berjudul web dibawah directory dokumen
    
2. **cat** : membuat daftar konten atau isi file pada standard output.
Contoh: **cat nama_file.txt**
    
3. **cp** : menyalin file dari directory saat ini ke directory yang berbeda
Pola: **cp / namafile / directory tujuan** 
Contoh: **cp / sinery.jpg /home / username / pitcure** 
Arti: menyalin sinery.jpg ke directory ini ke directory pitcure

4. **mv** : memindahkan file meskipun sebenarnya bisa digunakan untuk mengganti / mengubah nama file
a. memindahkan file
**mv / nama.txt /home / username / document**
        
b. mengganti nama file
**mv / nama.txt  nama_baru.txt**

5. **rm** : menghapus directory beserta isinya. Namun harus berhati-hati saat kita berada di directory  yang ingin dihapus, karena nantinya jika sudah dihapus tidak dapat dikembalikan.

6. **mkdir** : membuat directory baru.
    
**mkdir music** 
Arti: maka directory baru yang muncul ialah music. 
    
7. **rmdir** : menghapus directory. Namun hanya boleh digunakan untuk menghapus directory yang KOSONG saja.

8. **cd** : menjelajahi file dan directory linux. Memerlukan path penuh nama directory tergantung nama directory saat ini kita berada.
Contoh:    
Saat ini berada pada directory:  **/home/username/documents**
Ingin membuka : **photos** di directory **documents**
Cara : **cd photos**

9. **pwd** : mencari path dari directory yang kita gunakan saat ini. Command ini akan mengembalikan path yang absolut yang pada dasarnya merupakan path semua directory yang diawali dengan garis miring.
Contoh: **/home / username /**

### C. Processes Control Commands
1. **Top** : menampilkan daftar proses yang berlangsung dan seberapa banyak ruang CPU yang digunakan tiap proses tersebut.
    
Melakukan pengawasan terhadap penggunaan resources sistem sangatlah disarankan terutama ketika kita harus mencari tahu proses mana yang harus dimatikan karena terlalu banyak menggunakan resources. 
    
2. **Clear** : membersihkan terminal jika didalamnya sudah terdapat banyak sekali command.
    
    
3. **History** : Mengecek kembali command yang sudah ditambahkan sebelumnya.

4. **etc**

### D. Utilities Programs Commands
1. **ls** : menampilkan semua file yang ada di directory kerja kita.

2. **Which** : mencari file yang akan di eksekusi terkait dengan command yang diberikan.

3. **SUDO (Super User Do)** : menjalankan task yang memerlukan hak akses/ permission/administratif. Namun tidak disarankan untuk tes harian, karena dapat terjadi error kapan saja apabila kita melakukan kesalahan.

4. **Find** : untuk mencari file & directory. Command ini lebih ditujukan pada file yang berlokasi di dalam directory yang diberikan.
Contoh : **find / home -name notes.txt** 
Arti: ingin mencari file bernama “notes.txt” didalam directory home dan sub directory nya.  

5. **etc**

### E. File Access Permissions
1. **chmod** : membaca , menulis, dan manjalankan permission dari file dan directory.

2. **chown** : mengubah/ mentransfer kepemilikan file ke user yang spesifik. Karena kita tahu bahwa semua file dimiliki oleh user khusus.
Contoh: **chown linuxuser2 file.txt**
Arti : menentukan LINUXUSER2 yang akan menjadi pemiliki dari file.txt  

3. **etc**

## Bagian 3 _ SHELL SCRIPT
###### Pengertian Shell Script
*Shell Script* adalah sebuah bahasa pemograman yang disusun berdasarkan command-command shell. Dan merupakan program sebagai jembatan antara user dan kernel.
###### Keuntungan menggunakan Shell Script :
    
**Masalah :** Ketika ingin mengeksekusi command secara berturut-turut, hal itu harus menunggu command pertama dahulu, lalu bisa melakukan command yang berikutnya. 
**Solusi :** Dengan adanya SHELL SCRIPT tidak perlu menunggu lagi dan cukup menuliskan apa saja yang akan dilakukan sesuai urutan dan kemudian dieksekusi denga satu klik.
