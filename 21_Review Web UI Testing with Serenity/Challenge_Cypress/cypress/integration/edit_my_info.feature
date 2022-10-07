Feature: Edit My Info Feature

    Scenario: Success edit

        Given Navigate to login page
        When User enter username "Admin"
        And User enter password "admin123"
        And Click button login
        Then validate title page login

        Given Navigate to my info tab
        When User enter employee firstname "Theresia"
        And User enter employee lastname "Rumapea"
        And Click button save in personal detail
        Then Back to dashboard


        


