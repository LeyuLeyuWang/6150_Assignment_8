// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
]

// Your code goes below

GEOGRAPHY_LIST.push(
    {
        country: 'China',
        capital: 'Beijing',
        largestCity: 'Shanghai',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Shandong',
                capital: 'Jinan',
                largestCity: 'Qingdao',
                area: 157100,
            },
            {
                name: 'Henan',
                capital: 'Zhengzhou',
                largestCity: 'Zhengzhou',
                area: 167000,
            },
            {
                name: 'Anhui',
                capital: 'Hefei',
                largestCity: 'Hefei',
                area: 139400,
            },
        ],
    },
    {
        country: 'Japan',
        capital: 'Tokyo',
        largestCity: 'Tokyo',
        subdivisionName: 'region',
        subdivisions: [
            {
                name: 'Kansai Region',
                capital: 'Osaka',
                largestCity: 'Osaka',
                area: 13000,
            },
            {
                name: 'Chūbu region',
                capital: 'Nagoya',
                largestCity: 'Nagoya',
                area: 7200,
            },
            {
                name: 'Kyushu Region',
                capital: 'Fukuoka',
                largestCity: 'Fukuoka',
                area: 36000,
            },
        ],
    },
)

const geographyList = document.querySelector('#geography')

let countryId = 0;

for (const country of GEOGRAPHY_LIST) {
    let subdivisions = '';
    for (const subdivision of country.subdivisions) {
        subdivisions += `
    <li>
        <div class="subdivisions">
            <h4>Name: ${subdivision.name}</h4>
            <p>Capital: ${subdivision.capital}</p>
            <p>Largest City: ${subdivision.largestCity}</p>
            <p>Area: ${subdivision.area}</p>
        </div>
    </li>
        `;
    }

    const countrys = `
    <li class="country">
    <h2><a href="#country${countryId}">${country.country}</a></h2>
    <div id="country${countryId}"  class = "country-info">
        <p>Capital: ${country.capital}</p>
        <p>Largest City: ${country.largestCity}</p>
        <p>Subdivisions: ${country.subdivisionName}</p>
        <ul>
            ${subdivisions}
        </ul>
    </div>
</li>
    `;

    geographyList.insertAdjacentHTML('beforeend', countrys)
    countryId++;
}

