const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

function showpassword(){
  document.getElementById('password').type = "text";
  document.getElementById('close').style.display = "none";
  document.getElementById('open').style.display = "flex";
}
function hidepassword(){
  document.getElementById('password').type = "password";
  document.getElementById('close').style.display = "flex";
  document.getElementById('open').style.display = "none";
}

window.addEventListener('scroll', function(){
  var navbar = document.querySelector('#navbar');
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}});
