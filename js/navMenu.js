function handleClickMenu(event) {
  const navItem = document.querySelectorAll(".nav-link");
  navItem.forEach(function (item) {
    item.classList.remove("active");
  });
  event.closest(".nav-link").classList.add("active");
}
