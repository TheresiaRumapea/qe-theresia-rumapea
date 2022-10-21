Feature: Change Password Feature

    Scenario: Successfully Change Password with Valid Current Password & Valid (Password and Password Confirmation)

        Given Navigate to login page
        When User enter email "megarumapea12@gmail.com"
        And User enter password "indonesia17"
        Then Click button login

        Given Navigate to open profile
        When Click account setting
        And Click tab change password
        And User enter current password "indonesia17"
        And User enter password "belanda17"
        And User enter password confirmation "belanda17"
        Then Click button change password 

    #=====================================
    # Scenario: Unsuccessfully Change Password with Valid Current Password & Invalid (Password and Password Confirmation)

    #     Given Navigate to login page
    #     When User enter email "megarumapea12@gmail.com"
    #     And User enter password "belanda17"
    #     Then Click button login

    #     Given Navigate to open profile
    #     When Click account setting
    #     And Click tab change password
    #     And User enter current password "belanda17"
    #     And User enter password "0-0-0"
    #     And User enter password confirmation "0-0-0"
    #     Then Click button change password 

    # =====================================
    # Scenario: Unsuccessfully Change Password Invalid Current Password & Valid (Password and Password Confirmation)

    #     Given Navigate to login page
    #     When User enter email "megarumapea12@gmail.com"
    #     And User enter password "indonesia17"
    #     Then Click button login

    #     Given Navigate to open profile
    #     When Click account setting
    #     And Click tab change password
    #     And User enter current password "belanda17"
    #     And User enter password "namakumega17"
    #     And User enter password confirmation "namakumega17"
    #     Then Click button change password 

    # =====================================
    # Scenario: Unsuccessfully Change Password Invalid Current Password & Invalid (Password and Password Confirmation)

    #     Given Navigate to login page
    #     When User enter email "megarumapea12@gmail.com"
    #     And User enter password "indonesia17"
    #     Then Click button login

    #     Given Navigate to open profile
    #     When Click account setting
    #     And Click tab change password
    #     And User enter current password "belanda1745"
    #     And User enter password "nama"
    #     And User enter password confirmation "nama"
    #     Then Click button change password 



        
