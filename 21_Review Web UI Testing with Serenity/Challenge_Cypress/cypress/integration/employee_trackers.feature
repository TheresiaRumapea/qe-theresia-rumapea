Feature: Employee Trackers Feature

    Scenario: Success to see Employee

        Given Navigate to login page
        When User enter username "Admin"
        And User enter password "admin123"
        And Click button login
        Then validate title page login
        And Click Performance menu
        And Click Employee Trackers