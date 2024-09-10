// popup.js
function  openPopupSeeMeeting(){
    document.getElementById("popupSeeMeeting").style.display = "block";
}

function  closePopupSeeMeeting(){
    document.getElementById("popupSeeMeeting").style.display = "none";
}
function  openPopupGroup() {
    var popupElement = document.getElementById("popupSeeMeeting");

if (popupElement) {
    popupElement.style.display = "none";
} else {
    console.log("Element with ID 'popupSeeMeeting' does not exist.");
}
    document.getElementById("popupGroup").style.display = "block";
}

function  closePopupGroup(){
    document.getElementById("popupGroup").style.display = "none";
}