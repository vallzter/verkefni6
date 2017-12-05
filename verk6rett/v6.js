//Dæmi 1
var changeAttribute = document.querySelector("div");
changeAttribute.setAttribute("class", "active");

//Dæmi 2
var selectedEl = document.getElementsByTagName('div')[2];
var containerEl = selectedEl.parentNode;
containerEl.removeChild(selectedEl);

//Dæmi 3
var replace = document.getElementsByTagName('div')[1];
var text = replace.textContent;
text = text.replace('Gunnar', 'Jakob');
replace.textContent = text;

//Dæmi 4
//Fann ekki útur því

//Dæmi 5
/*InnerHTML gerir manni kleift að gera mikið efni með litlum kóða. Það getur verið fljótlegra að nota
innerHTML ef maður þarf að búa til mikið af elementum á síðu. Það er einnig fljótleg leið til þess að eyða út innihaldi úr elementum.
Ókostur er að það fylgir lítið öryggi.
DOM Manipulation gefur manni valkost að meðhöndla domið á mjög fínann hátt, bara ef eitthvað element er með marga undirliggjandi siblings.
Það hefur engin áhrif á event handlera.

//Dæmi 6

//Dæmi 7
XSS er þegar einstaklingur keyrir skriftu í gegnum innerHTML. Það gerir honum kleift að fá aðgang að DOM'inu,
 einnig að hann sér cookies á síðunni. Það sem hægt er að gera til þess að koma í veg fyrir þetta er að nota gott validation á öllum formum þar sem notandi gæti mögulega gert input
á síðuna. Eða bara sleppa að nota innerhtml.
*/

