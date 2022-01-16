async function loadIntoTable() {
   
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,area,population,capital');
    // const (name, area, population, capital) = await response.json();
    const countries = await response.json();
    let name = "";
    const formatage = new Intl.NumberFormat("en-US");
    /*
    ${formatage.format(country.area)};
    */
    for (const country of countries) {
        name += `<tr class="table-bordered">   
                        <td> ${country.name.official} </td>
                        <td> ${country.area}</td>
                        <td> ${country.population}</td>
                        <td> ${country.capital}</td>
                </tr>`;           
};
const querySelector = document.querySelector('#table');
querySelector.innerHTML = name;
}
window.addEventListener('load', loadIntoTable());

/*

*/
/*// populate the headers
for (const headerText of headers) {
    const headerElement = document.createElement("th");
  
    headerElement.textContent = headerText;
    tableHead.querySelector("tr")

}
*/ 
/*function generate_table() {
        // get the reference for the body
        var body = document.getElementsByTagName("body")[0];
    console.log(data);*/

//loadIntoTable("./data.json", document.querySelector("table"))

