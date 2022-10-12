import "./Nav.css";

export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () => 
    document.body.classList.toggle("dark")
    );
};

export const Nav = () => `
<nav>
    <ul>
        <li>
            <a href="#" id="homelink">Home</a>
        </li>
        <li>
            <a href="#" id="driverslink">Drivers</a>
        </li>
    </ul>
        <button id="themeBtn">Theme</button>
</nav>
`;


