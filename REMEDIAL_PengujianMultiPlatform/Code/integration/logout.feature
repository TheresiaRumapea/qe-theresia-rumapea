Feature: Log out Feature

    Scenario: Successfully Log out

        Given Navigate to login page
        When User enter email "megarumapea12@gmail.com"
        And User enter password "indonesia17"
        Then Click button login

        Given Navigate to open profile
        When Click button Logout
