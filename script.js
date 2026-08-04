const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function(){

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){
menuBtn.innerHTML = "✕";
}else{
menuBtn.innerHTML = "☰";
}

});

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

function showMessage(giftName){

popupTitle.innerHTML = giftName;

popupText.innerHTML =
"Yeh gift jaldi hi Toufa-e-Ishq collection mein available hoga. 💚";

popup.classList.add("show");

}

function contactMessage(){

popupTitle.innerHTML = "Toufa-e-Ishq 💚";

popupText.innerHTML =
"Hamse contact karne ke liye apni details ya WhatsApp option yahan add kiya ja sakta hai.";

popup.classList.add("show");

}

function closePopup(){

popup.classList.remove("show");

}

popup.addEventListener("click", function(event){

if(event.target === popup){
closePopup();
}

});

document.querySelectorAll(".nav-links a").forEach(function(link){

link.addEventListener("click", function(){

```
navLinks.classList.remove("active");

menuBtn.innerHTML = "☰";
```

});

});
function orderProduct(productName){

  const whatsappNumber = "933922****";

  const message =
  "Hello Toufa-e-Ishq! 💚%0A%0A" +
  "Mujhe ye product order karna hai:%0A" +
  productName + "%0A" +
  "Price: ₹799";

  alert(
    "WhatsApp order ke liye poora 10-digit WhatsApp number add karna hoga."
  );

}


function openWhatsApp(){

  alert(
    "WhatsApp button activate karne ke liye poora WhatsApp number add karna hoga."
  );

}