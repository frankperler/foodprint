const { Supplier } = require('../models/index');

//from MDN
function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function getRandomValue(arr) {
  const num = Math.floor(Math.random() * arr.length);
  return arr[num];
}

//mock farm names
const lastNames = ["Calyton", "Redolfi", "Nand", "Lineham", "Antosik", "Plenty", "Crankhorn", "Bard", "Rydeard", "Heynen", "Sparke", "Skedgell", "Fere", "Hindrick", "Kira", "Breslin", "Usmar", "Jacobsohn", "Glastonbury", "Skayman", "Goulstone", "Stoeck", "Klimkin", "Paddison", "Hanster", "Leopold", "Treweela", "Ugo", "Battlestone", "Dawks", "Itzkovitch", "Klimpt", "Udall", "Roughley", "Dowzell", "Payton", "Pascall", "Marcos", "Hymans", "Arlett", "Butcher", "Oakeby", "Berrisford", "Wyrall", "Dudek", "Kilbee", "Lockyear", "Aspell", "Mansford", "Downey", "Heimann", "McCosker", "Heersma", "Treen", "Rowlin", "Kleint", "Drillingcourt", "Vaadeland", "Firle", "Routham", "Simak"]
//mock farm names addendums
const farmType = ["'s Farm", " & Co.", "'s Land", "'s Ranch", "'s Homestead", "'s Garden", "'s Cottage", "'s Orchard"]

//mock address 
const streetNames = ["Mehringdamm", "Motzstraße", "Niederkirchnerstraße", "Frankfurter Allee", "Tauentzienstraße", "Schwedter Straße", "Kopenhagener Straße", "Frankfurter Allee", "Bernauer Straße", "Ackerstraße", "Ossietzkystraße"]
const city = ["Stendal", "Wolfsburg", "Gardelegen", "Salzwede", "Wittenberge", "Torgau", "Perleberg", "Eberswalde"];

//mock description
const farmDescription = ["For me, apples and pears are a family affair! Hence the name of the enterprise, Maison Tamisier. I have been cultivating them since 1998, after inheriting them from my father and ultimately receiving them from my grandfather, who planted his first apple trees in 1951. Ever since 2000, I have been planting my first organic apple trees, followed by pear and plum trees. My brother Sylvain joined me in 2008 and took charge of the marketing. Breaking the mould of our production habits, a new project was born in 2017 with the planting of Pomegranate and Persimmon trees.", "Since I was a kid I have always worked in the production and trading of fruit and vegetables, at the beginning dealing only with conventional methods and products. In 2011, after a trip to Germany where I came into contact with various organic fruit and vegetables producers, I realized the potential and the countless positive aspects linked to this method of production, therefore I decided to found Bioplus. The name embodies the very heart of the term organic (which in italian translates to “biologico”), combined with the desire to guarantee the consumer something extra, a plus. That extra something is the guarantee of a 100% natural product and the maximum commitment we put into protecting the environment. The company is located in Canicattì, a village in Sicily, which is exactly the land of origin of the Italia grape. It includes 25 hectares of vineyards, also located in neighbouring villages, some close to other plantations, some others with a seaview."]

//mock pictures 
const supPics = ["vGQ49l9I4EE", "IdrzXJQlw5w", "IJSs1KpXaqI", "O3TlS547j7k", "UOEB1ztsDMo", "7w7LzO9Vkvg", "KaK2jp8ie8s", "Twz3meoE_X8", "YNP2p8bAflo", "WZbJPdz42VM", "N3fWEx-2vow"]

//mock greenTechnology
const greenTech = ["Plastic-Free", "Antibiotic-Free", "Organic", "Renewable Energy", "Animal Rights", "Water Recycling", "Biofuels", "No Pesticides", "Biodynamic", "Bee Friendly", "Non-GMO"]
const energySources = ['Solar-powered', 'Wind-powered', 'Natural gas', 'Electricity (renewable)', 'Electricity (non-renewable)'];
const vehicleFuel = ["Biofuel", "Gasoline", "Diesel", "Electric", "Hybrid"];

async function populateSuppliers() {
  try {

    for (let i = 0; i < 50; i++) {
      const mockSupplier = {};
      mockSupplier.sup_name = `${getRandomValue(lastNames)}${getRandomValue(farmType)}`;
      mockSupplier.sup_address = `${getRandomValue(streetNames)} ${getRandomArbitrary(0, 120)}, ${getRandomArbitrary(10123, 15987)} ${getRandomValue(city)}, Deutschland`
      mockSupplier.sup_phone_number = `0345 ${getRandomArbitrary(1235678, 8463499)}`;
      mockSupplier.sup_lat = +(`${getRandomArbitrary(51, 53)}.${getRandomArbitrary(234567, 987654)}`)
      mockSupplier.sup_lng = +(`${getRandomArbitrary(11, 13)}.${getRandomArbitrary(234567, 987654)}`)
      const websiteName = (getRandomValue(lastNames) + getRandomValue(city)).toLowerCase()
      mockSupplier.sup_website = `www.${websiteName}.com`;
      mockSupplier.sup_eco_score = +(getRandomArbitrary(3, 5).toFixed(2))
      mockSupplier.sup_description = getRandomValue(farmDescription)
      mockSupplier.sup_picture = `https://source.unsplash.com/${getRandomValue(supPics)}/1600x900`;
      mockSupplier.sup_city = getRandomValue(city);

      let greenTechSet = new Set();
      for (let j = 0; j < 8; j++) {
        greenTechSet.add(getRandomValue(greenTech));
      }
      const greenTechArr = Array.from(greenTechSet);

      mockSupplier.sup_greenTech = greenTechArr.map(tech => {
        let newObj = {};
        newObj[tech] = true;
        return JSON.stringify(newObj);
      })

      let energy = new Set();
      for (let j = 0; j < 2; j++) {
        energy.add(getRandomValue(energySources));
      }
      mockSupplier.sup_energy = Array.from(energy);

      mockSupplier.sup_vehicles = getRandomValue(vehicleFuel);
      mockSupplier.UserId = i + 103;

      console.log(mockSupplier)
      console.log("-------------", i)
      await Supplier.create(mockSupplier);
    }

  }
  catch (e) {
    console.log(e);
  }
}

setTimeout(() => {
  populateSuppliers()
}, 3000);