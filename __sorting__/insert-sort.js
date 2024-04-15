// this algo Takes an element and places it correct position.

function insertSort(arr){
    let n = arr.length;
    for(let i = 0; i<= n- 1; i++){
        let j = i;
        while(j > 0 && arr[j-1] > arr[j]){
            [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            j--
        };
    }
    return arr
};

console.log(insertSort([3,2,4,1,4,5,7,5,7]));