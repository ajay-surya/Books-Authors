var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var pllusbtn=document.querySelector(".plusbtn")

pllusbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

 var cancelbtn=document.getElementById("cancel-popup")
 cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
 })

 var container=document.querySelector(".container")
 var addbook=document.getElementById("add-book")
 var booktitle=document.getElementById("book-title-input")
 var bookauthor=document.getElementById("book-author-input")
 var bookdescription=document.getElementById("book-description-input")

 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

 })

 function deletebook(event){
    event.target.parentElement.remove()
 }