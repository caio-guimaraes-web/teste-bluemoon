"use strict";function initNasaDataApi(){var t=fetch("https://api.nasa.gov/planetary/apod?api_key=fImyxjyUmC8jvKsxEgJ7lxtfgma8aGyqrfBC8NDc"),n=document.getElementById("js-title-return"),e=document.getElementById("js-p-return"),a=document.getElementById("js-img-return"),i=document.getElementById("js-p-author");t.then(function(t){t.json().then(function(t){n.innerText=t.title,e.innerText=t.explanation,a.src=t.url,i.innerText=t.copyright})})}function inputSubmitHandle(){document.getElementById("input-submit").addEventListener("click",function(t){t.preventDefault(),alert("Parabéns, você já garantiu seu e-book gratuito. Cheque seu e-mail.(dados seriam enviados para a base)")})}function animatingEntrance(){var t=document.getElementById("js-h-animate"),n=document.getElementById("js-i-animate");window.onload=function(){t.className+=" animation-opacity",n.className+=" animation-opacity-2"}}initNasaDataApi(),inputSubmitHandle(),animatingEntrance();