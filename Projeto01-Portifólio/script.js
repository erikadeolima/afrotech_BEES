let sendButton = document.getElementById("sendButton");
let messageForm = document.getElementById("contact-form");
let sucessfulMessage = document.getElementById("sucessful-message");
let newMessageButton = document.getElementById("new-message");
let contactLink = document.getElementById("link-contato");
let contactDiv = document.getElementById("contact");
let contactInfo = document.getElementById("contact-email");

sendButton.addEventListener("click", sendMenssage);

function sendMenssage() {
  messageForm.style.display ="none";
  sucessfulMessage.style.display="block";
};

newMessageButton.addEventListener("click", newMessage);

function newMessage() {
  messageForm.style.display ="block";
  sucessfulMessage.style.display="none";
}

contactLink.addEventListener("click", scrollAllPage);

function scrollAllPage() {
  contactDiv.scrollIntoView();
};

contactInfo.addEventListener("click", copyMyContact)

function copyMyContact(){
  navigator.clipboard.writeText(contactInfo.innerText);
  alert(`E-mail copiado: erikadeo.lima@hotmail.com`);
}