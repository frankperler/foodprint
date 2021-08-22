const { Product } = require('../models/index');

const name = ["Apples","Artichoke","Bananas","Beetroot","Bread","Broccoli","Carrot","Cheese","Mountain Cheese", "Blue Cheese", "Young Cheese", "Cherries","Chicken","Eggs","Garlic","Grapes","Lemons","Lettuce","Mangoes","Milk","Mushrooms","Oranges","Peaches","Squash","Strawberries","Tomatoes"]
const co2 = [90,34,130,114,121,108,113,879,879,879,879,286,471,451,45,30,190,161,440,176,140,190,190,116,224,291]
const code =["P2X7NDx_GP0", "5XXfyMMan84", "4yTKah43Y2o", "udo5pIvRfrA", "1J44x_cBASQ", "Dof-Xo3bHEA", "yNB8niq1qCk", "KaK2jp8ie8s", "AU2goNvfyWU", "gMW2NZ7JGrE", "aglNvkFg06k", "Q6wNqGS8gx4", "tp9Y4_w9DIA", "qlLCBkTSYAI", "vIiye0QDryo", "gBdG886bLDY", "09tUNHKUSrk", "PUlsxslYryE", "Dyc95dKuGp4", "ccV4kUrSYIM", "Ql9oYxramg0", "eaOjEz8746k", "O3TlS547j7k", "AgYB1Fn259A", "IeEFsajuORc", "jF62cuCoGWQ"]

console.log(name.length)
console.log(co2.length)
console.log(code.length)


async function mockingProduct() {
  try {
    for (let i = 0; i < name.length; i++) {
      const mockProduct = {};

      mockProduct.product_name = name[i];
      mockProduct.product_CO2 = co2[i];
      mockProduct.product_code = `https://source.unsplash.com/${code[i]}/1600x900`;

      console.log(mockProduct)
      console.log("-------------", i)

      await Product.create(mockProduct);
  }
  }
  catch (e) {
    console.log(e)
  }
}

setTimeout(() => {
    mockingProduct()
  }, 3000);


