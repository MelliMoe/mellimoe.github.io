!function(){function e(e){e.preventDefault();var t=e.target,n=function(e){var t,n=e.elements,o=Object.keys(n).filter(function(e){return"honeypot"!==n[e].name||(t=n[e].value,!1)}).map(function(e){return void 0!==n[e].name?n[e].name:n[e].length>0?n[e].item(0).name:void 0}).filter(function(e,t,n){return n.indexOf(e)==t&&e}),r={};return o.forEach(function(e){var t=n[e];if(r[e]=t.value,t.length){for(var o=[],a=0;a<t.length;a++){var i=t.item(a);(i.checked||i.selected)&&o.push(i.value)}r[e]=o.join(", ")}}),r.formDataNameOrder=JSON.stringify(o),r.formGoogleSheetName=e.dataset.sheet||"responses",r.formGoogleSendEmail=e.dataset.email||"",{data:r,honeypot:t}}(t),o=n.data;if(n.honeypot)return!1;!function(e){for(var t=e.querySelectorAll("button"),n=0;n<t.length;n++)t[n].disabled=!0}(t);var r=t.action,a=new XMLHttpRequest;a.open("POST",r),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){t.reset();var e=t.querySelector(".form-elements");e&&(e.style.display="none");var n=t.querySelector(".thanks");n&&(n.style.display="block");var o=t.querySelector(".page-content");o&&(o.style.display="none")}};var i=Object.keys(o).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(o[e])}).join("&");a.send(i)}document.addEventListener("DOMContentLoaded",function(){for(var t=document.querySelectorAll("form.gform"),n=0;n<t.length;n++)t[n].addEventListener("submit",e,!1)},!1)}();