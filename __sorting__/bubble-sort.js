// this algo pushes maximum to last

function bubbleSort(arr){
    let n = arr.length - 1;
    for(let i = n  - 1; i >= 1; i--){
        for(let j = 0; j <= i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
        return arr
}
console.log(bubbleSort([2,3,2,4,6,5,1,5,6]));
