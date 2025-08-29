Q.1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById selects only one element by it's unique id and it also returns one element.
On the other hand, getElementsByClassName selects all elements by the same class name.It returns a HTMLCollection because there can be multiple elements named after the same class name.Like array, for of loop can be applied on getElementsByClassName.
querySelector selects only the first element from the class, tag, attribute or id what is inside querySelector.It also returns only one element.
On the other hand, querySelectorAll selects all elements  from the class, tag, attribute or id what is inside querySelectorAll.It returns an array-like NodeList.


Q.2) How do you create and insert a new element into the DOM?

Answer:
At first, a parent Id need to be selected by getElementsById like this:
const parent = document.getElementById('parentID')
Then, a new element needs to be created and tag need to be putted inside the element like this:
const new = document.createElement("p");
then, somethings need to be added inside the tag by innerText:
new.innerText ="This is a paragraph";
then,the new element needs to be appended inside the parent element like this:
parent.appendChild(new);

another way:
At first a parent id is selected by getElementsById like this:
const parent = document.getElementById('parentID')
then , create a new Element inside inside it:
const child1 = document.createElement('section');
Put innerHtml inside child1 like this:
child1.innerHTML = `<p>This is a peragraph</p>`
then append the child1 inside parent like this:
parent.appendChild(child1)


Q.3) What is Event Bubbling and how does it work?

Answer:
Suppose a div-1 is inside div-2 and both div-1 and div-2 are inside div-3 and an addEventListener  is added to three of them.So, if div-1 is clicked along with it's own value it will also get the values from div-2 and div-3.If div-2 is clicked along with it's own value it will also get the value from div-3.This behavior is called event bubbling.


Q.4) What is Event Delegation in JavaScript? Why is it useful?

Answer:
In Event Delegation it does not bind the child element directly and we aadd a single event listener to the parent element.Then we use event.target to identify which child element triggered the event.  
It is useful because in stead of using separate listeners in many child elements we use only one parent listener which saves the memory useage.


Q.5) What is the difference between preventDefault() and stopPropagation() methods?

The purpose of preventDefault() is preventing the default behavior of an element like link click,form submit etc
On the other hand the purpose of stopPropagation() is preventing bubble(up) or capture(down) like if the child element is clicked stopPropagation() stops parent event listener trigerring.


