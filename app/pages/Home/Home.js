import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const app = document.querySelector("#app");
    // cleanPage(app);
    app.innerHTML = `
    <section class="home">
        <h1>Formula 1 Web</h1>
        <p>Welcome everyone to my first website of Formula 1. In this page,
        I want to show the stats of the twenty drivers of the 2022 grid. Each driver has information
        about his stats in race and out of them. You can navegate through the web, using the buttons it contains,
        and selecting the light or dark theme, as you want. Enjoy it! 😄</p>
        <img src="https://staticfanpage.akamaized.net/wp-content/uploads/sites/27/2022/09/GettyImages-1420739339-1200x675.jpg" alt="logo"/>
    </section>`;
};
