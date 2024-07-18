
const main = document.querySelector(".main");

let myLibrary = [];
const newbook = document.createElement("button");
const container = document.createElement("div");
const closeform = document.querySelector("form .close");
const form = document.querySelector("form");
const submit = document.querySelector("form button");
const BName = form.elements["BName"];
const Author = form.elements["Author"];
const number = form.elements["NumberOfPages"];
newbook.textContent = "Add Book";
newbook.style.cssText = "background-color : #000; color : #fff; padding : 15px 30px; font-size : 25px";
main.append(newbook);
main.append(container);

class Book{
    constructor(Name, author, numofpages, Read){
        this.Name = Name;
        this.author = author;
        this.numofpages = numofpages;
        this.Read = Read;}
    }







container.style.cssText = "padding : 1rem; display : flex; flex-wrap : wrap; margin : 1rem; gap : 15px;"

submit.addEventListener("click", (event)=>{
    event.preventDefault();
    let name = "";
    let author = "";
    let num = 0;

    if (BName.value.length > 0 && Author.value.length > 0 && String(number.value).length > 0){
        form.classList.add("hidden");
        name = BName.value;
        author = Author.value;
        num = number.value;
        BName.value = "";
        Author.value = "";
        number.value = "";
        DesignCard(name, author, num);
    }
})


newbook.addEventListener("click", ()=>{
    form.classList.remove("hidden");
})


closeform.addEventListener("click", ()=>{
    form.classList.add("hidden");
})




function Remove(event){
    let ind = Array.from(container.childNodes).indexOf(event.target.parentElement);
    let toberemoved = container.childNodes[ind];
    container.removeChild(toberemoved);
    myLibrary.splice(ind, 1);
}


function read(event){
    let ind = Array.from(container.childNodes).indexOf(event.target.parentElement);
    if (!myLibrary[ind].Read){
        myLibrary[ind].Read = true;
        event.target.innerHTML = "Haven't Read yet.";
        container.childNodes[ind].childNodes[3].innerHTML = "Already Read";
    }
    else{
        myLibrary[ind].Read = false;
        event.target.innerHTML = "I have Read it.";
        container.childNodes[ind].childNodes[3].innerHTML = "Not Read Yet";
    }

}




function DesignCard(name, author, num){
        let book = new Book(name, author, num, false);
        myLibrary.push(book);
        //Creating elements necessary for the book card
        const card = document.createElement("div");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const remve = document.createElement("button");
        const Read = document.createElement("button");
        //Editing the elements
        h3.innerHTML = name;
        h4.innerHTML = author;
        p.innerHTML = num + " pages";
        p2.innerHTML = "Not Read Yet";
        remve.innerHTML = "Remove";
        Read.innerHTML = "I have Read it";

        card.append(h3);
        card.append(h4);
        card.append(p);
        card.append(p2);
        card.append(remve);
        card.append(Read);
        container.append(card);
        //Stylings
        remve.style.cssText = "background-color : #000; color : #fff; padding : 10px 15px; font-size : 15px; margin : 5px 0;"
        Read.style.cssText = "background-color : #000; color : #fff; padding : 10px 15px; font-size : 15px; margin : 5px 0;";
        card.style.cssText = "background-color : #fff; color : #000; padding : 15px; display : flex; flex-direction : column; border-radius : 10px;";
        //Adding event listeners to the remove and read buttons
        remve.addEventListener("click", (e)=>{
            Remove(e);
        });
        Read.addEventListener("click", (e)=>{
            read(e);
        })

}