let sendButton = document.getElementById("sendButton");
let messageForm = document.getElementById("contact-form");
let sucessfulMessage = document.getElementById("sucessful-message");
let newMessageButton = document.getElementById("new-message");


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