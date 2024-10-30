//Lesson 1 :  Selecting elements using DOM

/*
 getElementById()
getElementsByName()
getElementsByTagName()
getElementsByClassName()
querySelector() and querySelectorAll() 
*/

const a=document.getElementById("sample");
console.log(a);
console.log(a.textContent);   

let btn=document.getElementsByName("ip")
console.log(btn);//node list

let cont=document.getElementById("container");
console.log(cont);//conatiner
console.log(cont.getElementsByClassName("c"));

let cont2=document.getElementsByTagName("h2");//html collections
let cont3=cont.getElementsByTagName("h2");
console.log(cont2);
console.log(cont3);

let msg=document.querySelector(".c");
console.log(msg);//single first matched query
let msgs=document.querySelectorAll(".c");
console.log(msgs);//retrieve all matched queries
let contq=cont.querySelectorAll(".c");
console.log(contq);

let qs=document.querySelector("#sample");
console.log(qs);

//selecting all div/h2 element
document.querySelectorAll("div");
document.querySelectorAll("h2");
//h2 element inside div element
document.querySelectorAll("div h2");
//all div and h2 elements
document.querySelectorAll("div,h2");




//lesson 2 : Traversing elements

/*
Selecting parent element
Selecting child element
Selecting Sibling elements
*/

//access parent from child
let child=document.querySelector(".child")
console.log(child.parentNode);
console.log(child.parentElement);

//access child elements
let parent=document.querySelector(".parent");
console.log(parent.firstChild);//empty space also a child
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
console.log(parent.childNodes); //text is each text element in each line

//child 2-->prev sib and next sib
let second=document.querySelector(".child2");
console.log(second.previousElementSibling);
console.log(second.nextElementSibling);
console.log(second.previousSibling); //it gives #text
console.log(second.nextSibling);





// lesson 3 : Manipulating html elements

/*
createElement()
appendChild()
textContent
innerHTML
after()
append()
prepend()
insertAdjacentHTML()
replaceChild()
cloneNode()
removeChild()
insertBefore()
*/

//create element
let div=document.createElement("div");
div.innerHTML="<p>Sample of creating element using js</p>";
document.body.appendChild(div);
div.id="title";
div.className="tt"
console.log(div);

//appendchild
let menu=document.getElementById("menu");
let list=document.createElement("li");
list.textContent="Contact";
// list.innerHTML="<p>sano</p>";
menu.appendChild(list);
// menu.removeChild(list);

//textcontent vs innertext
console.log(menu.textContent); //hidden also
console.log(menu.innerText); //visible text only
// menu.textContent="hello"

//innerhtml --> used to add the content with tags
console.log(menu.innerHTML);
// list.innerHTML="<p>sano</p>";

//after --> insert one or more nodes amd string after element
// Element.after(node1,n2,...nn); -->syntx
let aft=document.createElement("h2");
aft.innerHTML="After example";
parent.after(aft);
aft.after("hello world") //accept string also

//append method --> add multiple elements (multiple nodes as well as string also)
// Append newChild to the end of the parent node's children
let par=document.getElementById("par");
let m=document.createElement("li");
let n=document.createElement("li");
m.textContent="one";
n.textContent="two";
par.append(m,n);

//prepend method
// Prepend newChild to the beginning of the parent node's children
par.prepend(n,m);

// insertAdjacentHTML() - beforebegin, afterbegin, beforeend, afterend
// par.insertAdjacentHTML(position,content)-->syntax
par.insertAdjacentHTML("beforebegin","<li>beforebegin</li>");
par.insertAdjacentHTML("afterbegin","afterbegin");
par.insertAdjacentHTML("beforeend","beforeend");
par.insertAdjacentHTML("afterend","afterend");

// replaceChild()
// par.replaceChild(newchild,oldchild) -->syntax
par.replaceChild(m,n);

// cloneNode()
let newNode1=menu.cloneNode(true);
let newNode2=menu.cloneNode(false);
console.log(newNode1); //includes descendents also
console.log(newNode2); //only parent node

// removeChild()
// menu.removeChild(list);
menu.removeChild(menu.firstElementChild);
menu.removeChild(menu.lastElementChild);
// menu.removeChild(menu.list)

// insertBefore()
// syntax --> parent.insertBefore(newNode,existingNode);




// Lesson 4 :  Attribute methods

/*
48:01 getAttribute()
49:03 setAttribute()
50:35 hasAttribute()
52:12 removeAttribute()
*/

let inp=document.getElementById("username");
console.log(inp.attributes);

console.log(inp.getAttribute("type"));
console.log(inp.getAttribute("placeholder"));

inp.setAttribute("class","user");
console.log(inp);

console.log(inp.hasAttribute("alt")); //true or false
console.log(inp.hasAttribute("class"));
console.log(inp.hasAttribute("xyz"));


inp.removeAttribute("class");
console.log(inp);
console.log(inp.hasAttribute("class"));






// Lesson 5 : Manipulating Element's Styles

/*
53:31 style property
56:52 cssText
59:41 getComputedStyle()
01:03:36 className property
01:07:17 classList property
*/
let inpbox=document.getElementById("style");

//style property
console.log(inpbox.style);
console.log(inpbox.style.backgroundColor);
console.log(inpbox.style.fontSize);
console.log(inpbox.style.color);

inpbox.style.padding="10px";
console.log(inpbox);

//cssText
inpbox.style.cssText+="width:200px"; //this ensures the previous one also
// inpbox.style.cssText="width:200px"; //it rewrite entire styling
inpbox.style.cssText+="width:200px; height:100px;";

//getComputedStyle -- > window object
let sty=document.getElementById("inp");
console.log(window.getComputedStyle(sty));
console.log(window.getComputedStyle(sty).fontSize);
console.log(window.getComputedStyle(sty).width);

//className property
let title=document.getElementById("title");
console.log(title.className);
title.className+=" new";
console.log(title.className);

//classList
console.log(title.classList);
title.classList.add("another");
console.log(title.classList);
title.classList.add("new1","new2","new3");
console.log(title.classList);
title.classList.remove("new3","new2");
console.log(title.classList);
title.classList.replace("message","msg");
console.log(title.classList);
console.log(title.classList.contains("msg"));
title.classList.toggle("msg");

//Lesson 6 : JS events

// method : 1 --> onclick=display()
function display(){
    console.log('button cicked');
    // console.log(event.type);
    // console.log(this.id);
}

//method 2
let but=document.getElementById("btn");
but.onclick=function(){
    console.log("button clicled");
    console.log(this.id);    
    console.log(this.type);  
}

//method 3 : addEventListener()
// 3 arguments --> event, function, usecapture(default false)(propagation)
but.addEventListener('click',function(event){
    console.log("Message",event.type);
},false)

//we can remove only non anonymous function
but.addEventListener('click',display(),false)
but.removeEventListener('click',display())

//some of the useful events

//mousemove
// mousedown
// mouseup
// mouseover
// mouseout
// keydown
// keyup
// keypress
// scroll
