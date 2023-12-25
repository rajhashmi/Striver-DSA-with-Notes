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
console.log(lowerBound([1,2,3,4,5,6,7,8],1))

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