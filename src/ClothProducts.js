import men1_img from './Components/images/Mens/men1.jpg';
import men2_img from './Components/images/Mens/men2.jpg';
import men3_img from './Components/images/Mens/men3.jpg';
import men4_img from './Components/images/Mens/men4.jpg';
import men5_img from './Components/images/Mens/men5.jpg';
import men6_img from './Components/images/Mens/men6.jpg';
import men7_img from './Components/images/Mens/men7.jpg';
import men8_img from './Components/images/Mens/men8.jpg';
import men9_img from './Components/images/Mens/men9.jpg';

import women1_img from './Components/images/Womens/women1.jpg';
import women2_img from './Components/images/Womens/women2.jpg';
import women3_img from './Components/images/Womens/women3.jpg';
import women4_img from './Components/images/Womens/women4.jpg';
import women5_img from './Components/images/Womens/women5.jpg';
import women6_img from './Components/images/Womens/women6.jpg';
import women7_img from './Components/images/Womens/women7.jpg';
import women8_img from './Components/images/Womens/women8.jpg';
import women9_img from './Components/images/Womens/women9.jpg';

import kid1_img from './Components/images/Kids/kid1.jpg';
import kid2_img from './Components/images/Kids/kid2.jpg';
import kid3_img from './Components/images/Kids/kid3.jpg';
import kid4_img from './Components/images/Kids/kid4.jpg';
import kid5_img from './Components/images/Kids/kid5.jpg';
import kid6_img from './Components/images/Kids/kid6.png';
import kid7_img from './Components/images/Kids/kid7.jpg';
import kid8_img from './Components/images/Kids/kid8.jpg';
import kid9_img from './Components/images/Kids/kid9.jpg';

const clothdata = {
    mens: [
        { id: "men1", name: "Men's Casual Shirt", image: men1_img, new_price: 45.00, old_price: 60.00, description: "A comfortable casual shirt.", colors: ["Blue", "White", "Gray"] },
        { id: "men2", name: "Men's Denim Jeans", image: men2_img, new_price: 60.00, old_price: 80.00, description: "Classic denim jeans.", colors: ["Blue", "Black", "Gray"] },
        { id: "men3", name: "Men's Polo Shirt", image: men3_img, new_price: 35.00, old_price: 50.00, description: "A stylish polo shirt.", colors: ["Red", "Navy", "Green"] },
        { id: "men4", name: "Men's Formal Shirt", image: men4_img, new_price: 55.00, old_price: 75.00, description: "A smart formal shirt.", colors: ["White", "Light Blue", "Pink"] },
        { id: "men5", name: "Men's T-Shirt", image: men5_img, new_price: 30.00, old_price: 40.00, description: "A basic men's t-shirt.", colors: ["Black", "White", "Gray", "Navy"] },
        { id: "men6", name: "Men's Shorts", image: men6_img, new_price: 40.00, old_price: 55.00, description: "Comfortable men's shorts.", colors: ["Beige", "Green", "Navy"] },
        { id: "men7", name: "Men's Jacket", image: men7_img, new_price: 80.00, old_price: 100.00, description: "A stylish men's jacket.", colors: ["Black", "Brown", "Gray"] },
        { id: "men8", name: "Men's Sweater", image: men8_img, new_price: 65.00, old_price: 85.00, description: "A warm men's sweater.", colors: ["Navy", "Gray", "Burgundy"] },
        { id: "men9", name: "Men's Pants", image: men9_img, new_price: 50.00, old_price: 70.00, description: "Classic men's pants.", colors: ["Black", "Gray", "Navy"] },
    ],
    womens: [
        { id: "women1", name: "Women's Summer Dress", image: women1_img, new_price: 50.00, old_price: 70.00, description: "A light summer dress.", colors: ["Yellow", "Pink", "Floral"] },
        { id: "women2", name: "Women's Blouse", image: women2_img, new_price: 40.00, old_price: 55.00, description: "A fashionable blouse.", colors: ["White", "Navy", "Pastel Blue"] },
        { id: "women3", name: "Women's Skirt", image: women3_img, new_price: 45.00, old_price: 60.00, description: "A stylish women's skirt.", colors: ["Black", "Red", "Floral"] },
        { id: "women4", name: "Women's Jeans", image: women4_img, new_price: 60.00, old_price: 80.00, description: "Classic women's jeans.", colors: ["Blue", "Black", "Gray"] },
        { id: "women5", name: "Women's Top", image: women5_img, new_price: 35.00, old_price: 50.00, description: "A versatile women's top.", colors: ["White", "Black", "Pink", "Gray"] },
        { id: "women6", name: "Women's Leggings", image: women6_img, new_price: 30.00, old_price: 45.00, description: "Comfortable women's leggings.", colors: ["Black", "Navy", "Dark Gray"] },
        { id: "women7", name: "Women's Jacket", image: women7_img, new_price: 85.00, old_price: 110.00, description: "A stylish women's jacket.", colors: ["Black", "Beige", "Brown"] },
        { id: "women8", name: "Women's Sweater", image: women8_img, new_price: 70.00, old_price: 90.00, description: "A cozy women's sweater.", colors: ["Cream", "Gray", "Navy"] },
        { id: "women9", name: "Women's Pants", image: women9_img, new_price: 55.00, old_price: 75.00, description: "Elegant women's pants.", colors: ["Black", "Navy", "Gray"] },
    ],
    kids: [
        { id: "kid1", name: "Kids' Graphic Tee", image: kid1_img, new_price: 25.00, old_price: 35.00, description: "A fun graphic tee.", colors: ["Blue", "Red", "Yellow"] },
        { id: "kid2", name: "Kids' Shorts", image: kid2_img, new_price: 30.00, old_price: 40.00, description: "Comfortable kids' shorts.", colors: ["Green", "Blue", "Orange"] },
        { id: "kid3", name: "Kids' Dress", image: kid3_img, new_price: 40.00, old_price: 55.00, description: "A cute kids' dress.", colors: ["Pink", "Purple", "Floral"] },
        { id: "kid4", name: "Kids' Jeans", image: kid4_img, new_price: 45.00, old_price: 60.00, description: "Durable kids' jeans.", colors: ["Blue", "Black", "Gray"] },
        { id: "kid5", name: "Kids' Shirt", image: kid5_img, new_price: 28.00, old_price: 38.00, description: "A classic kids' shirt.", colors: ["White", "Light Blue", "Red"] },
        { id: "kid6", name: "Kids' Pajamas", image: kid6_img, new_price: 35.00, old_price: 50.00, description: "Cozy kids' pajamas.", colors: ["Pink", "Blue", "Patterned"] },
        { id: "kid7", name: "Kids' Jacket", image: kid7_img, new_price: 60.00, old_price: 80.00, description: "A warm kids' jacket.", colors: ["Navy", "Red", "Black"] },
        { id: "kid8", name: "Kids' Sweater", image: kid8_img, new_price: 50.00, old_price: 70.00, description: "A soft kids' sweater.", colors: ["Gray", "Blue", "Beige"] },
        { id: "kid9", name: "Kids' Pants", image: kid9_img, new_price: 38.00, old_price: 52.00, description: "Versatile kids' pants.", colors: ["Black", "Navy", "Brown"] },
    ],
};

export default clothdata;