let container = document.querySelector(".container");

function render() {
    container.innerHTML = "";
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            data.forEach((item) => {
                container.innerHTML += `
                <div class="card" style="width: 18rem">
            <img src="${item.flags.png}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Name of Country: ${item.altSpellings[0]}</h5>
                <p class="card-text">
                    <ul>
                        <li>Capital: ${item.capital}</li>
                        <li>Time: ${item.timezones}</li>
                        <li>Region: ${item.region}</li>
                        <li>Population: ${item.population} peoples</li>
                    </ul>
                </p>
            </div>
        </div>
            `;
            });
        })
        .catch((err) => console.log(err));
}
render();
