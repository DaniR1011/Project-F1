import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = `
    <section class="home">
        <h1>Formula 1 Drivers</h1>
        <img src="https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-08/sporting-news-2022-photo-with-watermark-022c4b8a-ab74-4c34-87ac-da2011324ec9.png?itok=fu3WBLx0" alt="logo"/>
    </section>`;
};