let clickEvent =document.getElementById("clickEvent")
let mouseoverEvent =document.getElementById("mouseoverEvent")
let mouseoutEvent =document.getElementById("mouseoutEvent")
let mouseLeaveColor =document.getElementById("mouseLeaveColor")
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
	mouseLeaveColor.style.backgroundColor="#1fd166"
}
mouseLeaveColor.addEventListener("mouseleave", changeTextColor)

function changedblClickColor(){
	dblclickColor.style.color="#fafebd"
}
dblclickColor.addEventListener("dblclick", changedblClickColor)
