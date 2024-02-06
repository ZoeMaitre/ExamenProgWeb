import Country from "./modules/Country";
import { shuffle } from "lodash";

const tableauCountries = [];

const countries = fetch("https://restcountries.com/v3.1/all").then((resultat) => resultat.json());
countries.then((data) => {

    data.forEach((el) => {
        tableauCountries.push(
            new Country(el));
    });

    //const tableauMelange = shuffle(tableauCountries);

    //console.log(tableauCountries);

});




/* const tableauMelange = shuffle(tableauCountries);
return tableauMelange;
 */

document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();


});
