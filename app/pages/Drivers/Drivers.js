import {getData} from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";

const getDrivers = async() => {
    const drivers = await getData("drivers");
    printDrivers(drivers);
}

const printDrivers = (list) => {
    const section = document.createElement("section");
    section.classList.add("drivers-section");
    for (const item of list) {
        section.innerHTML += `
        <figure>
            <div>
                <h2>${item.name}</h2>
                <p>${item.nationality}</p>
                <p>${item.team}</p>
                <p>${item.wins}</p>
                <p>${item.age} years old</p>
                <img src=${item.img} alt=${item.img} />
            </div>
        </figure>
    `
    }
const app = document.querySelector("#app");
cleanPage(app);
app.appendChild(section);
};

export const Drivers = () => {
    getDrivers();
}
