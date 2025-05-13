export function getInsertionAnimations(array){
    const animations = [];
    if (array.length <= 1){
        return array;
    }

    let size = array.length;

    
    //let temp_array = array.slice();

    insertionSort(array,size,animations);

    //temp_array.sort();
    //print(temp_array)


    return animations;
}

function insertionSort(array,size,animations){
    for(let i = 0; i < size;i++){
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key){
            array[j+1] = array[j];
            animations.push([j,j+1]);
            j = j - 1;
        }
        array[j+1] = key;
    }
}