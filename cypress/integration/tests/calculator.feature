Feature: Online Calculator Scenarios
    As a user of the online calculator
    I want to verify that the calculator performs basic calculations correctly

    @Regression @Positive
    Scenario Outline:  "<Scenario>" of positive numbers
        Given user open the calculator page
        When user enter "<value1>" "<operator>" and "<value2>"
        Then user should be able to see "<expected_output>"
        Examples:
            | Scenario    | value1 | operator | value2 | expected_output    |
            | subtraction | 3      | -        | 2      | 001_subtractionPos |
            | division    | 5      | /        | 4      | 002_divisionPos    |
            | addition    | 2.5    | +        | 3.8    | 003_additionPos    |

    @Regression @Positive
    Scenario Outline:  "<Scenario>" of negative numbers
        Given user open the calculator page
        When user enter "<value1>" "<operator>" and "<value2>"
        Then user should be able to see "<expected_output>"
        Examples:
            | Scenario    | value1 | operator | value2 | expected_output    |
            | subtraction | -3     | -        | -2     | 004_subtractionNeg |
            | division    | -5.25  | /        | -4.4   | 005_divisionNeg    |
            | addition    | -2     | +        | -3     | 006_additionNeg    |

    @Regression @Positive
    Scenario Outline:  "<Scenario>" of positive and negative numbers
        Given user open the calculator page
        When user enter "<value1>" "<operator>" and "<value2>"
        Then user should be able to see "<expected_output>"
        Examples:
            | Scenario    | value1 | operator | value2 | expected_output       |
            | subtraction | -12    | -        | 11     | 007_subtractionPosNeg |
            | division    | 15.25  | /        | -4.5   | 008_divisionPosNeg    |
            | addition    | -8     | +        | 3      | 009_additionPosNeg    |

    @Regression @Negative @Boundary
    Scenario Outline: "<Scenario>" numbers Division by "<divisor>"
        Given user open the calculator page
        When user enter "<value1>" "/" and "<value2>"
        Then user should be able to see "<expected_output>"
        Examples:
            | Scenario | divisor | value1 | value2 | expected_output   |
            | Positive | 0       | 4      | 0      | 0010_posDivByZero |
            | Positive | 1       | 4      | 1      | 0011_posDivByOne  |
            | Positive | itself  | 4      | 4      | 0012_posDivBySame |
            | Negative | 0       | -4     | 0      | 0013_negDivByZero |
            | Negative | 1       | -4     | 1      | 0014_negDivByOne  |
            | Negative | itself  | -4     | 4      | 0015_negDivBySame |

    @Regression @Boundary
    Scenario Outline: Calculating very "<Scenario>" numbers
        Given user open the calculator page
        When user enter "<value1>" "<operator>" and "<value2>"
        Then user should be able to see "<expected_output>"
        Examples:
            | Scenario | value1     | operator | value2    | expected_output |
            | large    | 999999999  | +        | 999999999 | 0016_largeValue |
            | small    | -999999999 | -        | 999999999 | 0017_smallValue |