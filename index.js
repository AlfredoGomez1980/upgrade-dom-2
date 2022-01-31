//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv); 

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div = document.createElement('div');
const p = document.createElement('p');

div.appendChild(p);

document.body.appendChild(div);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const mainDiv = document.createElement('div');

for(let i = 0; i < 6; i++){
    const p = document.createElement('p');
    mainDiv.appendChild(p);
}

document.body.appendChild(mainDiv);


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const paragraph = document.createElement('p');
const text = document.createTextNode('Soy dinámico!');

paragraph.appendChild(text);

document.body.appendChild(paragraph);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const selectText = document.querySelector('h2.fn-insert-here');

selectText.innerHTML = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const newList = document.createElement('ul');


apps.forEach( item => {
    let newli = document.createElement('li');
    let textLi = document.createTextNode(item);
    newli.appendChild(textLi);
    newList.appendChild(newli);
});

document.body.appendChild(newList);



// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeNodes = document.querySelectorAll('.fn-remove-me');

removeNodes.forEach( elem => elem.remove());

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here