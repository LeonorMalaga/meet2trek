// popup.js
function  openPopupJoin() {
    document.getElementById("popupJoin").style.display = "block";
}

function  closePopupJoin(){
    document.getElementById("popupJoin").style.display = "none";
}
function  openPopupGroup() {
    var popupElement = document.getElementById("popupJoin");

if (popupElement) {
    popupElement.style.display = "none";
} else {
    console.log("Element with ID 'popupJoin' does not exist.");
}
    document.getElementById("popupGroup").style.display = "block";
}

function  closePopupGroup(){
    document.getElementById("popupGroup").style.display = "none";
}