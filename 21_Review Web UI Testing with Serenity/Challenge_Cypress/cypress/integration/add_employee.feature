Feature: Add Employee

    Scenario: Success add

        Given Navigate to login page
        When User enter username "Admin"
        And User enter password "admin123"
        And Click button login
        Then validate title page login

        And Navigate to Add employee page
        When User enter employee firstname "Windowsku"
        And User enter employee lastname "Siregar"
        And Click button save in personal detail
        Then Back to dashboard