// Q  Lower Bound 
// Approuch : lower bound is to find the smaller or equal to the given target low will point at 0 and high n-1 and mid will be low+high/2 if array[mid] >= target then  ans = mid and high will be mid - 1; else low = mid +1

function lowerBound(array, target){
    let low = 0 , high = array.length -1;
    let ans = array.length;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(array[mid]>= target){
            ans =mid;
            high = mid - 1;

        }else{
            low = mid + 1;
        }
    }
    return ans
}
console.log(lowerBound([1,2,3,4,5,6,7,8],1));

// Q sesrch in rotated sorted array ii
//  approuch: ->  I know this array will be rotated so I will check mid as well as first and last and identify which part will be sorted and I will search in the sorted array
function searchInRotate(array){
    let low = 0; 
    let high = array.length - 1;
    while( low <= high){
        let mid = Math.floor((low+high)/2);
        if(array[mid] === target) return mid;
        if(array[low] === array[mid] && array[mid] === array[high]){
            low = high + 1;
            high = high - 1;
            continue;
        }
        if(array[low] <= arr[mid]){
            if(array[low] <= target && target <= array[mid]){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }else{
            if(array[mid] <= target && array[high]){
                low = mid + 1
            }else{
                high = mid - 1;
            }
        }
    }
    return false
}


// Q find the minimum in rotated sorted array

// APPROUCH :-> first finding the sorted side in array if the sorted side is left then the fist element is always low of the left sorted side or if the right side is sorted then the mid will the lowest value 

var findMin = function(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let low = 0;
    let high = nums.length - 1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[low] <= nums[mid]){
            min = Math.min(min,nums[low]);
            low = mid+1;
        }else{
            high = mid - 1;
            min = Math.min(min,nums[mid])
        }
    }
    return min
};


// single element in sorted Array

// APPROUCH :-> By observing the above image, we can clearly notice a striking distinction between the index sequences of the left and right halves of the single element in the array. 
// The index sequence of the duplicate numbers in the left half is always (even, odd). That means one of the following conditions will be satisfied if we are in the left half:
// If the current index is even, the element at the next odd index will be the same as the current element.
// Similarly, If the current index is odd, the element at the preceding even index will be the same as the current element.

// // 2. The index sequence of the duplicate numbers in the right half is always (odd, even). That means one of the following conditions will be satisfied if we are in the right half:
// If the current index is even, the element at the preceding odd index will be the same as the current element.
// Similarly, If the current index is odd, the element at the next even index will be the same as the current element.
// Now, we can easily identify the left and right halves, just by checking the sequence of the current index, i, like the following:

var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (mid % 2 === 1) {
            mid--;
        }

        if (nums[mid] !== nums[mid + 1]) {
            high = mid;
        } else {
            low = mid + 2;
        }
    }

    return nums[low];
};




// Find Peak Element

var findPeakElement = function(nums) {
    if(nums.length == 1) return 0;
    if(nums[0] > nums[1]) return 0;
    if(nums[nums.length -1] > nums[nums.length - 2]) return nums.length - 1;
    let low = 1, high = nums.length -2;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) return mid;

        if(nums[mid] > nums[mid - 1]) low = mid + 1;
        else high = mid - 1
    }
    return -1
};


var mySqrt = function(x) {
    let low = 1;
    let high = x;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        let value = mid * mid;
 
        if(value <= x){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
 
        
    }
    return high;
 
 };

 // koko eating Bananas

 var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = findMax(piles);
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        let totalH = calculateTotalHours(piles, mid)
        if(totalH <= h){
            high = mid -1;
        }else{
            low = mid + 1;
        }
    }
    return low
};

function findMax(arr){
    let max = -Infinity;
    let n = arr.length;
    for(let i = 0; i < n; i++){
        max = Math.max(max,arr[i])
    }
    return max
}
function calculateTotalHours(arr, perHr){
    let totalH = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++){
        totalH += Math.ceil(arr[i] / perHr);
    }
    return totalH
}