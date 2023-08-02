//Dark mode

function checkDark() {
    if (localStorage.getItem("dark") === null) {
        localStorage.setItem("dark", "false");
    }

    if (localStorage.getItem("dark") === "true") {
        $("body").addClass("dark-mode"); 
    } else {
        $("body").removeClass("dark-mode"); 
    }
}

function toggleDarkMode() {
    $("body").toggleClass("dark-mode");

    if (localStorage.getItem("dark") === "true") {
        localStorage.setItem("dark", "false");
    } else {
        localStorage.setItem("dark", "true");
    }
}

setTimeout(checkDark, 100);

//Mobile xi button

function toggleMenu() {
    $(".menu").toggleClass("visible");
}