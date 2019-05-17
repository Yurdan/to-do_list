//functions create HTML elements
const createHtmlElements = (tag) => {
    return document.createElement(tag);
}
// function insert HTML elem in containers
const insretElementTo = (element, to) => {
    to.appendChild(element);
    return element;
}
//function add class HTML elements
const addClass = (element, className) => {
    element.classList.add(className);
}

//create HTML elements
const mainContainer = createHtmlElements('div');
const inputContainer = createHtmlElements('div');
const wrapBlock = createHtmlElements('div');
const wrapSecondBlock = createHtmlElements('div');
const input = createHtmlElements('input');
const inputButton = createHtmlElements('button');
const h1 = createHtmlElements('h1');
const header1  = createHtmlElements('h2');
const header2  = createHtmlElements('h2');

//add classes to HTML elements
addClass(mainContainer, "main-container");
addClass(inputContainer, "input-container");
addClass(wrapBlock, "wrap-block");
addClass(wrapSecondBlock, 'wrapSecondBlock');

//insert elements
insretElementTo(mainContainer, document.body);
insretElementTo(h1, mainContainer);
insretElementTo(inputContainer, mainContainer);
insretElementTo(wrapBlock, mainContainer);
insretElementTo(header1, wrapBlock);

insretElementTo(wrapSecondBlock, mainContainer);

insretElementTo(input, inputContainer);
insretElementTo(inputButton, inputContainer);
insretElementTo(header2, wrapSecondBlock);
inputButton.innerText = "Add";
h1.innerText = "to-do list"
header1.innerText = "My deals"
header2.innerText = "Done deals"



// function check input empty or not and insert in dom
const addTextFromInput = (event) => {
    event.preventDefault();
    if (!input.value) {
        return;
    }

    const textBlock = createHtmlElements('div');
    const paragraph = createHtmlElements('p');
    const buttonTransfer = createHtmlElements('button');

    insretElementTo(textBlock, wrapBlock);
    insretElementTo(paragraph, textBlock);
    insretElementTo(buttonTransfer, textBlock)

    addClass(textBlock, "text-block");
    addClass(paragraph, "paragraph");


    buttonTransfer.innerText = 'Done';
    paragraph.innerText = input.value;



    buttonTransfer.addEventListener('click', () => {
        insretElementTo(textBlock, wrapSecondBlock);
        buttonTransfer.innerText = 'Delete';
        buttonTransfer.addEventListener('click', () => {
            textBlock.remove();
        })

    })
    input.value = '';
}

inputButton.onclick = function () { };
inputButton.addEventListener("click", addTextFromInput);





















