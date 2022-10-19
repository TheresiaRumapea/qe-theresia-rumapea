# SUMMARY SECTION 27
# CI CD

#### INTRODUCTION CI/CD
- Integrasi Berkelanjutan adalah praktik mengintegrasikan kode ke dalam repositori bersama dan membangun/ menguji setiap perubahan secara otomatis, sedini mungkin - biasanya beberapa kali sehari.
- Terbaik dicapai melalui integrasi dengan kontrol versi

#### CONTINUOUS DELIVERY
- Continuous Delivery menambahkan bahwa perangkat lunak dapat dirilis ke produksi kapan saja, seringkali dengan secara otomatis mendorong perubahan ke sistem pementasan.
- Continuous Deployment melangkah lebih jauh dan mendorong perubahan pada produksi secara otomatis

#### WHAT MAKES GOOD CI/CD
> Decoupled Stage
    Masing-masing CI mengerjakan tugas tunggal yang terfokus
> Repeatable
    - Otomatis dengan cara yang secara konsisten dapat diulang

    - Perkakas juga harus bekerja untuk pengembang lokal
> Fail Past
    - Gagal pada tanda masalah
> Design with system in mind
    - Mencakup sebanyak mungkin bagian dari penyebaran, seperti: Aplikasi, Infrastruktur, Konfigurasi, Data
> Pipelines
    - Terus tingkatkan kepercayaan diri saat Anda bergerak menuju produksi
> Globally Unique Versions
    - Ketahui keadaan sistem setiap saat
    - Mampu menunjukkan perbedaan antara keadaan saat ini di masa depan

#### - CI/CD PROCESS
    1. Commit 
    2. Build
    3. Test
    4. Deploy

#### BENEFITS AND COSTS FROM IMPLEMENTING CI/CD

##### BENEFITS OF IMPLEMENTING CI
1. Defecting Bug In Early Stage
2. Reduce Bug Count
3. Development Process More Transparent
4. Efficient

##### BENEFITS OF IMPLEMENTING CD
1. Reduce the risk
2. Painless Deployment
3. Reduces Costs
4. Automated and Transparent Process
5. Releases more frequently

#### CONTINUOUS INTEGRATION COSTS
1. Write automated test
2. Server for automated test
3. Merge the code as often as possible

#### CONTINUOUS DELIVERY/DEPLOYMENT COSTS
1. Strong Foundations In CI
2. Need Highest Quality Of Test
3. Documentation Needs to be Update Frequently

#### CI/CD TOOLS
1. Jenkins is an open-source automation tool written in Java with Plugins built for continuous integration.
2. Atlassian Bamboo is a continuous integration build server that performs: automatic build, test, and releases in a single place.
3. Circle CI is a flexible CI tool that run in any environment like cross-platform mobile app, Python API server or Docker cluster. Thia tools reduce bugs and improve the quality of the application.
4. AWS Codebuild is a CI/CD tools that allow developers to build and test code at a continuous scale. 
5. Azure Devops is a CI/CD tools which can be relied on for planning, testing, deploying or distributing. This tool is created by Microsoft.
6. Gitlab CI (Continuous Integration) service is a part of Gitlab which manages the project and user interface and allows unit test on every commit and indicates with warning message when there is unsuccessful of build.  
7. Travis CI was the first CI as a Service tool. It introduced a new approach to building code in the cloud. This CI tool allows the user to sig up, link their repository, build, as well as test their apps.
8. Github Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.

#### COMPONENT OF GITHUB ACTIONS
1. Workflow
    A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository an d will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule. 
2. Jobs
    A job is a set of steps in a workflow that execute on the same runner. Each step is either a shell script that will be executed, or an action that will be run. Steps are executed in order and are dependent on each other. Since each step is executed on the same runner, you can share data from one step to another. 
3. Actions
    An actions is a custom application for the Github Actions platform that performs a complex but frequently repeated task. Use an action to help reduce the amount of repetitive code that you write in. 
4. Events
    An event is a specific activity in a repository that triggers a workflow run. Ex: activity can originate from Github when someone creates a pull request, opens an issue , or pushes a commit to a repository. 
5. Runners
    A runner is a server that runs your workflow when they’re triggered. Each runner can run a single jon at a time. Github provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows. 