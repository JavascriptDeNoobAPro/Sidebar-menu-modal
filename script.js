const toggle = document.getElementById("toggle");

const toggleSidebar = () => document.body.classList.toggle("show-nav");

toggle.addEventListener("click", toggleSidebar);

const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

const openModal = () => modal.classList.add("show-modal");
const closeModal = () => modal.classList.remove("show-modal");

open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
