function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("open");
}

// Закрытие меню при клике вне него
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const burger = document.querySelector(".menu-btn"); // ← здесь важно!
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnBurger = burger && burger.contains(event.target);

  if (!isClickInsideSidebar && !isClickOnBurger && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }
});
