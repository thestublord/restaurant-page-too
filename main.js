(()=>{"use strict";function n(){const n=document.getElementById("content"),e=document.createElement("div");e.innerHTML='\n      <h1>Welcome to Our Restaurant</h1>\n      <p>Our restaurant offers the finest food and the most wonderful atmosphere.</p>\n      <img src="path/to/your/image.jpg" alt="Restaurant Image">\n    ',n.appendChild(e)}function e(){document.getElementById("content").innerHTML=""}!function(){const t=document.getElementById("content"),o=document.createElement("nav");o.innerHTML='\n    <button id="homeTab">Home</button>\n    <button id="menuTab">Menu</button>\n    <button id="contactTab">Contact</button>\n  ',t.appendChild(o),document.getElementById("homeTab").addEventListener("click",(()=>{e(),t.appendChild(o),n()})),document.getElementById("menuTab").addEventListener("click",(()=>{e(),t.appendChild(o),function(){const n=document.getElementById("content"),e=document.createElement("div");e.innerHTML="\n      <h1>Menu</h1>\n      <p>Explore our delightful menu filled with a variety of dishes.</p>\n    ",n.appendChild(e)}()})),document.getElementById("contactTab").addEventListener("click",(()=>{e(),t.appendChild(o),function(){const n=document.getElementById("content"),e=document.createElement("div");e.innerHTML="\n      <h1>Contact Us</h1>\n      <p>Get in touch with us for bookings and inquiries.</p>\n    ",n.appendChild(e)}()})),n()}()})();