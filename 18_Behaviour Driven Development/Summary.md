# SUMMARY SECTION 18
# Behaviour Driven Development

BDD Format : Menggunakan bahasa gherkin yang menggunakan bahasa inggris Non technical dapat memahami dan membaca fitur dari sistem yang diaplikasikan

User Story ==> menjelaskan kebutuhan pengguna dan menjelaskan fungsionalitas pengguna

Menuliskan scenario ==> menggunakan gherkin bdsrkan user story

Mengimplementasikan test script dalam setiap file berdasarkan scenario

Untuk Test Script pada BDD Harus terdapat User story dan Scenario nya : User story:

As a
I want
So That
contoh : As an existing user, Iwant to login, so that i can see may homeopage

Scenario dalam BDD :

- Given ==> menjelaskan kondisi awal sebelum pengguna akan melakukan aksi
- When ==> aksi yang dilakukan pengguna
- And ==> aksi lanjutan yang dilakukan pengguna
- Then ==> ekspektasi dari aksi yang dilakukan pengguna

Contoh :

- Given : I go to Login page
- When : I fill corect username & Password
- Then : I see my homepage

Cara menginstal cucumber :

1. Pertama,pastiin udh install java 17 yang udh kirim
2. Trus pastiin udh make java 17 juga di local environment kita
3. pastiin di intelij juga udh make java 17 cara memeriksanya: java --verison)
4. trus kalau udh,bikin project maven kayak yang dibikin ka aisyah kmrn
5. pomnya ,masukin yang udh aku kasih dari tag propertiesnya sampe kebawah
6. Terus mvn clean verify di terminal
7. Baru masukin la yang udh kita kerjain kayak kak aisyah kemarin
8. trus nge runnya pake mvn clean verify lagi