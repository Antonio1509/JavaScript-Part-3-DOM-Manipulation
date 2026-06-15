document.addEventListener("DOMContentLoaded", () => {
});

function validateLogin(event) {
    if (event) {
        event.preventDefault();
    }

    const usernameInput = document.getElementById("uname");
    const passwordInput = document.getElementById("pwd");
    const modal = document.querySelector(".modal");

    const correctUsername = "admin@mobiwash.com";
    const correctPassword = "Password123";

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        window.location.href = "index.html";
    } else {
        if (modal) {
            modal.classList.add("show-modal");
        }
    }
}

function dismissModal() {
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.classList.remove("show-modal");
    }
}

function toggleNav() {
    const sidebar = document.querySelector(".nav-sidebar");
    const toggleButton = document.querySelector(".btn-toggle-nav");
    const sidebarLinksList = document.querySelector(".nav-sidebar ul");

    if (sidebar && toggleButton) {
        sidebar.classList.toggle("sidebar-open");
        toggleButton.classList.toggle("rotate-90");

        if (sidebar.classList.contains("sidebar-open")) {
            sidebarLinksList.style.visibility = "visible";
            sidebarLinksList.style.opacity = "1";
        } else {
            sidebarLinksList.style.opacity = "0";
            setTimeout(() => {
                if (!sidebar.classList.contains("sidebar-open")) {
                    sidebarLinksList.style.visibility = "hidden";
                }
            }, 500);
        }
    }
}