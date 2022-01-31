async function loadIntoSelect() {
   
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,cca2,capitalInfo');
    const countries = await response.json();
    let name = "";
  
    for (const country of countries) { 
        
        if (country.cca2 !== "FR") {
            name += `<option value="${country.cca2}"> ${country.name.official}</option>`;
        } else {
            name += `<option value="${country.cca2}" selected> ${country.name.official}</option>`;
        }            
};
/*    for (const )*/

const choosecountry = document.querySelector('#countrieslist');
choosecountry.innerHTML = name;
}
window.addEventListener('load', loadIntoSelect());

async function loadMapOnSelect(event) {

    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=,cca2,capitalInfo');
    const maps = await response.json();
    let map = "";
    let country = "";
    
  //  if (option value = selected) 
        map += `src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBjXUfWWsrVLhsw6b2bfT0yjabAWJYgINc&center=${country.capitalInfo.latlng[0,1]}&zoom=10"`
    console.log(map);  
    const chooseMap = document.querySelector('#mapDisplay')
    chooseMap.innerHTML = map;
    chooseMap.addEventListener('change', loadMapOnSelect());
};




/*
 const mapSelect = document.querySelector('#mapDisplay');

 choosecountry.value = "FR";
const mapSelect = document.querySelector('#mapDisplay');
mapSelect.innerHTML = map;*/