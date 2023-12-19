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

// Q insert