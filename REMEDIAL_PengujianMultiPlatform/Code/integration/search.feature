Feature: Search Feature

    Scenario: Successfully Search with Valid Keyword

        Given Navigate to login page
        When User enter email "megarumapea12@gmail.com"
        And User enter password "indonesia17"
        Then Click button login

        Given User enter keyword want to Search "view"
        When Click button search

    # =====================================
    # Scenario: Unsuccessfully Search with Invalid Keyword
    #     Given Navigate to login page
    #     When User enter email "megarumapea12@gmail.com"
    #     And User enter password "indonesia17"
    #     Then Click button login

    #     Given User enter keyword want to Search "---"
    #     When Click button search

    # =====================================
    # Scenario: Unsuccessfully Search with Empty Keyword
    #     Given Navigate to login page
    #     When User enter email "megarumapea12@gmail.com"
    #     And User enter password "indonesia17"
    #     Then Click button login

    #     When Click button search