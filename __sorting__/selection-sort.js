// Selection sort 
// this algo is all about find the minimum and swap it.

// approach :-> we will find minimum then swap it.
function selectionSort(arr){
    let n = arr.length - 1;
    for(let i = 0; i <= n - 1; i++ ){
        let min = i;
        for(let j = i; j <= n; j++){
            if(arr[j] < arr[min]) min = j;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]; // swaping when we find minimum 
    }
    return arr;
};

console.log(selectionSort([3,2,4,1,5,4,6,7]));