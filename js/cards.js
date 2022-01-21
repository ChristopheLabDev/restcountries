async function loadIntoCard() {
   
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,capital,flags,maps');
    // const (name, area, population, capital) = await response.json();
    const countries = await response.json();
    let name = "";
    const formatage = new Intl.NumberFormat("en-US");
    /*
    ${formatage.format(country.area)};
    */
    for (const country of countries) {
        name += `<div class="col">
         
        <div class="card w-100 h-100">
        <a href="${country.maps.openStreetMaps}" target="_blank"><img src="${country.flags.png}" class="card-img-top" alt="${country.flags.png}"></a>
                    <div class="card-body">
                    <h5 class="card-title">${country.name.official}</h5>
                        <p class="card-text">${country.capital}</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    `;           
};
const querySelector = document.querySelector('#cards');
querySelector.innerHTML = name;
}
window.addEventListener('load', loadIntoCard());