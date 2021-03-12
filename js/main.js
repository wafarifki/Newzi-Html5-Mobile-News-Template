var currentPageId = "halaman-beranda";
var currentSelectorId = "beranda";

function getButtons() {
    var list = ["beranda", "profil", "pencarian"];
    return list;
}

window.onload = function() {
    var pageIdList = getButtons();
    pageIdList.forEach(function(page) {
        document.getElementById(page).addEventListener("click", changePage, false);
    });
}

function changePage() {
    var currentSelector = document.getElementById(currentSelectorId);
    var currentPage = document.getElementById(currentPageId);
    var pageId = "halaman-" + this.id;
    var page = document.getElementById(pageId);
    var pageSelector = document.getElementById(this.id);
    if (page.classList.contains("active")) {

        return;
    }

    currentSelector.classList.remove("button-active");
    currentSelector.classList.add("button-inactive");
    currentPage.classList.remove("active");
    currentPage.classList.add("inactive");

    pageSelector.classList.remove("button-inactive");
    pageSelector.classList.add("button-active");

    page.classList.remove("inactive");
    page.classList.add("active");

    window.scrollTo(0, 0);

    currentSelectorId = this.id;
    currentPageId = pageId;
}

document.getElementById("menu").addEventListener("click", open_close);

var menuState = 0

function open_close() {
    if (menuState === 0) {
        menuState = 1;
        document.getElementById("mySidenav").style.width = "240px";
        $(this).find("i").removeClass("fas fa-bars").addClass("fas fa-times");
    } else {
        menuState = 0;
        document.getElementById("mySidenav").style.width = "0";
        $(this).find("i").removeClass("fas fa-times").addClass("fas fa-bars");
    }
    console.log(menuState);
}