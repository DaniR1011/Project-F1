import "./Drivers.css"
import {getData} from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";




const getDrivers = async() => {
    const drivers = await getData("drivers");
    printDrivers(drivers, "");
}

const printDrivers = (list) => {
    
    const section = document.createElement("section");
    section.classList.add("drivers-section");
    section.innerHTML = `
    <h2 class="title" id="#">Drivers Grid 2022</h2>
    <section> <input type="text" id="search" placeholder="Search a driver:"/> </section>
    `;
    
    for (const item of list) {
        section.innerHTML += `
        <figure>
            <div>
                <h3>${item.name}</h3>
                <p>${item.nationality}</p>
                <p>${item.team}</p>
                <p>${item.wins}</p>
                <p>${item.age} years old</p>
                <img src=${item.img} alt=${item.img} />
            </div>
        </figure>
    `
    }
section.innerHTML += `<p><a href="#">Back to top</a></p>`
const app = document.querySelector("#app");
cleanPage(app);
app.appendChild(section);
};

export const Drivers = () => {
    getDrivers();
}

// Función Barra de buscar