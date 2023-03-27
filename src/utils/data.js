import S1 from "../img/new/removed bg/salad/Caesar_Salad-removebg-preview.png"
import S2 from "../img/new/removed bg/salad/sprout_salad-removebg-preview.png"
import S3 from "../img/new/removed bg/salad/magic_salad_bg.png"
import S4 from "../img/new/removed bg/salad/protein_bomg_bg.png"
import S5 from "../img/new/removed bg/salad/Quinoa_Super_Bowl-removebg-preview (1).png"
import S6 from "../img/new/removed bg/salad/Sautéed_Vegetables_with_Mint_Dip-removebg-preview.png"
import F1 from "../img/new/removed bg/Fruit Salad/Magic_Fruit_Bowl-removebg-preview.png"
import F2 from "../img/new/removed bg/Fruit Salad/watermelon_refreshing_bg.png"
import B1 from "../img/new/removed bg/Beverage/buttermilk_bg.png"
import B2 from "../img/new/removed bg/Beverage/lemonade-removebg-preview.png"

export const heroData = [
  {
    id: 1,
    name: "Caesar Salad",
    decp: "Stylish salad which is served with a homemade Caesar dip.",
    price: "319",
    imageSrc: S1,
  },
  {
    id: 2,
    name: "Protein Bomb Salad",
    decp: "A portion of magic salad and paneer.",
    price: "240",
    imageSrc: S4,
  },
  {
    id: 3,
    name: "Quinoa Super Bowl",
    decp: "Quinoa with veggies and a dressing.",
    price: "260",
    imageSrc: S5,
  },
  {
    id: 4,
    name: "Cucumber Mint Detox",
    decp: "Refreshing cooler to beat the heat this summer.",
    price: "149",
    imageSrc: B2,
  },
];

export const foodItems = [
  {
    "id" : 1,
    'calories' :  "8",
    'category' : "salad",
    "imageURL" :  S1,
     "price" : "319",
    "qty" :  1,
    "title" :  "Caesar Salad",
    "desc":"Stylish salad which is served with a homemade Caesar dip."
  },
  {
   "id" : 2,
    'calories' :  "10",
    'category' : "salad",
    "imageURL" : S2,
     "price" : "260",
    "qty" :  1,
    "title" :  "Sprouts Bhel Salad",
    "desc":"Sprouts and veggies with two chutneys."
  },
  {
    "id" : 3,
     'calories' :  "12",
     'category' : "salad",
     "imageURL" :  S3,
     "price" : "240",
     "qty" :  1,
     "title" :  "Magic Salad Bowl",
    "desc":"Lettuce, bell peppers, sweet corn, cucumber, cherry tomato, cranberry, microgreens, and paneer with a dressing."
   },
   {
    "id" : 4,
     'calories' :  "14",
     'category' : "salad",
     "imageURL" :  S4,
     "price" : "240",
     "qty" :  1,
     "title" :  "Protein Bomb Salad",
	"desc":"A portion of magic salad and paneer also with sprouts served with a dressing."
   },
   {
    "id" : 5,
     'calories' :  "10",
     'category' : "salad",
     "imageURL" :  S5,
     "price" : "260",
     "qty" :  1,
     "title" :  "Quinoa Super Bowl",
	"desc":"Quinoa with veggies and a dressing."
   },
   {
    "id" : 6,
     'calories' :  "5",
     'category' : "fruits",
     "imageURL" :  F1,
     "price" : "210",
     "qty" :  1,
     "title" :  "Magic Fruit Bowl"
   },
   {
    "id" : 7,
     'calories' :  "4",
     'category' : "fruits",
     "imageURL" :  F2,
     "price" : "150",
     "qty" :  1,
     "title" :  "Watermelon Refreshing Salad"
   },
   {
    "id" : 8,
     'calories' :  "3",
     'category' : "beverages",
     "imageURL" :  B1,
     "price" : "25",
     "qty" :  1,
     "title" :  "Buttermilk",
	"desc":"200 ml tasty and delicious buttermilk from the kitchen of simply salad"
   },

  {
   "id" : 9,
    'calories' :  "4",
    'category' : "beverages",
    "imageURL" :  B2,
     "price" : "140",
    "qty" :  1,
    "title" :  "Cucumber Mint Detox",
	"desc":"Refreshing cooler to beat the heat this summer."
  },
  {
   "id" : 10,
    'calories' :  "4",
    'category' : "salad",
    "imageURL" :  S6,
     "price" : "260",
    "qty" :  1,
    "title" :  "Sauteed Vegetables With Mint Dip",
	"desc":"Exotic veggies sauteed and served with an authentic green chutney."
  },
];

export const categories = [
  {
    id: 1,
    name: "All",
    urlParamName: "*",
  },
  {
    id: 2,
    name: "Salad",
    urlParamName: "salad",
  },
  {
    id: 3,
    name: "Fruits",
    urlParamName: "fruits",
  },
  {
    id: 4,
    name: "Beverages",
    urlParamName: "beverages",
  },
  {
    id: 5,
    name: "Sandwitches",
    urlParamName: "sandwitches",
  },
  // {
  //   id: 5,
  //   name: "Fruits",
  //   urlParamName: "fruits",
  // },
  // {
  //   id: 6,
  //   name: "Icecreams",
  //   urlParamName: "icecreams",
  // },

  // {
  //   id: 7,
  //   name: "Soft Drinks",
  //   urlParamName: "drinks",
  // },
];
