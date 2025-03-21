
document.addEventListener("DOMContentLoaded",()=>{
  const menubtn = document.getElementById("menu-btn");
  const DropDownMenu = document.getElementById("dropdown-menu");
  const closebtn = document.getElementById("close-btn");
  const Navbar = document.getElementById("Nav-bar");

  menubtn.addEventListener("click",()=>{
  DropDownMenu.style.display = DropDownMenu.style.display = "flex";
  Navbar.style.display = Navbar.style.display = "none"
  
});
closebtn.addEventListener("click",()=>{
  DropDownMenu.style.display = DropDownMenu.style.display === "none"?"block" : "none";
  Navbar.style.display = Navbar.style.display = "flex"
})
})

