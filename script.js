/*
========================================

  ██████╗ ███████╗███╗   ██╗████████╗██████╗ ██╗ ██████╗██╗  ██╗
 ██╔════╝██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██║██╔════╝╚██╗██╔╝
 ██║     █████╗  ██╔██╗ ██║   ██║   ██████╔╝██║██║      ╚███╔╝
 ██║     ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██║██║      ██╔██╗
 ╚██████╗███████╗██║ ╚████║   ██║   ██║  ██║██║╚██████╗██╔╝ ██╗
  ╚═════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝

          PROJECT V1

  CentricxMC Official Website

  Built by rayzzz

========================================
*/
/* ===================================

CENTRICXMC PREMIUM WEBSITE
script.js
Part 1
Version 1.0

=================================== */

// ============================
// VARIABLES
// ============================
/* ===================================

CENTRICXMC PREMIUM WEBSITE
script.js
Part 1
Version 1.0

=================================== */

// ============================
// VARIABLES
// ============================

const body = document.body;
const navbar = document.querySelector("nav");

const scrollTopBtn = document.getElementById("scrollTop");

const toast = document.getElementById("toast");

// Java IP
const JAVA_IP = "void.centricxmc.in";

// Bedrock IP
const BEDROCK_IP = "void.centricxmc.in";

// ============================
// LOADING SCREEN
// ============================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},900);

},2200);

}

});

// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

// ============================
// NAVBAR SCROLL EFFECT
// ============================

window.addEventListener("scroll",()=>{

const y=window.scrollY;

if(y>80){

navbar.style.background="rgba(8,8,8,.82)";

navbar.style.backdropFilter="blur(25px)";

navbar.style.boxShadow="0 15px 40px rgba(123,45,255,.25)";

}else{

navbar.style.background="rgba(255,255,255,.04)";

navbar.style.boxShadow="0 0 40px rgba(123,45,255,.15)";

}

});

// ============================
// SCROLL TO TOP BUTTON
// ============================

window.addEventListener("scroll",()=>{

if(!scrollTopBtn) return;

if(window.scrollY>450){

scrollTopBtn.classList.add("show");

}else{

scrollTopBtn.classList.remove("show");

}

});

if(scrollTopBtn){

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}
// ===================================
//
// PREMIUM TOAST SYSTEM
//
// ===================================

function showToast(title,message){

if(!toast) return;

toast.innerHTML=`
<div class="toast-title">${title}</div>
<div class="toast-message">${message}</div>
`;

toast.classList.add("show");

clearTimeout(window.toastTimer);

window.toastTimer=setTimeout(()=>{

toast.classList.remove("show");

},2200);

}

// ===================================
//
// COPY JAVA IP
//
// ===================================

function copyJavaIP(){

navigator.clipboard.writeText(JAVA_IP);

showToast(

"🟢 Java IP Copied",

JAVA_IP

);

}

// ===================================
//
// COPY BEDROCK IP
//
// ===================================

function copyBedrockIP(){

navigator.clipboard.writeText(BEDROCK_IP);

showToast(

"📱 Bedrock IP Copied",

BEDROCK_IP

);

}

// ===================================
//
// BUTTON EVENTS
//
// ===================================

document.querySelectorAll(".copy-java").forEach(button=>{

button.addEventListener("click",copyJavaIP);

});

document.querySelectorAll(".copy-bedrock").forEach(button=>{

button.addEventListener("click",copyBedrockIP);

});

// ===================================
//
// REVEAL ANIMATION
//
// ===================================

const revealItems=document.querySelectorAll(

".feature-card,.status-card,.gallery-card,.staff-card,.stats-box,.discord-card"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition=".8s ease";

revealObserver.observe(item);

});
// ===================================
//
// CENTRICXMC LIVE STATUS ENGINE
//
// ===================================

const API_URL =
"https://api.mcsrvstat.us/3/void.centricxmc.in:25591";

async function updateServerStatus(){

try{

const response = await fetch(API_URL);

const data = await response.json();

const statusElement =
document.getElementById("serverOnline");

const playersElement =
document.getElementById("serverPlayers");

const versionElement =
document.getElementById("serverVersion");

const latencyElement =
document.getElementById("serverLatency");

const heroStatus =
document.getElementById("status-text");

const heroPlayers =
document.getElementById("player-count");

const statsPlayers =
document.getElementById("onlinePlayers");

if(data.online){

statusElement.textContent="🟢 Online";

heroStatus.textContent="🟢 Online";

playersElement.textContent=
`${data.players.online} / ${data.players.max}`;

heroPlayers.textContent=
`${data.players.online} / ${data.players.max}`;

statsPlayers.textContent=
data.players.online;

versionElement.textContent=
data.version || "Unknown";

latencyElement.textContent=
"Excellent";

}else{

statusElement.textContent="🔴 Offline";

heroStatus.textContent="🔴 Offline";

playersElement.textContent="0 / 0";

heroPlayers.textContent="0 / 0";

statsPlayers.textContent="0";

versionElement.textContent="-";

latencyElement.textContent="-";

}

}catch(error){

console.error(error);

document.getElementById("serverOnline").textContent =
"⚠ Connection Error";

document.getElementById("serverPlayers").textContent =
"-";

document.getElementById("serverVersion").textContent =
"-";

document.getElementById("serverLatency").textContent =
"-";

document.getElementById("status-text").textContent =
"⚠ Error";

document.getElementById("player-count").textContent =
"-";

document.getElementById("onlinePlayers").textContent =
"-";

}

}

updateServerStatus();

setInterval(updateServerStatus,30000);
// ===================================
//
// FAQ SYSTEM
//
// ===================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const button = item.querySelector(".faq-question");

button.addEventListener("click",()=>{

faqItems.forEach(other=>{

if(other!==item){

other.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

// ===================================
//
// COUNTER ANIMATION
//
// ===================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = Number(counter.dataset.target);

let current = 0;

const increment = Math.max(1,Math.ceil(target/100));

const update = ()=>{

current += increment;

if(current >= target){

counter.textContent = target;

}else{

counter.textContent = current;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

},{
threshold:.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ===================================
//
// PLAY NOW BUTTON
//
// ===================================

const playButton = document.getElementById("playNow");

if(playButton){

playButton.addEventListener("click",()=>{

const connect = document.querySelector(".connect");

if(connect){

connect.scrollIntoView({

behavior:"smooth"

});

}

});

}

// ===================================
//
// NAVBAR COPY IP
//
// ===================================

const navCopy = document.getElementById("copyNav");

if(navCopy){

navCopy.addEventListener("click",()=>{

navigator.clipboard.writeText(JAVA_IP);

showToast(

"📋 Server IP Copied",

JAVA_IP

);

});

}

// ===================================
//
// CENTRICXMC BRAND EFFECTS
//
// ===================================

// Mouse Glow

const glow = document.createElement("div");

glow.id = "cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});

// ===================================
//
// BUTTON RIPPLE EFFECT
//
// ===================================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple = document.createElement("span");

const rect = button.getBoundingClientRect();

const size = Math.max(rect.width,rect.height);

ripple.style.width = size+"px";

ripple.style.height = size+"px";

ripple.style.left =

e.clientX-rect.left-size/2+"px";

ripple.style.top =

e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

// ===================================
//
// FLOATING PARTICLES
//
// ===================================

const particleContainer =

document.getElementById("particles");

function createParticle(){

if(!particleContainer) return;

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=

6+Math.random()*6+"s";

particle.style.opacity=

Math.random();

particleContainer.appendChild(particle);

setTimeout(()=>{

particle.remove();

},12000);

}

setInterval(createParticle,350);
// ===================================
//
// PREMIUM POLISH ENGINE
//
// ===================================

// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===================================
//
// CARD HOVER EFFECT
//
// ===================================

document.querySelectorAll(

".feature-card,.status-card,.staff-card,.gallery-card,.stats-box"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";

});

});

// ===================================
//
// DISCORD BUTTON EFFECT
//
// ===================================

document.querySelectorAll(".discord-btn,.discord-button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px) scale(1)";

});

});

// ===================================
//
// PAGE READY
//
// ===================================

console.log(
"%cCentricxMC Ready 🥶",
"color:#C77DFF;font-size:18px;font-weight:bold;"
);
// ===================================
//
// PREMIUM EXPERIENCE ENGINE
//
// ===================================

// Page Visibility

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="👋 Come back to CentricxMC!";

}else{

document.title="CentricxMC | Premium Minecraft Server";

}

});

// ===================================
//
// PARALLAX HERO
//
// ===================================

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

if(!hero) return;

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

hero.style.transform=

`translate(${x}px,${y}px)`;

});

// ===================================
//
// RANDOM HERO QUOTES
//
// ===================================

const heroQuotes=[

"Forge Your Legacy.",

"Every Block Tells A Story.",

"Adventure Starts Here.",

"Survive. Build. Conquer.",

"Create Your Kingdom."

];

const subtitle=document.querySelector(".hero p");

if(subtitle){

setInterval(()=>{

const random=

heroQuotes[Math.floor(Math.random()*heroQuotes.length)];

subtitle.style.opacity="0";

setTimeout(()=>{

subtitle.textContent=random;

subtitle.style.opacity="1";

},300);

},9000);

}

// ===================================
//
// SMOOTH SECTION FADE
//
// ===================================

const allSections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:.15

});

allSections.forEach(section=>{

observer.observe(section);

});
// ===================================
//
// PREMIUM USER EXPERIENCE
//
// ===================================

// Lazy Image Animation

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("loading","lazy");

});

// ===================================
//
// BUTTON PRESS EFFECT
//
// ===================================

document.querySelectorAll("button,.discord-btn,.discord-button").forEach(btn=>{

btn.addEventListener("mousedown",()=>{

btn.style.transform+=" scale(.96)";

});

btn.addEventListener("mouseup",()=>{

btn.style.transform=

btn.style.transform.replace(" scale(.96)","");

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform=

btn.style.transform.replace(" scale(.96)","");

});

});

// ===================================
//
// PERFORMANCE LOGGER
//
// ===================================

window.addEventListener("load",()=>{

const pageTime=

performance.now().toFixed(0);

console.log(

`🚀 Website Loaded in ${pageTime} ms`

);

});

// ===================================
//
// WELCOME MESSAGE
//
// ===================================

console.log(
`
██████╗███████╗███╗   ██╗████████╗██████╗ ██╗ ██████╗██╗  ██╗
██╔════╝██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██║██╔════╝╚██╗██╔╝
██║     █████╗  ██╔██╗ ██║   ██║   ██████╔╝██║██║      ╚███╔╝
██║     ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██║██║      ██╔██╗
╚██████╗███████╗██║ ╚████║   ██║   ██║  ██║██║╚██████╗██╔╝ ██╗
 ╚═════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝

Welcome Developer 👋
`);
// ===================================
//
// PREMIUM REVEAL ENGINE
//
// ===================================

const revealElements2 = document.querySelectorAll(
".feature-card, .status-card, .gallery-card, .staff-card, .stats-box, .faq-item"
);

const revealObserver2 = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("reveal-show");

}

});

},{
threshold:0.15
});

revealElements2.forEach(el=>{

el.classList.add("reveal-hidden");

revealObserver2.observe(el);

});
// ===================================
//
// MAGNETIC BUTTON EFFECT
//
// ===================================

document.querySelectorAll("button,.discord-button").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

button.style.transform=

`translate(${x*0.12}px,${y*0.12}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});
// ===================================
//
// PREMIUM CARD SPOTLIGHT
//
// ===================================

document.querySelectorAll(
".feature-card,.status-card,.staff-card,.stats-box,.gallery-card"
).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});
