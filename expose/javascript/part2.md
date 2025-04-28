1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    It printed 3 in the console. 
2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
It printed 150 in the console.
3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
It printed 150 in the console.
4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
    [ 50, 100, 150 ]
    So the funciton return[50,100,150] input for it [100, 200, 300] with a discount of 0.5 (50%), then it will return half the value.
5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
 The variable i would only exist within the loop block (block scope). When line 12 tries to access i outside the loop with console.log(i), it fails with a "ReferenceError: i is not defined" because let variables are not accessible outside their declaring block.
6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
   declared let discountedPrice in a for loop, once the loop ends, discountedPrice is no longer accessible. 
7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
Printed 150, because for the lest item in the arr which is 300 times 0.5 comes to 150 as a result.
8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
It returns [ 50, 100, 150 ]. this is the arr for discunted price. 
9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
There is an error because using let instead of var to declare loop for i when loop finished i is no longer accessible. 
10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
It will print 3 as the arr length is 3 here.
11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
[ 50, 100, 150 ] It will return the discounted arr price.
12. Given the above Object, write the notation for:
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. Arithmetic
    A. '3' + 2 = '32' (string concatenation as one operand is a string)
    B. '3' - 2 = 1 (string '3' is converted to number for subtraction)
    C. 3 + null = 3 (null is converted to 0 in numeric operations)
    D. '3' + null = '3null' (string concatenation with null)
    E. true + 3 = 4 (true is converted to 1 in numeric operations)
    F. false + null = 0 (false converts to 0, null converts to 0)
    G. '3' + undefined = '3undefined' (string concatenation)
    H. '3' - undefined = NaN (undefined converts to NaN in numeric operations)

14. Comparison
    A. '2' > 1 = true (string '2' is converted to number 2, and 2 > 1)
    B. '2' < '12' = false (string comparison compares character by character, '2' > '1')
    C. 2 == '2' = true (loose equality converts string '2' to number 2)
    D. 2 === '2' = false (strict equality checks both type and value)
    E. true == 2 = false (true converts to 1, and 1 != 2)
    F. true === Boolean(2) = true (Boolean(2) evaluates to true, so true === true)

15. Explain the difference between the == and === operators.
    - == (loose equality) performs type conversion before comparing values
    - === (strict equality) compares both value and type without conversion

16. part2-question16.js

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result.
    1. modifyArray creates a new empty array (newArr)
    2. For each element in the input array [1,2,3]:
       - It calls the callback function doSomething on the element
       - doSomething multiplies each number by 2: doSomething(1) = 2, doSomething(2) = 4, doSomething(3) = 6
       - Each result is pushed to newArr
    3. The function returns newArr which contains [2,4,6]
 18. see part2-question18.js
 19. 