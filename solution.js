////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */
document.querySelector("link").href = "./styles.css";

/* 1.2) Set the class of the image to "list-img" */
document.querySelector("img").className = "list-img";

/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */
let inputNodeList = document.querySelectorAll("input");

for (i = 0; i < inputNodeList.length; i++) {
        inputNodeList[i].className = "btn";
};



////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */

let unorderedList = document.querySelector("ul");


/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */
let userInput;

function addItem() {
        userInput = prompt("What do you want to add to the grocery list?");
        let newListItem = document.createElement("li");
        unorderedList.appendChild(newListItem);
        let newTextNode = document.createTextNode(userInput);
        newListItem.appendChild(newTextNode);
};



/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by setting the total-area class to just "total-area"
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */
// let totalItemsNodeList;

function getTotal() {
        let totalItemsDisplayNone = document.querySelectorAll(".display-none");
        let totalItemsNodeList = document.querySelectorAll("li");
        let itemCount = totalItemsNodeList.length;
        if (totalItemsDisplayNone.length === 0) {
                document.querySelector("#item-count").textContent = itemCount;
        } else {
                document.querySelector(".display-none").className = "total-area";
                document.querySelector("#item-count").textContent = itemCount;  
        };
};


////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */


function removeItem() {
        let userRemove = prompt("What item do you want to remove from the list?");
        let itemsList = document.querySelectorAll("li");
        for (i = 0; i < itemsList.length; i++) {
                if (userRemove === itemsList[i].textContent) {
                      unorderedList.removeChild(itemsList[i]);  
                } 
        };
        getTotal();
};