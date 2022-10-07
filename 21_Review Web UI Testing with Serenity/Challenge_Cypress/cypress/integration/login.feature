Feature: Login Feature

    Scenario: Success login

        Given Navigate to login page
        When User enter username "Admin"
        And User enter password "admin123"
        And Click button login
        Then validate title page login



