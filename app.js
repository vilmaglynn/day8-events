let clickEvent =document.getElementById("clickEvent")
let mouseoverEvent =document.getElementById("mouseoverEvent")
let mouseoutEvent =document.getElementById("mouseoutEvent")
let mouseOverColor =document.getElementById("mouseOverColor")
let dblclickColor =document.getElementById("dblclickColor")



function changeTextClick(){
	clickEvent.innerHTML ="Thank you!"
}
clickEvent.addEventListener("click", changeTextClick)

function changeTextMouseOVer(){
	mouseoverEvent.innerHTML ="Hello :-)"
}
mouseoverEvent.addEventListener("mouseover", changeTextMouseOVer)

function changeTextMouseOut(){
	mouseoutEvent.innerHTML ="Goodbye :-("
}
mouseoutEvent.addEventListener("mouseout", changeTextMouseOut)

function changeTextColor(){
	mouseOverColor.style.backgroundColor="#1fd166"
}
mouseOverColor.addEventListener("mouseover", changeTextColor)

function changedblClickColor(){
	dblclickColor.style.color="#fafebd"
}
dblclickColor.addEventListener("dblclick", changedblClickColor)
