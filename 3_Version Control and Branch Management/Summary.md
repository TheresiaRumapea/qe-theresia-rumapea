> Tools yang kita pakai yaitu salah satu jenis dari Version Control System (VCS) yaitu Git.
**GIT** adalah salah satu version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-sama.

> ADAPUN TAHAP TAHAP PROSES GIT
> 1 Git init
> 2 Git add README.md
> 3 Git commit -m “first commit”
> 4 Git branch -M main
> 5 git remote add origin http://theresia-rumapea    
> 6 git push -u origin main

> BRANCHES
Dibagi menjadi 2
    1. Master : Berisi folder yang memang di tahap production
    2. Development : Branch utama dalam pengembangan
    
    Dalam development terdiri dari beberapa branch yang masing-masing memiliki fungsi khusus, misalnya
    - Feature A
    - Feature B
    
    Contoh **Code Branch**
    > Git branch
    Git Branch untuk mengelist branch yang ada di server
    * master, artinya saat ini kita sedang berada pada master 
    > Git branch featureA
    Git branch featureA: membuat branch dengan nama featureA
    > git branch -a
    > git checkout -b featureB
    ingin membuat branch baru dan memindahkan posisi kerja saat ini yaitu di featureB.
    > git branch 
    untuk check branch apa saja yang ada dan juga posisi server saat ini. 
    > git push origin featureB
    untuk submit ke branch featureB
    > git checkout master
    memindahkan posisi kerja saat ini yaitu di master