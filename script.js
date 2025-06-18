function loc() {
    const location = document.getElementById('enter').value;
    const apiKey = "6fc14e6e91794ac0b25123720251506";

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
        .then((res) => res.json())
        .then((data) => {
            const container = document.getElementById('show')
            container.innerHTML = ""
            const city_name = document.createElement("h3")
            city_name.innerText = data.location.name + "," + data.location.country;
            const temp = document.createElement("p")
            temp.innerText = "Temperature" +" "+ data.current.temp_c + "℃"
            const condition = document.createElement("p");
            condition.innerText = "Condition: " + data.current.condition.text;

            const icon = document.createElement("img");
            icon.src = "https:" + data.current.condition.icon;

            container.appendChild(city_name);
            container.appendChild(temp);
            container.appendChild(condition);
            container.appendChild(icon);
        })
        .catch((err) => console.log(err))
        document.getElementById('enter').value=""
}
const enterbtn = document.getElementById('enter')
enterbtn.addEventListener("keydown",function (event) {
    if (event.key=="Enter") {
       loc();
    }
})