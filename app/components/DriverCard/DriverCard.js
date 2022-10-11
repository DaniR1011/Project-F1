export const DriverCard = () => `
<figure class="item">
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