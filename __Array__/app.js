//   there would be 3 solution of any problem ==> (brute force, better solution and optimal solution) <==

// 🟡 means important question.
// 🤔 means how I am solving problems (approuch).
// 🤓 means analysis solution TC & SC

// to visit any problem Press -> ALT + CLICK

/* brute force :-> the worst solution you can think of
   better solution :-> the solution which is better than brute force
   Optimal solution:-> most optimal or best solution of any problem 
*/

// Quetion No. 1 ================================================================================================================================

// Find the largest element in an array:->

// Problem Link :-> https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

// brute force :->
// 🤔  APPROUCH :-> first I'll sort this array by sort method in accending order and then I'll target the last element of sorted array

function largestElementInArrayBrute(array){
    let sortedArray = array.sort((a,b)=> a-b); //sorting array in accending order
    const lastElementIndex = array.length - 1;
    return sortedArray[lastElementIndex] // returning a last Element in sortedArraty 
}
// 🤓 analysis :-> we are using the sort method here so the time complexity would be : O(n log n) and the space Complexity is : O(1);

const largestElementBrute = largestElementInArrayBrute([1,3,2,12,4,]); // 12

// there is no better solution so jumping to optimal one :->

// Optimal solution :-> 

//  🤔 APPROUCH :-> now I'll make a varaible with smallest value I can think of and then I'll Itrete every element in an array and check if the value is bigger than the smallest varaible value I created if it is then I'll reasign the value of smallest varible with that value which is bigger than the smallest one.

function largestElementInArrayOptimal(array){
    let largestElement =  Number.MIN_VALUE; // making a varaible with smallest value 
//  cosnt largestElement = -Infinity;  you can use this as well
    for(let i = 0; i < array.length; i++){
        if(array[i] > largestElement){ // if array[i] bigger than largestElement value then largestElement value will be array[i];
            largestElement = array[i];
        }
    }
    return largestElement
}
// 🤓 analysis :-> time complexity would be : O(n) and the space Complexity is : O(1);

// Quetion No. 2 ================================================================================================================================

// 🟡 Find the second largest element in an array :->

// Problem Link :-> https://www.geeksforgeeks.org/problems/second-largest3735/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

// brute force :-> 
// 🤔 APPROUCH :-> I'll sort the array to find the largest element in array and then use reverse loop to to find the second largest and condition will be the second largest should not be equal to largest element and then I'll break the loop, why I am not using directly sortedArrat[n -2] becuz what if there are multiple same largest elements 

function findTheSecondLargestElementBrute(array){
    const sortedArrat = array.sort((a,b)=> a-b); // sorting array
    const n = array.length; 
    const largestElement = sortedArrat[n -1]; // largest element in an array
    let secondLargestELement;
    for(let i = n-2; i>=0; i--){
        if(sortedArrat[i] !== largestElement){ // if sortedArrat[i] is not equal to largestElement then the secongLargestELement will be sortedArray[i] 
            secondLargestELement = sortedArrat[i]
            return secondLargestELement // immediately returning a value 
        }
    }
    return -1 // return -1 if there are no second largest number in an array
}
// 🤓 analysis :-> time complexity would be : O(n log n) + n;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :-> In better I'll use the optimal solution of find largest number to find the largest number and then I'll use second loop to find the second largest number and condition will be the same as the brute force condition

function findTheSecondLargestElementBetter(array){
    let n = array.length;
    let largestElement = largestElementInArrayOptimal(array); // calling a optimal function of finding the largest number in an array that I have already been declared at line 32;
    let secondLargestELement = -Infinity;
    for(let i = 0; i< n; i++){ // for finding the second largest element
        if(array[i] > secondLargestELement && array[i] !== largestElement){ // if arra[i] is gretter then secondLargestElement and array[i] should not be equal to the largest number which is 7 
            secondLargestELement = array[i]
        }
    }
    return secondLargestELement
}
// 🤓 analysis :-> time complexity would be : O(2n) which is better then the brute force;

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :-> if someone take the place of largest then the previous one will become the second largest

function findTheSecondLargestElementOptimal(array){
    const n = array.length;
    let largestElement = array[0];
    let secondLargestELement = -Infinity;
    for(let i = 0; i < n; i++){
        if(array[i] > largestElement){ // if the array[i] is greeter then largestELement than the seconlargestELement will take the largest element and largest element will take the array[i]
            secondLargestELement = largestElement;
            largestElement = array[i]
        }else if(array[i] < largestElement && array[i] > secondLargestELement){ // or array[i] is smaller than the largest element && array[i] gretter then the secondLargestElement which mean array[i] should be smaller then the largest element and it should gretter then the secondlargestelement
            secondLargestELement = array[i]
        }
    }
    return secondLargestELement
}
//🤓 analysis :-> O(n) because we are using single loop ;


// Question No. 3 =========================================================================================================

//Q Check if the array is sorted or not ?

// Problem link :-> https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

// it is simple so doing only optimal solution....

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :-> we all know in sorted array the second element always greter or equal to the previous element but in in non-sorted array this condition will not true, mean if the previous element is greter than the current one then it is not a sorted Array

function checkIfArrayIsSorted(array){
    const n = array.length;
    for(let i = 1; i < n; i++){
        if(array[i] >= array[i-1]){ // if array[i] is greter or equal to array[i-1] (previous element) then do nothing 

        }else{ 
            return false; // else return false;
        }
    }
    return true;
}

// 🤓 analysis :-> the Time complexity will be O(n) becuz we are using only single loop i

//🟡 Question No. 4  =========================================================================================================

// Remove duplicates from sorted array (mulate the original array and first places should be all unique element and after that not care and return number of unique element)

// Problem link (LeetCode) :-> https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// Problem link (GeeksforGeeks) :-> https://www.geeksforgeeks.org/remove-duplicates-sorted-array/

// brute force :-> 
// 🤔 APPROUCH :-> to takcle this problem I will use Set data structure to make a new array with all unique elements and then I will use loop to change the value of original array elements

    function removeDuplicatesFromArrayBrute(array){
        const uniqueElement = Array.from(new Set(array)) // use Array.from to convert the set object to array 
        const n = uniqueElement.length; // first thing first we got the ans of how many unique element in an array
        for(let i = 0; i < n; i++){
            array[i] = uniqueElement[i] // changing the value with all unique element in first
        }

        return [array,n] // returning a both original mutated array and how many unique element in an array
    }
    console.log(removeDuplicatesFromArrayBrute([1,2,3,2,1,2,3,4,3]));

//🤓 analysis :-> set data structure will take (N log N) and the loop will take N so the brute force will be (N log N + N);
//  

// there is no Optimal solution 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :-> using 2 pointer apporouch i variable will placeed at one element and j will iterate and see if there is a element which is not equal to array[i] if it is then the next position of array[i] which is array[i+1] will take that unique element,  array[i+1] = array[j];

    function removeDuplicatesFromArrayOptimal(array){
        let i = 0;
        let n = array.length;
        for(let j = 1; j < n; j++){
            if(array[j] != array[i]){ // if array[i] is not equal to array[j] means we a unique element in array then next position of array[i] will be that unique element
                array[i+1] = array[j];
                i++;
            }
        }
        return [array, i+1] // returning array as well as how many element are unique in an array
    }
// 🤓 analysis :->  we are using only one pass so the Time Complexity will be O(n);





// Question No.4  =========================================================================================================

// left rotate the array by one place (first element should go to end);

// Problem link :-> https://leetcode.com/problems/rotate-array/description/


// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :-> to rotate the array I'll store the first element in temp variable and then I'll shift all elements towards left by on index and loop will start from 1 cuz shifting by one index and at the end I'll reasign last value with the variable temp which I have creted to store first element 

function rotateArrayByOnePlace(array){
    const temp = array[0];
    for(let i = 1; i< array.length;i++){
        array[i-1] = array[i] // shifting array elements by one index;
    }
    array[array.length - 1] = temp; // reasigning last element with temp value which is first on value of origin array
    return array
}
// 🤓 analysis :->  the time complaxity is O(n) cuz we are using only one loop



// Question No. 5 =========================================================================================================

// left rotate the array by D places 

// Problem link :-> https://leetcode.com/problems/rotate-array/description/

// brute force :-> 
// 🤔 APPROUCH :-> 

function rotateArrayByDPlace(array,D){
    const n = array.length;
    D = D % n; // if the rotation is is equal to D then it well rotate but it will come to it's origin place if it is gretter then length then this formula will give me how much we have to rotate if the D is gretter then the length;

    const temp = [];

    // Step 1: Copying first d elements
    // in the temporary array  
    for(let i = 0; i < D; i++){
        temp[i] = array[i];
    }

     // Step 2: Shift last (n-d) elements
    // to the left by d places in the given array:
    for(let i = D; i < n; i++){
        array[i-D] = array[i]
    }
    // Step 3: Place the elements of the temporary
    // array in the last d places of the given array:
    for(let i = n - D; i < n; i++){
        array[i] = temp[i - (n - D)]
    }
    return array
}


//🤓 analysis :-> Time Complexity: O(n + d)  Space Complexity: O(d); 

// OPTIMAL SOLUTION :->  just for space complaxity
// 🤔 APPROUCH :-> if I reverse the element from 0 to index D and then I reverse the index from D to n after that if I reverse the whole array we'll get the solution 

function rotateArrayByDPlaceOptimal(array,D){
    const n = array.length;
    D = D % n;
    // first I am reversing array from 0 index to D index
    reverseArray(array,0,D - 1); 

//  second I am reversing array from D index to n-1 which is length
    reverseArray(D,n - 1);

//  and last I am reversing whole array
    reverseArray(0,n - 1)

    function reverseArray(arr,start,end){
        while(start < end){
           [arr[start], arr[end]] = [arr[end], arr[start]] // using destructuring
           start++
           end--
        }
    }
    return array
}

// 🤓 analysis :-> the time complexity will be O(n2) but the space will be O(n)



// Question No. 6 =========================================================================================================

//  Move all the zeros to the end of the array

// Problem link :-> https://leetcode.com/problems/move-zeroes/description/

// brute force :-> 

// 🤔 APPROUCH :-> I will count zero and removing simultaneously by using splice method and after I will add zeros to end of the array

function moveZerosToEnd(array){
    const n = array.length;
    let zeroCounter = 0; 
    for(let i = 0; i < n; i++){
        if(array[i] == 0){
            array.splice(i,1); 
            zeroCounter++;
            i--; // decresing the length of array so not to skip any element that's why I am decreasing 
        }
    }
    for(let i = 0; i <= zeroCounter; i++){
        array.push(0);
    }
    return array;
}


//🤓 analysis :-> ; the time complexity will be  O(n^2) of moveZerosToEnd and space complexity will be O(1)


// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :-> I will use 2 pointer approauch j will always be in 0 and if i will travel and see if there is non-zero element in an array if it is we will swap it and increse the j;

function moveZerosToEndOptimal(array){
    let j = -1;
    for(let i = 0; i < array.length;i++){
        if(array[i] == 0){
            j = i;
            break;
        }
    }
    for(let i = j+1; i < array.length; i++){
        if(array[i] !== 0){
            [array[j],array[i]] = [array[i],array[j]]
            j++
        }
    }
    return array
}
console.log(moveZerosToEndOptimal([1,2,0,3,0,8,6,0]))



// 🤓 analysis :->  time complexity O(n) and SC will be O(1)


// Question No. 7  =========================================================================================================

// union of two sorted arrays

// Problem link :-> https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1

// brute force :-> 
// 🤔 APPROUCH :-> i will push all element in one array name unionArray and then I will use Set for unique 

function unionSortdArray(array1, array2){
    let unionArray = array1;
    for(let i = 0; i< array2.length; i++){
        unionArray.push(array2[i])
    }
    const union = Array.from(new Set(unionArray))
    return union
    
}

//🤓 analysis :-> loop will take O(n) and Set will take O(m) to the overall time complxity will be O(n+m) and space complexity will be O(n+m);

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->  using two pointer approuch the first thing is both are sorted and i will place i at array1 and j will array2 check if array1[i] is smaller or equal array2[j] if it is then check is that element is already present in an array if not then puh it


function twoUnionArray(array1,array2){
    let i = 0;
    let j = 0;
    let union = []
    while(i < array1.length && j < array2.length){
        if(array1[i] <= array2[j]){
            if(!union.includes(array1[i])){
                union.push(array1[i])
            }
            i++;
        }else{
            if(!union.includes(array2[j])){
                union.push(array2[j])
            }
            j++;
        }
    }
    // if there still array2 element is left
    while(j < array2.length){
        if(!union.includes(array2[j])){
            union.push(array2[j])
        }
        j++;
    }
    // if there still array1 element is leeft
    while(i < array1.length){
        if(!union.includes(array1[i])){
            union.push(array1[i])
        }
        i++;
    }
    return union
}
console.log(twoUnionArray([1,2,3],[2,3,4,5,6]));

// 🤓 analysis :-> TC will be O(m + n) and SC O(m + n)



// Question No. 8  =========================================================================================================

// Intersection of two sorted array

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> so to solve this problem I'll use 2d loop and traversing every element and I'll check if there is same element is present in both array if it is then I'll push that element in new array name unionIntersection;

function unionIntersectionBrute(array1,array2){
    const unionIntersection = [];
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array1[i] === array2[j]){
                unionIntersection.push(array1[i]);
                break;
            }else if(array2[j] > array1[i]){
                break; // Since the arrays are sorted, so no need to continue
            }
        }
    }
    return unionIntersection;
}

//🤓 analysis :-> Time Complexity: O(m * n) where m and n are the lengths of the two arrays. Space Complexity: O(min(m, n)) where m and n are the lengths of the two arrays.

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :-> i'll use two pointer approuch i and j, i will handle array1 and j will array2 if array1[i] is equal to array2[j] then we will puch into a result array or if array1[i] is smaller then array2[j] then I'll increment i++ else increment j

    function unionIntersectionOptimal(array1,array2){
        const result = [];
        let i = 0;
        let j = 0;
        while(i < array1.length && j < array2.length){
            if(array1[i] === array2[j]){
                result.push(array1[i]);
                i++;
                j++;
            }else if(array1[i] < array2[j]){
                i++;
            }else{
                j++;
            }
        }
        return result;
    }


// 🤓 analysis :-> Time Complexity: O(m + n) where m and n are the lengths of the two arrays. Space Complexity: O(min(m, n)) for the result array.

// Question No. 9 =========================================================================================================

// Missing number

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> first I'll find the min and max then I'll start loop to create a array and push all element in it and I'll iterate and check if any number is not present in the array.

function missingNumberBrute(array){
    const min = Math.min(...array);
    const max = Math.max(...array);
    const resultArray = [];
    // to create a array from min to max;
    for(let i = min;i <= max; i++){
        resultArray.push(i)
    }
    // finding the missing element in an array
    for(let i = 0; i < array.length; i++){
        if(array[i] !== resultArray[i]){
            return resultArray[i]
        }
    }
}


//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :- I will make array fill 0 in it by using fill method

function missingNumberBetter(array){
    const hash = Array.from({length:array.length+1}).fill(0);
    for(let i = 0; i < array.length -1; i++){
        hash[array[i]]++;
    }
    for(let i = 1; i <= array.length; i++){
        if(hash[i] === 0){
            return i
        }
    }
    return -1
}



// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->  

    function missingNumberOptimal(array){
        let xor1 = 0;
        let xor2 = 0;

        for(let i = 0; i< array.length - 1; i++){
            xor2 = xor2 ^ array[i];
            xor1 = xor1 ^ (i+1)
        }
        xor1 = xor1 ^ array.length;
        return xor1 ^ xor2
    }
    

// 🤓 analysis :-> 

// Question No. 10 =========================================================================================================

// Maximum consecutive number 1

// Problem link :->

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->  I will make two variable name prviousMax and counter and check if ther is one then I'll increment counter and check if counter is bigger then the prviousMax if it is then the previousMax = counter; else if the array[i] is zero then counter will be 0 and the streak will break of one 

    function maximumConsecutiveOne(array){
        let previousMax = 0;
        let counter = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i] === 1){
                counter++;
                if(counter > previousMax){
                    previousMax = counter
                };
            }else if (array[i] == 0){
                counter = 0;
            }
        }
        return previousMax
    }

// 🤓 analysis :-> 

// Question No. 11 =========================================================================================================

// find the number that appear once 

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> same linear search on every element

function findNumberAppearOnce(array){
    for(let i = 0; i < array.length; i++){
        let found = false;
        for(let j = 0; j < array.length; j++){
            if(i!=j && array[i] === array[j]){
                found = true
            }
        }
        if(!found){
            return array[i]
        }
    }
    return -1;
}
//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :- I'll use hash here 

    function findNumberAppearOnceBetter(array){
        const hash = Array.from({length:array.length + 1}).fill(0);
        for(let i = 0; i< array.length; i++){
            hash[array[i]]++
        }
        for(let i = 0; i < hash.length; i++){
            if(hash[i] == 1){
                return i;
            }
        }
        
        return -1
    }

// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->






// 🤓 analysis :-> 

// Question No. 12. =========================================================================================================

// longest subarray with k sum

// Problem link :->

// brute force :->   
// 🤔 APPROUCH :-> I'll generate array

function longestSubarrayWithKSum(array, k){
    let max = 0;
    for(let i = 0; i < array.length; i++){
        let s = 0;
        for(let j = i; j < array.length; j++){
           s += array[j];
           if(s === k){
            max = Math.max(max, j-i + 1)
           }
        };
    };
    return max
};

console.log(longestSubarrayWithKSum([1,2,3,1,1,1,4,2,3],3));
//🤓 analysis :-> ;

// BETTER SOLUTION :-> this solution is optimal one only for positive and negitive
// 🤔 APPROUCH :-

function longestSubarrayWithKSumBetter(array,k){
    const hashMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        if(sum === k){
            maxLen = Math.max(maxLen, i+ 1);
        }
        let remening = sum - k;
        if(hashMap.has(remening)){
            let len = i - hashMap.get(remening);
            maxLen = Math.max(len,maxLen);
        }
        if(!hashMap.has(remening)){
            hashMap.set(sum,i)
        }
    }
    return maxLen;

}

// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->   and this optimal one for positive and zeros
// 🤔 APPROUCH :-> let's use two pointer approuch the condition will be if the sumbition exceed the k then we will move left towords the right and

    function longestSubarrayWithKSumOptimal(array, k){
        let left = 0;
        let right = 0;
        let maxLen = 0;
        let sum = 0;
        while(right <= array.length){
            while(left <= right && sum > k){ // this loop will check if the sum is greeter then k then subtract sum - array[left] and increment left
                sum -= array[left];
                left++
            };
            if(sum === k){
                maxLen = Math.max(maxLen, right - left + 1);
            }
            right++;
            if(right < array.length){
                sum+= array[right];
            }
        }
    }


// 🤓 analysis :-> 

// Question No. 13 =========================================================================================================

// Two sum

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> finding by linear search. 

    function twoSum(array,target){
        for(let i = 0; i < array.length;i++){
            for(let j = i + 1; j < array.length; j++){
                if(array[j] + array[i] == target && i!==j){
                    return [i,j]
                }
            }
        }
    }

//🤓 analysis :-> near TC O(n2);

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :- using hashMap

    function twoSumBetter(array,target){
        let hashMap = {};
        for(let i = 0; i < array.length; i++){
            let num = array[i];
            let moreNeeded = target - num;
            if(hashMap[moreNeeded]!== undefined){
                return [hashMap[moreNeeded], i]
            }
            hashMap[num] = i;
        }
        return [-1,-1]
    }

// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  optimal approuch just for to return if there any two element is present an array or not
// 🤔 APPROUCH :-> i'll sort the array and then i'll use 2 pointer approuch left will place 

    function twoSumOptimal(array,target){
        array.sort((a,b)=> a-b);
        let left = 0;
        let right = array.left - 1;
        while(left < right){
            let getting = array[left] + array[right];
            if(getting === target){
                return "YES";
            }else if(getting < target){
                left++
            }else{
                right++
            }

        }
        return "NO";
    }

// 🤓 analysis :-> 

// Question No. =========================================================================================================

// 

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :->



//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :-





// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->






// 🤓 analysis :-> 

// Question No. =========================================================================================================

// 

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :->



//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :-





// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->






// 🤓 analysis :-> 

// Question No. =========================================================================================================

// 

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :->



//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :-





// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->






// 🤓 analysis :-> 

// Question No. =========================================================================================================

// 

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :->



//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :-





// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->






// 🤓 analysis :-> 

// Question No. =========================================================================================================

// 

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :->



//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :-





// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->






// 🤓 analysis :-> 