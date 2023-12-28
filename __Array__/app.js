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

// Question No. 14 =========================================================================================================

//  sort an array of 0, 1, 2;

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> just use sort;
    function sortAnArray012(array){
        return array.sort();
    }


//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :- what i'll do is create three varaible name zero, one, two and then i'll count how many zero,one and two are there and then i'll do another three loop to chenge the values of original array

function sortAnArray012Better(array) {
    let zero = 0, one = 0, two = 0;
    
    // Count the occurrences of 0, 1, and 2
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zero++;
        } else if (array[i] === 1) {
            one++;
        } else {
            two++;
        }
    }

    // Update array elements based on counts
    for (let i = 0; i < zero; i++) {
        array[i] = 0;
    }
    for (let i = zero; i < zero + one; i++) {
        array[i] = 1;
    }
    for (let i = zero + one; i < zero + one + two; i++) {
        array[i] = 2;
    }
}


// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  DNF algorithm
// 🤔 APPROUCH :-> if there is zero then i will swap the values and increse the low and mid else if there arr[mid] is 1 then just increse mid++ else swap arr[mid] with arr[high];

var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while(mid <= high){
        if(nums[mid] == 0){
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            mid++;
            low++;
        }else if(nums[mid] == 1){
            mid++;
        }else{
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
 };
 


// 🤓 analysis :-> 

// Question No. 15 =========================================================================================================

// majority element with n/2

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> let's do linear search

 function majorityElement(array){
    let gretterThen = Math.floor(array.length / 2);
    for(let i = 0; i < array.length; i++){
        let counter = 0;
        for(let j = 0; j < array.length; j++){
            if(array[i] === array[j]){
                counter++
            }
        }
        if(counter > gretterThen){
            return array[i]
        }
    }
    return -1;
 }

//🤓 analysis :-> ;

// BETTER SOLUTION :->
// 🤔 APPROUCH :- let's do hashMap;

 function majorityElementBetter(array){
    let gretterThen = Math.floor(array.length / 2);
    let hashMap = {};
    for(let i = 0; i < array.length; i++){
        if(hashMap[array[i]]){
            hashMap[array[i]]++
            if(hashMap[array[i]] > gretterThen){
                return array[i]
            }
        }else{
            hashMap[array[i]] = 1
        }
    }
    return -1
 }

// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  Moore's voting algo
// 🤔 APPROUCH :->

    function majorityElementOptimal(array){
        let candidate;
        let counter = 0;
        for(let i = 0; i < array.length; i++){
            if(counter == 0){
                candidate = array[i];
            }
            if(array[i] === candidate){
                counter++
            }else{
                counter--
            }
        }
        counter = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i] === candidate){
                counter++
            }
        }
        if(counter > Math.floor(array.length / 2)){
            return candidate
        }else{
            return -1;
        }
    }


// 🤓 analysis :-> 

// Question No.15 =========================================================================================================

// longest subarray sum

// Problem link :->

// brute force :-> iterate 
// 🤔 APPROUCH :->

    function longestSubarraySum(array){
        let maxLen = 0;
        for(let i = 0; i< array.length; i++){
            for(let i = j; j< array.length; j++){
                let sum = 0;
                for(let k = i; k <= sum; k++){
                    sum += array[i]
                    maxLen = Math.max(maxLen,sum)
                }
            }
        }
    }

//🤓 analysis :->  TC will be O(n3);

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :-

function longestSubarraySumBetter(array){
    let maxLen = 0;
    for(let i = 0; i< array.length; i++){
        let sum = 0;
        for(let i = j; j< array.length; j++){
                sum += array[i]
                maxLen = Math.max(maxLen,sum);

        }
    }
}


// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  kadane's algo
// 🤔 APPROUCH :->

    function longestSubarraySumBetterOptimal(array){
        let maximum = Number.MIN_SAFE_INTEGER;
        let sum = 0;
        for(let i = 0; i< array.length; i++){
            sum+= array[i];
            if( sum > maximum){
                maximum = sum
            }
            if(sum < 0){
                sum = 0
            }
        }
        return maximum
    }


// 🤓 analysis :-> 

// Question No.16. =========================================================================================================

// rearange array elment by sign 

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> let's make a two array positive and negative loop on array and distribute values as in array then second loop to make changes in original remember this if there are equal positive and equal nagitive then the array will be even to the order we have to place this number should be in positive, negative,positive,negative like that and the positive will be on even index and the negative will be on odd index

    function rearrangeArray(array){
        const positive = [];
        const negative = [];
        for(let i = 0; i< array.length;i++){
            if (array[i] > 0) {
                positive.push(array[i]);
              } else {
                negative.push(array[i]);
              }
        }
        for(let i = 0; i < array.length / 2; i++){
            array[2*i] = positive[i];
            array[2*i+1] = negative[i];
        }
        return array
    }

//🤓 analysis :-> ;


// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :- let's do with two pointer approuch if array[i] is positive then pointer pos will be set and increment by 2 and same for that as well

    function rearrangeArrayOptimal(array){
        const result = [];
        let pos = 0;
        let neg = 1;
        for(let i = 0; i < array.length; i++){
            if(array[i] < 0){
                result[neg] = array[i];
                neg += 2;
            }else{
                result[pos] = array[i];
                pos += 2;
            }
        }
        return result;
    }

//  variety-2;
// does'nt care any posi or neg number can be more in an array

function rearrangeArrayVariety_2(array){
    const pos = [];
    const neg = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            pos.push(array[i]);
        }else{
            neg.push(array[i])
        }
    }
    if(pos.length < neg.length){
        for(let i = 0 ;i< pos.length;i++){
            array[2*i] = pos[i];
            array[2*i+1] = neg[i]
        }
        let index = pos.length * 2;
        for(let i = pos.length; i < neg.length;i++){
            array[index] = neg[i];
            index++
        }
    }else{
 
      for(let i=0;i<neg.length;i++){
      
        A[2*i] = pos[i];
        A[2*i+1] = neg[i];
    }
      
      let index = neg.length*2;
      for(let i = neg.length;i<pos.length;i++){
          
          A[index] = pos[i];
          index++;
    }
}
}

// 🤓 analysis :-> 


// Question No. =========================================================================================================

// leader in an array (evething on the right should be smaller);

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> linear search

function leaderInArray(array){
    const leader= [];
    for(let i = 0; i < array.length; i++){
        let isLeader = true;
        for(let j = i+1; j < array.length;j++){
            if(array[i] < array[j]){
                isLeader = false
            }
        }
        if(isLeader){
            leader.push(array[i]);
        }
    }
}


//🤓 analysis :-> ;


// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :-> i'll make variable with min value and then i'll use reverse loop check if there is a value is gretter then the max variable if it is then the value is leader and reaign the max value to array[i] which is gretter then max;

    function leaderOptimal(array){
        let max = Number.MIN_SAFE_INTEGER;
        const leader = [];
        for(let i = array.length-1; i>=0;i--){
            if(array[i]> max){
                leader.push(array[i]);
                max = array[i]
            }
        }
        return leader
    }

// 🤓 analysis :-> 

// Question No. =========================================================================================================

// longest consecutive sequece


// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> linear search


//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :-

var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0
    }
    nums.sort((a,b)=> a-b);
    let longest = 1
    let currCount = 0;
    let lastSmaller = Number.MIN_SAFE_INTEGER;
    for(let i =0; i < nums.length;i++){
        if(nums[i]- 1 == lastSmaller){
            currCount++;
            lastSmaller = nums[i]
        }else if(nums[i] !== lastSmaller){
            currCount = 1;
            lastSmaller = nums[i]
        }
        longest = Math.max(longest,currCount)
    }
    return longest
};


// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :-> returning 0 if the array is empty create set data to remove duplicates alse create varible to store longest streak with 1; loop through setData and check if there is no more previous value of current value then in if condition create 2 variable named currentNum = array[i] this for used to find the next element and create currentStreak = 1; use while with condition if setData have currentNum+1 then increase currentNum for to find the next and also increment currentStreak++ then longestStreak = Math.max(longestStreak,currentStreak)

var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0;
    }
   const numSet = new Set(nums);
    let longestStreak = 1;
   for(let num of numSet){
       if(!numSet.has(num - 1)){
           let currentNum = num;
           let currentStreak = 1;
           while(numSet.has(currentNum+ 1)){
               currentNum++
               currentStreak++
           }
        longestStreak = Math.max(longestStreak,currentStreak)
       }
   }
   return longestStreak
};


// 🤓 analysis :-> 

// Question No. =========================================================================================================

// setMatrix to zero

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> linear search and find zero and the call funciton to mark -1 one at all column and row

    function setMatrixZeroBrute(array){
        function markRow(i){
            for(let j = 0 ;j < array[i].length; j++){
                if(array[i][j]!== 0){
                    array[i][j] = -1
                }
            }
        }
        function markCol(j){
            for(let i = 0; i< array.length; i++){
                if(array[i][j] !== 0){
                    array[i][j] = -1;
                }
            }
        }
        for(let i = 0; i< array.length; i++){
            for(let j = 0; j < array[i].length; j++){
                if(array[i][j] === 0){
                    markRow(i);
                    markCol(j)
                }
            }
        }
        for(let i = 0; i< array.length; i++){
            for(let j = 0; j < array[i].length; j++){
                if(array[i][j] === -1){
                    array[i][j] = 0;
                }
            }
        }
        return array
    }
    console.log(setMatrixZeroBrute([
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]));

//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :- instead of marking let's create two array with row and column and marking 1 if there is 0 in matrix

    function setMatrixZeroBetter(array){
        const col = Array.from({length :array.length}).fill(0);
        const row = Array.from({length :array.length}).fill(0);
        for(let i = 0; i< array.length; i++){
            for(let j = 0; j < array[i].length; j++){
                if(array[i][j] == 0){
                    col[j] = 1;
                    row[i] = 1;
                }
            }
        }
        for(let i = 0; i< array.length; i++){
            for(let j = 0; j < array.length; j++){
                if(row[i] || col[j]){
                    array[i][j] =  0;
                }
            }
        }
        return [col,row,array];
    }
    console.log(setMatrixZeroBetter(
        [
            [1,1,1],
            [1,0,1],
            [1,1,1]
        ]
    ));

// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->






// 🤓 analysis :-> 

// Question No. =========================================================================================================

// rotate Matrix by 90 deg

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> by travasing and then I'll placed array[i][j] in array[j][array.length-1]

function rotateMatrix90Deg(array){
    const matrix = Array.from(array);
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[j][(matrix.length - 1) - i] = array[i][j]
        }
    }
    return matrix

}
console.log(rotateMatrix90Deg([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));


//🤓 analysis :-> ;

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :-

function rotateMatrix90DegOptimal(array) {
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array[i].length; j++) {
            [array[i][j], array[j][i]] = [array[j][i], array[i][j]];
        }
    }

    for (let i = 0; i < array.length; i++) {
        array[i].reverse();
    }

    return array;
}

console.log(rotateMatrix90DegOptimal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));


// 🤓 analysis :-> 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->






// 🤓 analysis :-> 

// Question No. =========================================================================================================

// 3 sum 

// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :-> using pointer approuch first sorting array there will be three pointer i,j,k i will be constant and j will be front of i and k will be in last element using while loop in for loop  in while let's add there element if the sum is smaller then 0 then we have to increment so let's increment in j++ if sum is smaller then the gretter then zero then we have to decrese else mean we find zero push three element in ans array then increment j and decrement k NOTE we dont have to take reapeted numbers so well will increment and decreament till it is not equal to the previous zeros elements
var threeSum = function(nums) {
   nums.sort((a, b) => a - b);
   const ans = [];

   for (let i = 0; i < nums.length; i++) {
       if (i !== 0 && nums[i] === nums[i - 1]) continue;

       let j = i + 1;
       let k = nums.length - 1;

       while (j < k) {
           let sum = nums[i] + nums[j] + nums[k];
           
           if (sum < 0) {
               j++;
           } else if (sum > 0) {
               k--;
           } else {
               ans.push([nums[i], nums[j], nums[k]]);
               j++;
               k--;

               while (j < k && nums[j] === nums[j - 1]) j++;
               while (j < k && nums[k] === nums[k + 1]) k--;
           }
       }
   }

   return ans;
};

// 🤓 analysis :-> 

// Question No. =========================================================================================================

// 4 sum 
 
// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->


var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    const ans = [];

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        for (let j = i + 1; j < n; j++) {
            if (j != (i + 1) && nums[j] == nums[j - 1]) continue;

            let k = j + 1;
            let l = n - 1;

            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];

                if (sum === target) {
                    let temp = [nums[i], nums[j], nums[k], nums[l]];
                    ans.push(temp);
                    k++;
                    l--;

                    while (k < l && nums[k] === nums[k - 1]) k++;
                    while (k < l && nums[l] === nums[l + 1]) l--;
                } else if (sum < target) {
                    k++;
                } else {
                    l--;
                }
            }
        }
    }

    return ans;
};



// 🤓 analysis :-> 

// Question No. =========================================================================================================

//  merge interval

// Problem link :->

// brute force :-> 
// 🤔 APPROUCH :-> check notes

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // Corrected sorting based on the start of each interval
    const ans = [];
    const n = intervals.length;

    for (let i = 0; i < n; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];

        if (ans.length && end <= ans[ans.length - 1][1]) {
            continue;
        }

        for (let j = i + 1; j < n; j++) {
            if (intervals[j][0] <= end) {
                end = Math.max(end, intervals[j][1]);
            } else {
                break;
            }
        }

        ans.push([start, end]);
    }

    return ans;
};

 
// Question No. =========================================================================================================

// find the missing and repeating number

// BETTER SOLUTION :-> 
// 🤔 APPROUCH :-  using hashMap
    function missingNumberRepeatingBetter(array){
        let hashMap = Array.from({length : array.length+1}).fill(0);
        for(let i = 0; i < array.length; i++){
            hashMap[array[i]];
        }
        let repeating = -1, missing = -1;
        for(let i = 1; i <=array.length; i++){
            if(hashMap[i]==2)repeating = i;
            else if(hashMap[i]== 0) missing = i;

            if(repeating !== -1 && missing != -1) break;
        }
        return [repeating,missing]
    }

// 🤓 analysis :-> 
// ====================================================================================
// Maximum product Subarray 


// OPTIMAL SOLUTION :->  
// 🤔 APPROUCH :->
var maxProduct = function(nums) {
    let n = nums.length
    let pre  = 1;
    let suff = 1
    let maxSum = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < n; i++){
        if(pre === 0) pre = 1;
        if(suff === 0) suff = 1;
        pre = pre * nums[i];
        suff = suff * nums[n-i-1];
        maxSum = Math.max(maxSum,pre,suff)
    }
    return maxSum
};

// 🤓 analysis :-> 

// is number prime Optimal solution

// approuch 

function isPrime(num){
    if(num == 2) return true;
    if(num % 2 == 0 ) return false;

    let counter = 0;

   for(let i = 3; i < Math.sqrt(num); i+=2){
       counter++
    if(num % i == 0){
        return [false, counter]
    }
   }
   return[ true,counter]
} 



function removeABC(string) {
    let newstring = "";
  
    for (let i = 0; i < string.length; i++) {
      if ("abc" !== string[i]) {
        newstring += string[i];
      }
    }
    return newstring;
  }
  
  // console.log(removeABC("This might be a bit hard"));
  // console.log(removeABC("hello world!"));
  // console.log(removeABC(""));