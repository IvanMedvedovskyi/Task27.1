//Решил напрячься и сделать с рекурсией
const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function generateList(array) {
    const ul = document.createElement('ul');

    for(let i =0; i < array.length; i++) {
        const li = document.createElement('li');

        if(Array.isArray(array[i])) {
            li.appendChild(generateList(array[i]));
        } else {
            li.textContent = array[i];
        }

    ul.appendChild(li);
}
    return ul;
}

const container = document.querySelector('.container');
container.appendChild(generateList(array));