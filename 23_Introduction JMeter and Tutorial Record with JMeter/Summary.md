# SUMMARY SECTION 23
# Introduction JMeter and Tutorial Record with JMeter

## Introduction to JMeter
Some Know Tools
1. Apache JMeter adalah perangkat lunak sumber terbuka, aplikasi desktop Java 100% murni, yang dirancang untuk membuat uji perilaku fungsional dan mengukur kinerja situs web. Awalnya dirancang untuk aplikasi web pengujian beban tetapi sejak itu diperluas ke fungsi pengujian lainnya.
        
    Pros of Jmeter
    - Open source
    - Easy to use GUI/Non GUI
        
    Cara Install tools
    1. Install JDK (Java Development KIt) Software for compile java code         
    2. Search Jmeter         
    3. Download file , Find the binary and download file apache-jmeter.zip
    4. Open file, Extract file apache-jmeter.zip by double click it

    Open JMeter
    - Open terminal
    - Navigate to the bin folder
      cd
      this/is/your/folder/apache-jmeter-version/bin
    - Run JMeter
        .\jmeter.bat
        
    Install plugin
    Plugins are software add-ons installed on a program, to run addtional features in an application or program
        
    1. Search Plugin
    2. Download file.jar
        Download plugin-manager.jar 
    3. Open directory Jmeter 
        Open directory Jmeter and navigate to lib/ext directory
    4. Move file. jar
        Move file plugin-manager.jar into lib/et in JMeter directory
    5. Restart

## Open JMeter
Some components of JMeter script
- **Test plan**, rencana besar tes yang akan dilakukan (paarent)
- **Thread Groups**, Kumpulan yang menjalankan skenario yang sama
- **Samplers**, sebutan untuk request yang dikirim ke server
- **Config elements**, Elemen yang digunakan untuk konfigurasi atau modifikasi sampler requests yang dikirim ke server
- **Listeners**, perekam data yang dihasilkan dari tes
- **Timers**, fitur ini akan jalan duluan sebelum semua fitur yang lain berjalan
- **Assertions**, seperti assert API/Web/Testing, merupakan kriteria tambahan apakah pass/tidak
- **Pres-post-processors**, fitur yang memproses renponse data sebelum/sesudah tes.

## Select Template
1. Click on the Templates..(1)
    
    button right next to new file button on the toolbar, or by selecting file Templates.. from the menu.
    
2. Then, select template as recording (2)
3. Click on the Create (3) button. Refer to the following screenshot.

## Enable HTTPS Test Script recorder
1. Click on the HTTP(S) Test Script Recorder (1)
2. Then, select toggle (2) to enable HTTPS (S) Test Script recorder

## Start HTTP(S) Test Script Recorder
1. Under the test plan content section, choose the Test Plan -> Tread Group -> Recording Controller dropdown.
2. Click on the Start(2) button at the botton of the recorder component.
3. Accept the Root CA certificate by cliking on the OK button From The ROOt CA Certication popup.

## Set up Proxy on your Firefox Browser
1. Open your Firefox Browser
2. Click on the hamburger button (1) at right Firefox Account.
3. And the click Preferences (2)

Let’s Record
1. Go to
        [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login] on your Firefox browser
2. Fil with the Username and password (already on the web).
3. Click Login (2)
4. Result from record already created

## Stop Your Record
1. Stop your record on jmeter
2. Disable HTTP(S) Test Script Recorder

## Let’s Run
1. Fill number of threads(users) with 3
2. Click Run menu and click Start to run your test plan. Dont’s forget to save the plan
3. See view result table(3)

## Run in CLI Mode
1. Open your terminal or Cammand Prompt
2. Redirect your path to \apache-jmeter-version\bin
3. Type Jmeter -n -t [path to jmx file] -l [path to results file in CSV]
4. Open Jmeter in GUI mode, load the generated csv file on your Google Sheets