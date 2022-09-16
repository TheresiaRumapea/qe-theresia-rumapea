# SUMMARY SECTION 13
# Map Data Structure

# Bagian 1 _ Pengertian Map : 
*Map* adalah generalisasi dari array. Map juga dapat disebut struktur data yang ada di java yang dapat digunakan untuk menyimpan banyak data di dalam nya.  Seperti array, map juga memiliki operasi untuk mengambil dan meletakkan elemen. Akan tetapi pada map, operasi ini tidak dilakukan pada bilangan 0, 1, … N-1, akan tetapi pada sembarang Object. Beberapa bahasa pemrograman menggunakan istilah array asosiatif (associative array) karena kesamaan perintah dengan array biasa.


# Bagian 2 _ Jenis Bentuk Map di Java
1. HashMap
2. WeakHashMap
3. IdentityHashMap
4. LinkedHashMap
5. ImmutableMap
6. SortedMap
7. TreeMap
8. EnumMap
  

# Bagian 3 _ Penjelasan Bentuk Map di Java
### 1. HashMap

*HashMap* adalah kelas implementasi dari Map, HashMap itu sendiri adalah interface yang mempunyai fungsi untuk memetakan nilai dengan kunci(key) unik ke dalam nilai (value). Kunci dan nilai(value) dalam HashMap boleh diset dengan null. HashMap sangat bermanfaat sebagai memory record management, dimana tiap record dapat disimpan disebuah Map. HashMap ini bisa diterapkan pada suatu aplikasi seperti kamus, yang mempunyai key dan value dalam aplikasi kamus ketika akan mencari arti dari suatu kata, kita akan memakai kata yang akan dicari artinya tersebut sebagai key, dan kita akan mendapatkan arti dari kata tersebut yang berupa value dari key yang telah kita masukkan. HashMap sangat cocok digunakan pada data cukup kompleks. Dengan demikian, programmer tidak harus menghafal letak index seperti pada array dan collection class sequence lainnya.

*HashMap* merupakan implementasi dari map yang menggunakan algoritma struktur data *hashtable*. Untuk membuat HashMap, kita terlebih dahulu membuat variabel “Bulan” dengan tipe variabel bulan adalah map yang key nya berupa “string” dan value nya berupa “Integer” dan variabel bulan ini kita buat yang baru kemudian kita mengisi tiga data hashMap tersebut.

### 2. WeakHashMap

*WeakHashMap* adalah implementasi antarmuka map yang hanya menyimpan referensi lemah ke key-nya. Menyimpan hanya referensi yang lemah memungkinkan pasangan nilai key untuk dikumpulkan dengan sampah ketika kuncinya tidak lagi direferensikan di luar WeakHashMap.

*WeakHashMap* juga mengunakan Hashtable tetapi bedanya,WeakHashMap key itu dapat dihilangkan jika tidak digunakan saat kita memanggil System.gc(); ini akan menyebabkan beberapa Q yang tidak ada lagi data nya akan hilang dari map.

### 3. IdentityHashMap
*IdentityHashMap* juga menggunakan HashTable tetapi jika key referensi yang berbeda maka akan dianggap sebagai data yang berbeda. Dan *IdentityHashMap* mengimplementasikan antarmuka Peta menggunakan Hashtable , menggunakan kesetaraan referensi sebagai ganti kesetaraan objek saat membandingkan kunci (dan nilai).

### 4. LinkedHashMap
*LinkedHashMap* tidak ada perbedaan yang signifikan dengan HashMap yang biasa tetapi secara internal HashMap menerapkan doublelinklist dan juga HashTable sebagai struktur data di dalam map nya.

*LinkedHashMap* adalah kombinasi dari HashTable dan LinkedList. Memiliki urutan iterasi yang terprediksi oleh linked list, namun pencarian yang cepat dalam memetakan value dan key ialah HashMap. Urutan iterasi ditentukan oleh urutan penyisipan, kemudian akan mendapatkan kunci(key) / nilai(value) kembali dalam urutan serta akan ditambahkan ke suatu Map. Disini harus sedikit berhati-hati, karena kembalinya memasukkan kunci (key) tidak mengubah urutan asli.

### 5. ImmutableMap
*ImmutableMap* artinya tidak dapat diubah menjadi map dalam bentuk ini tidak dapat di ubah isi nya baik ditambah atau mengubah data yang sudah ada.

### 6. SortedMap
*SortedMap* artinya yang dapat di urutkan baik secara asceding maupun descending dan masing-masing penerapan map ini memiliki cara sorted nya sendiri.

### 7. TreeMap
*TreeMap* adalah salah satu implementasi dari class interface yang mengurutkan collection berdasarkan key dari elemen berupa pasangan <key, value>.

### 8. EnumMap
*EnumMap* adalah implementasi khusus dari antarmuka Peta untuk jenis enumerasi . Ini memperluas AbstractMap dan mengimplementasikan antarmuka Peta di Java. EnumMap adalah koleksi terurut dan mereka dipertahankan dalam urutan alami kunci mereka (urutan kunci alami berarti urutan konstanta enum dideklarasikan di dalam enum type).


