# amira
Create a calculate function. The function must accept arithmetic operations of two numbers as a string and return a string with the result of their execution.
The function takes data from arguments and returns with return.

Requirements

The solution must pass all tests.
The calculator can perform addition, subtraction, multiplication and division operations with two numbers: a + b, a - b, a * b, a / b. The data is transferred as a single line!
The calculator can work with both Arabic (1,2,3,4,5…) and Roman (I,II,III,IV,V…) numbers. Both operands must be either Arabic or Roman.
The operands must be in the range 1 to 10 inclusive, no zero. The answer may be more than 10.
The calculator can only work with integers, accepts and returns.
The output result is always a string with an integer. In division, we take into account only the integer part - we discard the decimal part, for example 2 / 4 \u003d 0.5 - we return 0.
The calculator can only work with Arabic or Roman numerals at the same time, when the user enters a string like 3 + II, the calculator should throw an exception (error) and stop working.
Since there are no zero and negative numbers in the Roman numeral system, we return an empty string instead. (for example I - II = '')
When calling the calculator with inappropriate numbers, the function throws an exception and exits.
When calling the calculator with a string that is not a math example with one of the arithmetic operations described in the requirement, the application throws an exception and exits.
