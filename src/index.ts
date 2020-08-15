import * as  DOMSelectors from "./ts/utils/selector"
// ! Im selecting by id
const app = DOMSelectors.selectElementByClassOrId("#app")


if (app) {

    const navbar = app.querySelector("#nav");
    const navBtn = app.querySelector("#nav-btn");
    const closeBtn = app.querySelector("#close-btn");
    const sidebar = app.querySelector("#sidebar");
    const date = app.querySelector("#date");

    // add fixed class to navbar

    if (navbar) {

        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 80) {
                navbar.classList.add("navbar-fixed");
            } else {
                navbar.classList.remove("navbar-fixed");
            }
        });

        if (navBtn && closeBtn && date && sidebar) {

            // show sidebar
            navBtn.addEventListener("click", function () {
                sidebar.classList.add("show-sidebar");
            });

            closeBtn.addEventListener("click", function () {
                sidebar.classList.remove("show-sidebar");
            });

            // set year
            date.innerHTML = new Date().getFullYear().toString();

        } else {
            console.log(`You are missing one of the following id's 
            close-btn,
            sidebar,
            date 
            sidebar 
            
            `)

        }


    } else {
        console.log("There is no  navbar with the id of nav")

    }

} else {
    console.log("There is no  div with the id of app")
}

