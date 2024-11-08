import { Injectable } from '@angular/core';
import { ProductDetails } from '../models/product-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: ProductDetails[] = [
    {
      name: 'BK Chicken Burger',
      price: 99,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/232c7e1b2b74dfc2851556a255e148a2',
      restaurant: 'Burger King',
      description: 'BK Chicken Patty, Lettuce, Tomato(Seasonal) & Our Signature Mayo Sauce.'
    },
    {
      name: 'Medium Peri Peri Fries',
      price: 89,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/3408bb90-e96a-42e3-abe2-0381dd1230d1_08dadded-e4ce-4be6-8ff9-0935033d8887.jpg',
      restaurant: 'Burger King',
      description: 'Crispy Fries With Tangy Peri Peri Spice'
    },
    {
      name: 'Saucy Fries',
      price: 119,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/bs5oedbj1ihduwvbuj8z',
      restaurant: 'Burger King',
      description: 'Crispy French Fries, Loads of Cheese, Yum!'
    },
    {
      name: 'Chicken Whopper Jr Double Patty',
      price: 139,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/20daf947-13d0-46ef-a84b-aab684a3f51d_1c893ec1-e78f-4e81-8e38-a0944eea9d61.jpg',
      restaurant: 'Burger King',
      description: 'Our signature non-veg whopper in a smaller size + Crispy non-veg patty burger'
    },
    {
      name: 'Veg Whopper',
      price: 129,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f',
      restaurant: 'Burger King',
      description: 'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 '
    },
    {
      name: 'Hut Treat Meal for 2 - Non Veg',
      price: 589,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fc115b57-9536-4c2d-8876-bcedf630ea7b_b7818aa0-4ccb-4cfa-acb5-df7a9cace4e5.png_compressed',
      restaurant: 'Pizza Hut',
      description: 'Serves 2 | 1 medium non-veg pizza upto signature, 1 classic bread stix, 1 Pepsi PET. For Meals, refer to the nutritional data for individual products.'
    },
    {
      name: 'Americano White Sauce Pasta Non-veg',
      price: 212,
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/c1rg3zowkcfjjnkazmmc",
      restaurant: 'Pizza Hut',
      description: 'A blend of American Flavours in your Favorite Pasta Onion, capsicum, sweet corn, mushrooms, olives, cheese and smoked chicken. [Fat-10.6 per 100 g, Protein-12.4 per 100 g, Carbohydrate-32.4 per 100 g, Sugar-3.6 per 100 g, Calories-274.6 k.cal]Nutritional information per 100g'
    },
    {
      name: 'Chicken Pepperoni',
      price: 379,
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gdz44c9hirco09bdafoq",
      restaurant: 'Pizza Hut',
      description: 'Serves 1 | Yummy chicken pepperoni & 100% mozzarella cheese with signature pan sauce. Its a classic! (PAN Per/Med-301 Kcal/100g | TnC-311 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.'
    },
    {
      name: 'Triple Chicken Feast',
      price: 409,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/quxirmjttzksp7xlhysc',
      restaurant: 'Pizza Hut',
      description: 'Serves 1 | Spicy schezwan chicken meatball, flavourful herbed chicken, juicy chicken sausage, green capsicum & onion, spicy red paprika with classic pan sauce and 100% mozzarella cheese (PAN Per/Med-262 Kcal/100g | TnC-277 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.'
    },
    {
      name: 'Margherita Pizza',
      price: 169,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dpventcrozvfni0lqb10',
      restaurant: 'Pizza Hut',
      description: 'Serves 1 | Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (292 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.'
    },
    {
      name: 'Spiced Paneer',
      price: 259,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/a89yqx09ppwlecyqterp',
      restaurant: 'Pizza Hut',
      description: 'Serves 1 | Spiced paneer, crunchy onion, juicy tomato & 100% mozzarella cheese, with our classic pan sauce (PAN Per/Med-276 Kcal/100g | TnC-283 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.'
    },
    {
      name: 'Chicken Mini Biryani',
      price: 180,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/248a291b2827ee4852833ad1955b9716',
      restaurant: 'New Paradise',
      description: 'Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. (halal)'
    },
    {
      name: 'Fish Biryani',
      price: 280,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/7/284e9a20-cfa0-4325-bea6-f53037de66f2_b0049e11-d2f2-46b4-bbc8-fa22ead4e6a7.png_compressed',
      restaurant: 'New Paradise',
      description: 'Fish biryani is a layered rice dish made with fish, basmati rice, spices & herbs.'
    },
    {
      name: 'Fried Chicken Shawarma',
      price: 179,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/8b03f672cb18adeadaef6a7e7a410bff',
      restaurant: 'New Paradise',
      description: '[halal] fried chicken and lettuce and signature mayo, served with rumali.'
    },
    {
      name: 'Barbeque Shawarma',
      price: 199,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/e4a1333e992d8834c2b2fa503579871a',
      restaurant: 'New Paradise',
      description: '[halal] grilled breast boneless chicken and lettuce, tomato, cabbage, red cabbage, bell peppers and signature mayo, served with rumali.'
    },
    {
      name: 'Veg Hakka Noodles',
      price: 230,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/9/1b148537-d85b-4f41-945a-b5e8fd73c18d_d4f36322-1b95-4d6d-b8bb-a7c6ef960f42.jpeg',
      restaurant: 'New Paradise',
      description: 'Brilliant veg hakka noodles with a spicy sauce, served with crispy onions, fresh cilantro, and a hint of sweetness.'
    },
    {
      name: 'Curd Rice',
      price: 120,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/89f8a8f6b47f1268f45e7f647ce3fe15',
      restaurant: 'New Paradise',
      description: 'Cool down your palate with our Curd Rice. Steamed rice is delicately mixed with creamy curd, tempered with mustard seeds, curry leaves, and a hint of green chillies. Order now for a refreshing and soothing serving of this South Indian classic.'
    },
    {
      name: 'Chicken Noodles',
      price: 200,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/7ab1285fd72c8ffbf09d496d285e7336',
      restaurant: 'New Paradise',
      description: 'Chicken noodles are a delicious flavor packed meal of stir fried noodles, chicken, vegetables and sauces. Made in Chinese Hakka Style! (halal)'
    },
    {
      name: 'Schezwan Chicken Noodles',
      price: 189,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2a3cf00bf0611e977746e97e13cbcd51',
      restaurant: 'Street Wok Chinese',
      description: 'Schezwan is a south east asian twist as streem chicken and vegetables is smothered in home made schezwan sauce.(serves 1)'
    },
    {
      name: 'Chicken Manchurian',
      price: 189,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/9c68b807fd5f43c4d6eb074167624a53',
      restaurant: 'Street Wok Chinese',
      description: 'A delectable non-veg delight bursting with rich flavors, perfect to satisfy your craving for delicious manchuria cuisine.'
    },
    {
      name: 'Chicken 65',
      price: 189,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/0c5d0614d4bb3e3dbc8f7baf3692a0cc',
      restaurant: 'Street Wok Chinese',
      description: 'Marinated chicken deep fried and then cooked in yogurt sauce and infused with flavors of curry leaves and green chilly'
    },
    {
      name: 'Crispy Corn',
      price: 189,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/9e3c616bf0aa72e103fc31d2906788d7',
      restaurant: 'Street Wok Chinese',
      description: 'A delectable Chinese delight with a satisfyingly crispy texture, perfect for veggie lovers.'
    },
    {
      name: 'Paneer Fried Rice',
      price: 189,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/c0958f269b828689913cd4e8da0f5023',
      restaurant: 'Street Wok Chinese',
      description: 'Fried rice made with paneer & vegetables. Served with hot garlic sauce. Serves one person.'
    },
    {
      name: 'Masala Dosa',
      price: 90,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/9f698ed398dad9be797501d96270ee8c',
      restaurant: 'New Chotus Tiffins',
      description: '"Delight in our iconic masala dosa, featuring a thin, crispy crepe filled with a seasoned potato stuffing, served with peanut chutney and tangy sambar."'
    },
    {
      name: 'Plain idli',
      price: 60,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/qd8gidu51zf5ecfjddzz',
      restaurant: 'New Chotus Tiffins',
      description: '"Treat yourself to our soft and fluffy idlis, steamed to perfection, served with peanut chutney and a flavorsome lentil-based sambar."'
    },
    {
      name: 'Plain ghee dosa',
      price: 80,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/vnrorbbcmtlyefcciy7w',
      restaurant: 'New Chotus Tiffins',
      description: '"Experience the aromatic goodness of our ghee dosa, where clarified butter lends a rich flavor to our classic South Indian dosa, perfect for a comforting start to your day."'
    },
    {
      name: 'Butter Karam Idly',
      price: 100,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/928936d78222d238d1ecec200b4552e1',
      restaurant: 'New Chotus Tiffins',
      description: 'Hot Idli Loaded With Ghee And Karampodi Masala.'
    },
    {
      name: 'Bread Omelette',
      price: 99,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/28/a52c1e20-5396-4acb-a34e-c1d9abdf1933_7f3a1564-389c-4c01-bce2-23f6a449a37b.jpg',
      restaurant: 'New Chotus Tiffins',
      description: 'Freshly made bread omelettes are a delicious and healthy alternative to the traditional omelette. Served with a side of freshly baked bread.'
    },
    {
      name: 'Ferrero Rocher Ice Cream',
      price: 250,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/26/c40c72c6-f906-40ea-92ee-a8db56b1b994_a1f91393-4b86-499c-9646-f5b6f25b7665.jpeg',
      restaurant: 'Cream Stone',
      description: '| Serves 1, 2 Scoops | Delectable Chocolate ice cream mixed with Ferrero Rocher and Chocolate Fudge.'
    },
    {
      name: 'Nutty Death By Chocolate',
      price: 220,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/26/4a9d91b6-e545-4e12-a4ea-102bf7908456_4621f4bb-a14f-44a8-b040-6cff0bcdeadd.jpeg',
      restaurant: 'Cream Stone',
      description: '| Serves 1, 2 Scoops | Delicious Chocolate pastry topped with Vanilla & Chocolate Ice cream , loaded with Chocolate fudge and Sprinkled with Roasted Cashews | Contains Brownie with ice cream.'
    },
    {
      name: 'Fruit Exotica',
      price: 195,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/26/3515e392-b6b2-4b87-bfbf-e75573876f7f_f394501f-0138-4c62-b8f6-0683ea9c6627.jpeg',
      restaurant: 'Cream Stone',
      description: '| Serves 1, 2 Scoops | Classic combination of vanilla,Strawberry and Black Grape ice cream mixed with Juicy Apple, Pineapple, litchee and kiwi fruits'
    },
    {
      name: 'Nutella Fudge Cake',
      price: 190,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/26/d2cc5e05-a23f-4f05-8ef9-77fe76d9917c_8938bf30-c939-4c6c-a5e2-3276b0e00d4f.jpeg',
      restaurant: 'Cream Stone',
      description: 'A very chocolatey and moist Chocolate Nutella Fudge Cake. Made with both melted chocolate and cocoa and topped with Nutella and chocolate ganache, this one is sure to satisfying your chocolate cravings!'
    },
    {
      name: 'Choco Caramel Cassata',
      price: 149,
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/16/7bf9969a-4416-4606-9e01-c4f2a45da09a_6365e0f4-af9a-4b3b-bbe4-97b7fb5b9fc1.jpeg',
      restaurant: 'Cream Stone',
      description: 'A classic combination of caramel and chocolate ice cream with layer of cake in a retro look'
    },
  ]
  constructor() { }

  getProductList(): ProductDetails[] {
    return this.products;
  }

  getProductByRestaurant(restaurant: string): ProductDetails[] {
    return this.products.filter(product => product.restaurant === restaurant);
  }

  searchProductsByName(name: string): ProductDetails[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase()) || product.description.toLowerCase().includes(name.toLowerCase())
    );
  }
}
