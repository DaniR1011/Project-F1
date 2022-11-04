import "./Drivers.css"
import {getData} from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";
import {DriverCard} from "../../components/DriverCard/DriverCard";

let driversList;

const getDrivers = async() => {
    const drivers = await getData("drivers");
    driversList = drivers;
    printDrivers(drivers, "");
};

const printDrivers = (list, word) => {
    const filteredDrivers = list.filter((item) => 
    item.name.toLowerCase().includes(word.toLowerCase())
    );
    const driverContainer = document.querySelector(".dri");
    driverContainer.innerHTML = "";
    
    for (const item of filteredDrivers) {
        driverContainer.innerHTML += `
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
quesContainer.innerHTML += `<p><a href="#">Back to top</a></p>`
};

export const Drivers = () => {
    const app = document.querySelector('#app');
    // const section = document.createElement("section");
    // section.classList.add("drivers-section");
    app.innerHTML = `
    <h2 class="title" id="#">Drivers Grid 2022</h2>
    <section> 
        <input type="text" id="search" placeholder="Search a driver:"/> 
    </section>
    <div class="dri"></div>
    `;
    getDrivers();

const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (ev) => printDrivers(driversList, ev.target.value));
};

