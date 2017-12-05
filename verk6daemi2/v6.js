//div class ="mainthing"
var mainThing = document.createElement('main');
document.body.appendChild(mainThing);
var mainClass = document.getElementsByTagName('main')[0];
mainClass.setAttribute("class", "mainThing");

//div class ="pizza"

var pizzaDiv = document.createElement('div');
document.body.appendChild(pizzaDiv);
var pizzaClass = document.getElementsByTagName('div')[0];
pizzaClass.setAttribute("class", "pizza");


//Nafn
var pizzaName = document.createElement('div');
var pizzaText = document.createTextNode('Pizza with tons of pepperoni');
pizzaName.appendChild(pizzaText);
var pizzaName1 = document.getElementsByTagName('div')[0];
pizzaName1.appendChild(pizzaName);
var pizzaNameClass = document.getElementsByTagName('div')[1];
pizzaNameClass.setAttribute("class", "pizzaName");


//Stærð
var pizzaSize = document.createElement('div');
var pizzaSizeText = document.createTextNode('L');
pizzaSize.appendChild(pizzaSizeText);
var pizzaSize1 = document.getElementsByTagName('div')[0];
pizzaSize1.appendChild(pizzaSize);
var pizzaSizeClass = document.getElementsByTagName('div')[2];
pizzaSizeClass.setAttribute("class", "size");

//Verð
var pizzaPrice = document.createElement('div');
var pizzaPriceText = document.createTextNode('2000');
pizzaPrice.appendChild(pizzaPriceText);
var PizzaPrice1 = document.getElementsByTagName('div')[0];
pizzaSize1.appendChild(pizzaPrice);
var pizzaPriceClass = document.getElementsByTagName('div')[3];
pizzaPriceClass.setAttribute("class", "price");

var toppingContainer = document.createElement('div');
var toppingContainer1 = document.getElementsByTagName('div')[0];
toppingContainer1.appendChild(toppingContainer);
var toppingContainerClass = document.getElementsByTagName('div')[4];
toppingContainerClass.setAttribute("class", "toppingContainer");

//Álegg
var firstTopping = document.createElement('span');
var firstToppingText = document.createTextNode('Pepperoni & ');
firstTopping.appendChild(firstToppingText);
var firstTopping1 = document.getElementsByTagName('div')[4];
firstTopping1.appendChild(firstTopping)
var firstToppingClass = document.getElementsByTagName("span")[0]
firstToppingClass.setAttribute("class", "topping")
//Álegg 2
var secondTopping = document.createElement('span');
var secondToppingText = document.createTextNode('Pepperoni & ');
secondTopping.appendChild(secondToppingText);
var secondTopping2 = document.getElementsByTagName('div')[4];
secondTopping2.appendChild(secondTopping)
var secondToppingClass = document.getElementsByTagName("span")[1];
secondToppingClass.setAttribute("class", "topping");
//Álegg 3
var thirdTopping = document.createElement('span');
var thirdToppingText = document.createTextNode('Cheddar');
thirdTopping.appendChild(thirdToppingText);
var thirdTopping3 = document.getElementsByTagName('div')[4];
thirdTopping3.appendChild(thirdTopping)
var thirdToppingClass = document.getElementsByTagName("span")[2];
thirdToppingClass.setAttribute("class", "topping");

