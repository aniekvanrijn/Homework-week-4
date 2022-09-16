//classic for loop
let jewellery = ['earrings', 'necklaces', 'bracelets'];

for (let i=0, ii=jewellery.length; i<ii; i++) {
    console.log(i, jewellery[i]);
}


//for...of loop in a paragraph
let paragraph = "This shop sells";

output = document.getElementById('jewellery-list-paragraph');

for (let x of jewellery) {
    paragraph += " "+ x;
  }

output.innerHTML = paragraph;

//for...of loop in a list
let text = "This shop sells: ";
output = document.getElementById('text').innerHTML = text;

const ul = document.getElementById('jewellery-list');

function listItem(x) {
    let li = document.createElement('li');
    li.innerHTML = x;
    ul.appendChild(li);
}

for(let x of jewellery) {
    listItem(x);
}


//object with 3 properties and values
let shirt = {
    color: 'blue',
    size: 'small',
    fabric: 'cotton'
};

//for...in loop
for (x in shirt) {
    console.log(x, shirt[x]);
};
