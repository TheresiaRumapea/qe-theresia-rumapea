Feature: Login Feature

    Scenario: Successfully login with VALID email & password

        Given Navigate to login page
        When User enter email "megarumapea12@gmail.com"
        And User enter password "indonesia17"
        Then Click button login

    # =====================================
    # Scenario: Unsuccessfully login with INVALID email & VALID password
    #     Given Navigate to login page
    #     When User enter email "megarumapeagmailcom"
    #     And User enter password "indonesia17"
    #     Then Click button login

    # =====================================
    # Scenario: Unsuccessfully login with VALID email & INVALID password
    #     Given Navigate to login page
    #     When User enter email "megarumapea12@gmail.com"
    #     And User enter password "indon"
    #     Then Click button login

    # =====================================
    # Scenario: Unsuccessfully login with INVALID email & password
    #     Given Navigate to login page
    #     When User enter email "megarumapeagmailcom"
    #     And User enter password "indon"
    #     Then Click button login

