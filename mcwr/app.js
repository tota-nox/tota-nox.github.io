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

var x = setInterval(() => {
    var releaseDate = new Date("2024-05-11T14:00:00Z");
    var now = new Date();
    var countDown = releaseDate.getTime() - now.getTime();
    var daysCd = Math.floor(countDown / (1000 * 60 * 60 * 24));
    var hoursCd = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesCd = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    var secondsCd = Math.floor((countDown % (1000 * 60)) / 1000);
    $("#countdown").text(`${daysCd} days, ${hoursCd}:${minutesCd}:${secondsCd}`);
}, 1000);
