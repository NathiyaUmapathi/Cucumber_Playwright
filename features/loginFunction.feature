Feature: Login Functionality
    Scenario: Verify the valid login process
        Given User launch the application
        When User enter the username and password
            And User click on the login button
        Then the user should be redirected to the dashboard