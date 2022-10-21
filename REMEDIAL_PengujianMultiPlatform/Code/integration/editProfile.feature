Feature: Edit Profile Feature

    Scenario: Success edit profile - Successfully Edit Last Name 

        Given Navigate to login page
        When User enter email "megarumapea12@gmail.com"
        And User enter password "indonesia17"
        Then Click button login

        Given Navigate to open profile
        When Click button view profile
        And Click button edit profile
        And Enter last name "Halowe"
        Then Click buttom update account

    # Scenario: Success edit profile - Unsuccessfully Edit Paypal 

    #     Given Navigate to login page
    #     When User enter email "megarumapea12@gmail.com"
    #     And User enter password "indonesia17"
    #     Then Click button login

    #     Given Navigate to open profile
    #     When Click button view profile
    #     And Click button edit profile
    #     And Enter paypal email "Theresia@"
    #     Then Click buttom update account
