var button = document.querySelector(".search");
var popup = document.querySelector(".modal-order-form");
var depdate = popup.querySelector("[name=departure-date]");

var pl_ad = popup.querySelector(".adults .plus"); 
var min_ad = popup.querySelector(".adults .minus");
var q_ad = popup.querySelector(".adults .short");

var pl_ch = popup.querySelector(".child .plus"); 
var min_ch = popup.querySelector(".child .minus");
var q_ch = popup.querySelector(".child .short");

var iframe = document.querySelector('.map iframe');
var map = document.querySelector('.map img');

/*МОДАЛЬНОЕ ОКНО. АНИМАЦИЯ*/
depdate.focus();

button.addEventListener("click", function(event) {
	event.preventDefault();
	console.log("Клик по ссылке");
	if (popup.classList.contains("emergence")) {
	    popup.classList.remove("emergence");
        popup.classList.add("vanishing");
    }
    else {
        popup.classList.remove("vanishing");
        popup.classList.add("emergence");
        depdate.focus();
    }
});

/*ВЗРОСЛЫЕ: увеличить - уменьшить кол-во*/
min_ad.addEventListener("click", function(event) {
    event.preventDefault();
    if(parseInt(q_ad.value) > 0) {
        q_ad.value=parseInt(q_ad.value)-1;
    }
});

pl_ad.addEventListener("click", function(event) {
    event.preventDefault();
    q_ad.value=parseInt(q_ad.value)+1;
});

/*ДЕТИ: увеличить - уменьшить кол-во*/
min_ch.addEventListener("click", function(event) {
    event.preventDefault();
    if(parseInt(q_ch.value) > 0) {
        q_ch.value=parseInt(q_ch.value)-1;
    }
});

pl_ch.addEventListener("click", function(event) {
    event.preventDefault();
    q_ch.value=parseInt(q_ch.value)+1;
});

/*КАРТА*/
iframe.classList.remove("hidden");
map.classList.add("hidden");