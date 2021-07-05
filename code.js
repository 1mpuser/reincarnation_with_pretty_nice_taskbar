"use strict";
let body=document.getElementById('body');
/*let firstDiv=document.querySelector('.khuynya');
let secondDiv=firstDiv.querySelector('div');
let checkbox=firstDiv.querySelector('[type="checkbox"]');
//checkbox.addEventListener('click', go);
let reset=secondDiv.querySelector('button');
/*





/*
Дату КК можно использовать как указатебль на то, зачёркнут текст иль нет
Также не надо удалять чекбокс, надо его сделать просто невидимым

*/
//function go() {alert();}
let khui=document.getElementById('khui');
khui.addEventListener('keypress', addItem)

function addItem(event){
    if (event.keyCode==13) {
        let newDiv=document.createElement('div');
        newDiv.className='task';
        let button=document.createElement('button');
        button.className='reset';
        button.innerText='X';
        let text=this.value;
        this.value="";
        let checkbox=document.createElement('input');
        checkbox.type="checkbox";
        checkbox.className="checkboksy";
        newDiv.innerText=text;
        newDiv.addEventListener('dblclick',dblCLickEdition);
        checkbox.addEventListener('click', crossOutIfNot, true);
        button.addEventListener('click', deleteDiv);
        //newDiv.innerHTML=checkbox.outerHTML+button.outerHTML+text;
        newDiv.appendChild(button);
        newDiv.insertBefore(checkbox, button);
        body.appendChild(newDiv);
    }
}
// Функционал под сами задачи


/*let firstDiv=document.querySelector('div');
let secondDiv=firstDiv.querySelector('div');
secondDiv.addEventListener('dblclick',dblCLickEdition);
let checkbox=secondDiv.querySelector('[type="checkbox"]');
checkbox.addEventListener('click', crossOutIfNot, true);
let reset=secondDiv.querySelector('button');
reset.addEventListener('click', deleteDiv);
*/
function dblCLickEdition(){
    let childs=this.children;
    let checkbox=childs[0];
    let button=childs[1];
    let editInput=document.createElement('input');
    let secondCheckbox=checkbox.cloneNode(true);
    let reset=button.cloneNode(true);
    checkbox.remove();
    button.remove();
    let text=this.innerText;
    this.innerText="";
    editInput.type="text";
    editInput.value=text;
    editInput.addEventListener('change', inputHasChanged);
    secondCheckbox.addEventListener('click', crossOutIfNot);
    if (checkbox.hasAttribute('qq')===false ){ secondCheckbox.visibility="hidden"; 
        editInput.style.cssText ="text-decoration: line-through";}// чекбокс невидим и точка  
    reset.addEventListener('click', deleteDiv);
    this.appendChild(reset);
    this.appendChild(editInput);
    this.insertBefore(secondCheckbox, editInput);
    this.removeEventListener('dblclick', dblCLickEdition);   
}

function crossOutIfNot(){
    this.removeAttribute('qq');
    this.style.visibility="hidden";
    let div=this.parentNode;
    let input=div.querySelector('[type="text"]');
    if (div.contains(input)) {
        deleteInputIfClick(input);
    }
    else {
        div.style.cssText +="text-decoration: line-through";
    }
}
function inputHasChanged(){
/*let div=this.parentElement;
let childs=div.children;
let checkbox=childs[0];
let button=childs[2];
let input=childs[1];
let secondCheckbox=checkbox.cloneNode(true);
let reset=button.cloneNode(true);
let text=this.value;
checkbox.remove();
button.remove();
this.remove();
div.innerText=text;
div.appendChild(reset);
div.appendChild(secondCheckbox);
//if (checkbox.getAttribute('qq')!="QQ"){ secondCheckbox.visibility="hidden"; }
div.addEventListener('dblclick', dblCLickEdition);
*/
let flag=false;
let div=this.parentNode;
let text=this.value;
let childs=div.children;
let checkbox=childs[0];
let button=childs[1];
if (checkbox.hasAttribute('qq')===false ) flag=true;
let secondCheckbox=checkbox.cloneNode(true);
let reset=button.cloneNode(true);
if (flag) secondCheckbox.visibility="hidden";
div.innerHTML="";
div.style.cssText="width: 240px;border: 1px solid black;text-align: left;display: block;margin: auto;";
div.innerHTML=secondCheckbox.outerHTML+reset.outerHTML+text;
if (flag) {
    div.style.cssText ="text-decoration: line-through";}
div.addEventListener('dblclick', dblCLickEdition);
deletingDivsByAddingEventListeners(div);
}

//function remove(elem){
   // elem.parentNode.removeChild(elem);
//}

function deleteInputIfClick(elem){
let div=elem.parentNode;
let text=elem.value;
let childs=div.children;
let checkbox=childs[0];
let button=childs[1];
let secondCheckbox=checkbox.cloneNode(true);
let reset=button.cloneNode(true);
div.innerHTML="";
div.style.cssText="width: 240px;border: 1px solid black;text-align: left;display: block;margin: auto; text-decoration: line-through";
div.innerHTML=secondCheckbox.outerHTML+reset.outerHTML+text;
div.addEventListener('dblclick', dblCLickEdition);
deletingDivsByAddingEventListeners(div);
}


function deleteDiv(){
    let div=this.parentNode;
    body.removeChild(div);
}

function deletingDivsByAddingEventListeners(div){
    let button=div.querySelector('button');
    button.addEventListener('click', deleteDiv);
}