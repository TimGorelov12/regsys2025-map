function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("open");
}

// Закрытие меню при клике вне него и вне кнопки
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const burger = document.querySelector(".menu-btn"); // ← это твоя кнопка ☰

  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnBurger = burger && burger.contains(event.target);

  if (!isClickInsideSidebar && !isClickOnBurger && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }
});
