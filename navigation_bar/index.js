const navCatalog = document.getElementById("nav-catalog");
const navOrder = document.getElementById("nav-order");
const navLogo = document.getElementById("nav-logo");

navCatalog.addEventListener("click", (event) => {
	window.location.href = "catalog.html"
});

navOrder.addEventListener("click", (event) => {
	window.location.href = "order.html"
});

navLogo.addEventListener("click", (event) => {
	window.location.href = "index.html"
});
