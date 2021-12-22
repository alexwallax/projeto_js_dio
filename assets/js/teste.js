
//função que retorna os números pares de um array
function returnEvenValues(array) {
    let evenNuns = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0) {
            evenNuns.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }

    console.log('Os números pares são: ', evenNuns);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);