export function getBubbleSortAnimations(array){
    const animations = [];
    if (array.length <= 1){
        return array;
    }

    let size = array.length;
 
    BubbleSort(array,size,animations);
    return animations;
}

function BubbleSort(array,size,animations){
    var swapped;
    for(let i = 0; i < size - 1; i++){
        swapped = false;
        for(let j = 0; j < size - i - 1; j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                animations.push([j,j+1]);
                swapped = true;
            }
        }
        if (swapped === false){
            break;
        }
    }
}