document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.querySelector(".menu-btn");

  function toggleMenu(event) {
    event.stopPropagation();
    sidebar.classList.toggle("open");
  }

  menuBtn.addEventListener("click", toggleMenu);

  document.addEventListener("click", function(event) {
    const clickedInsideMenu = sidebar.contains(event.target);
    const clickedOnButton = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedOnButton && sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    }
  });
});
