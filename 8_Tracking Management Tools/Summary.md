# SUMMARY SECTION 8
# Tracking Management Tools

# BAGIAN 1 _ Pengertian JIRA dan Cara membuat Project di JIRA

Jira adalah alat bantu yang bertujuan untuk pelacakan bugs, pelacak issue dan manajemen proyek.

- **Create New Project At Jira**
    
    **Langkah-langkah membuat project baru**
    
    1. Klik button drop down menu di sebelah kiri atas dan klik **“Create Project”**
    2. Pilih **Scrum** sebagai metode, kemudian masukkan **nama project** dan click button **create** 
    3. Setelah **membuat project baru**
        1. **TO DO**
            
            Panel ini berisi story yang **akan dikerjakan** dan **sudah diprioritaskan** saat planning. Story yang ditempatkan paling atas menandakan bahwa story tersebut merupakan prioritas utama. 
            
        2. **IN PROGRESS**
            
            Panel ini berisi **story yang sedang dikerjakan** oleh **Software Engineer.** 
            
        3. **FINISH**
        
            Panel ini berisi story yang **telah selesai dikerjakan** oleh developer, namun **belum siap untuk tahap testing.**

        4. **DELIVER**
            
            Panel ini berisi story yang **siap memasuki tahap testing** oleh **quality engineer.**

        5. **TESTING**
            
            Panel ini berisi **story yang sedang diuji/testing** oleh **quality engineer.**

        6. **NEED FIX**
            
            Panel ini berisi **hasil proses testin**g yang **tidak lolos kriteria** oleh tim development.
        
        7. **DONE**
            
            Panel ini berisi story yang **sudah lolos** dari **kriteria testing** oleh tim development. 



# BAGIAN 2 _ 7 Poin yang digunakan dalam menciptakan Issue

#### 1. Project

#### 2. Issues Type
        a. Story 
            Story merupakan jenis issue yang biasa digunakan untuk membuat fitur baru.        
        b. Task
            Task merupakan jenis issue yang biasa digunakan untuk melakukan perincian tugas-tugas yang akan dikerjakan.
        c. Bug
            Bug merupakan jenis issue yang biasa digunakan jika terjadi penemuan bug saat proses testing oleh software tester.
        d. Epic
            Epic merupakan jenis issue untuk mengelompokkan task.
            
#### 3. Reporter
Tentukan reporter berdasarkan yang membuat tugas tersebut
        
#### 4. Description
Menuliskan description dengan jelas menggunakan format yang sama dengan dituliskan pada PIVOTAL TRACKER.
Kondisi Description
- Acceptance Criteria 
    Jika fitur yang dibuat sudah sesuai dengan acceptance criteria yang ditentukan oleh development team. 
- Test Implementation
    Membuka dokumentasi setelah melakukan proses testing (Test Scenario)
            
#### 5. Priority
Menentukan priority berdasarkan dari tingkat kesulitasn sebuah task atau issue tersebut
        
#### 6. Assignee
Menentukan assignee berdasarkan dari orang yang akan bertanggung jawab mengerjakan tugas tersebut. 
        
#### 7. Sprint
Menentukan sprint berdasarkan dari ruang waktu pengerjaan sebuah task atau issue. (1 minggu / 2 m)



# BAGIAN 3 _ FASE PADA JIRA

<img src="asset/fasejira.png" alt="fase pada jira" title="fase pada jira">

# BAGIAN 4 _ TASK TEORI 

###### 1. Apa yang dimaksud dengan Bugs ?
Jawab:
Bug merupakan jenis issue yang biasa digunakan jika terjadi penemuan bug saat proses testing oleh software tester.
    
###### 2. Apa yang dimaksud dengan “TO DO” pada JIRA ? 
Jawab:
TODO pada JIRA Panel ini berisi story yang **akan dikerjakan** dan **sudah diprioritaskan** saat planning. Story yang ditempatkan paling atas menandakan bahwa story tersebut merupakan prioritas utama. 
    
###### 3. Apa yang dimaksud dengan “IN PROGRESS” pada JIRA?
Jawab:
Panel ini berisi **story yang sedang dikerjakan** oleh **Software Engineer.** 
    
###### 4. Apa perbedaan antara “Deliver” dan “Finish” ?
Jawab:
- Deliver
Panel ini berisi story yang **siap memasuki tahap testing** oleh **quality engineer.**
- Finish
Panel ini berisi story yang **telah selesai dikerjakan** oleh developer, namun **belum siap untuk tahap testing.**
        
###### 5. Apa yang dimaksud dengan “EPIC” pada JIRA ?
Jawab:
Epic merupakan jenis issue untuk mengelompokkan task.
    
###### 6. Apa yang harus dilakukan saat menggunakan tools jira, jika kita menemukan bugs pada fitur yang sudah dilakukan testing? 
Jawab:
    a. Membuat issue bertipe bugs saat ditemukan ada yang tidak sesuai dengan criteria testing
    b. Memindahkan fitur yang berkaitan dengan bugs ke kolom “IN PROGRESS”