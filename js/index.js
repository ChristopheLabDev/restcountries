async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name');
 
    const countries = await response.json();
    let name = "";

    countries.forEach(country => {
        name += `<li> ${country.name.official}</li>`;
    });

const querySelector = document.querySelector('#countries');
querySelector.innerHTML = name;


}
window.addEventListener('load', fetchCountries);

/* Code personnel
async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name');

    const countries = await response.json();
    let name = "";

    countries.forEach(country => {
        name += `<li> ${country.name.officiel}</li>`;

    });

    const querySelector = document.querySelector('#countries');
    querySelector.innerHTML = name;   
}
window.addEventListener('load', fetchCountries);



/*
const fetchCountries = async () =>{
    const url = `https://restcountries.com/v3.1/region/europe/?fields=name`;
    const response =  await fetch(url);
    console.log(res);
};




/*
// code Frank
 async function render() {

const response = await fetch('https');
const countries = await response.json();// de me retrouner un fichier json
const json //countries = await response.json();
console.log(json) // array of objects
for (const country of countries)  // boucler sur le tableau // country = name + area

console.log(country.name.official);
console.log(country.area);
//equivalent dans une variable du fichier json
window.addEventListener('load', render());
}
// lire le contenu d'un tableau : on fait une boucle
// récupérer le nom officiel
// dernière étape en faire qqch dans l'HTML
// concaténation pour construire
// utiliser l'URL pour le mettre dans un fichier json
*/

/*
const countryName = document.getElementById('countries');

fetch('https://restcountries.com/v3.1/region/europe/?fields=name')
    .then(response => response.json())
    .then(data => countryName.src=data[0].url)

fetch("https://restcountries.com/v3.1/region/europe/?fields=name")
.then(response => response.json())
.then(response2 => console.log(response2.name))

*/

/*async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name');
    // waits until the request completes...
    console.log(response);
  }

  function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
*/