import bag1_img from './Components/images/Bags/bag1.jpg';
import bag2_img from './Components/images/Bags/bag2.jpg';
import bag3_img from './Components/images/Bags/bag3.jpg';
import bag4_img from './Components/images/Bags/bag4.jpg';
import bag5_img from './Components/images/Bags/bag5.jpg';
import bag6_img from './Components/images/Bags/bag6.jpg';
import bag7_img from './Components/images/Bags/bag7.jpg';
import bag8_img from './Components/images/Bags/bag8.jpg';
import bag9_img from './Components/images/Bags/bag9.jpg';

import jewellery1_img from './Components/images/Jewellery/jewellery1.jpg';
import jewellery2_img from './Components/images/Jewellery/jewellery2.jpg';
import jewellery3_img from './Components/images/Jewellery/jewellery3.jpg';
import jewellery4_img from './Components/images/Jewellery/jewellery4.jpg';
import jewellery5_img from './Components/images/Jewellery/jewellery5.jpg';
import jewellery6_img from './Components/images/Jewellery/jewellery6.jpg';
import jewellery7_img from './Components/images/Jewellery/jewellery7.jpg';
import jewellery8_img from './Components/images/Jewellery/jewellery8.jpg';
import jewellery9_img from './Components/images/Jewellery/jewellery9.jpg';

import fragrance1_img from './Components/images/Fragrance/fragrance1.jpg';
import fragrance2_img from './Components/images/Fragrance/fragrance2.jpg';
import fragrance3_img from './Components/images/Fragrance/fragrance3.jpg';
import fragrance4_img from './Components/images/Fragrance/fragrance4.jpg';
import fragrance5_img from './Components/images/Fragrance/fragrance5.jpg';
import fragrance6_img from './Components/images/Fragrance/fragrance6.jpg';
import fragrance7_img from './Components/images/Fragrance/fragrance7.jpg';
import fragrance8_img from './Components/images/Fragrance/fragrance8.jpg';
import fragrance9_img from './Components/images/Fragrance/fragrance9.png';

const dataProduct = {
    bag: [
        { id: "bag1", name: "Luxury Leather Tote", image: bag1_img, new_price: 150.00, old_price: 200.00, description: "Elegant leather tote bag." },
        { id: "bag2", name: "Canvas Backpack", image: bag2_img, new_price: 60.00, old_price: 80.00, description: "Durable canvas backpack." },
        { id: "bag3", name: "Crossbody Bag", image: bag3_img, new_price: 80.00, old_price: 110.00, description: "Stylish crossbody bag." },
        { id: "bag4", name: "Laptop Bag", image: bag4_img, new_price: 120.00, old_price: 160.00, description: "Professional laptop bag." },
        { id: "bag5", name: "Travel Duffel", image: bag5_img, new_price: 90.00, old_price: 130.00, description: "Spacious travel duffel bag." },
        { id: "bag6", name: "Clutch Bag", image: bag6_img, new_price: 70.00, old_price: 95.00, description: "Elegant clutch bag." },
        { id: "bag7", name: "Messenger Bag", image: bag7_img, new_price: 100.00, old_price: 140.00, description: "Classic messenger bag." },
        { id: "bag8", name: "Waist Bag", image: bag8_img, new_price: 50.00, old_price: 70.00, description: "Trendy waist bag." },
        { id: "bag9", name: "Beach Tote", image: bag9_img, new_price: 45.00, old_price: 65.00, description: "Large beach tote bag." },
    ],
    jewellery: [
        { id: "jewellery1", name: "Diamond Necklace", image: jewellery1_img, new_price: 500.00, old_price: 700.00, description: "Elegant diamond necklace." },
        { id: "jewellery2", name: "Gold Bracelet", image: jewellery2_img, new_price: 300.00, old_price: 450.00, description: "Classic gold bracelet." },
        { id: "jewellery3", name: "Silver Earrings", image: jewellery3_img, new_price: 150.00, old_price: 220.00, description: "Stylish silver earrings." },
        { id: "jewellery4", name: "Pearl Necklace", image: jewellery4_img, new_price: 250.00, old_price: 350.00, description: "Timeless pearl necklace." },
        { id: "jewellery5", name: "Gemstone Ring", image: jewellery5_img, new_price: 400.00, old_price: 550.00, description: "Beautiful gemstone ring." },
        { id: "jewellery6", name: "Anklet", image: jewellery6_img, new_price: 80.00, old_price: 120.00, description: "Delicate anklet." },
        { id: "jewellery7", name: "Brooch", image: jewellery7_img, new_price: 200.00, old_price: 280.00, description: "Elegant brooch." },
        { id: "jewellery8", name: "Charm Bracelet", image: jewellery8_img, new_price: 180.00, old_price: 250.00, description: "Personalized charm bracelet." },
        { id: "jewellery9", name: "Watch", image: jewellery9_img, new_price: 350.00, old_price: 500.00, description: "Luxury watch." },
    ],
    fragrance: [
        { id: "fragrance1", name: "Eau de Parfum", image: fragrance1_img, new_price: 90.00, old_price: 120.00, description: "Long-lasting eau de parfum." },
        { id: "fragrance2", name: "Eau de Toilette", image: fragrance2_img, new_price: 70.00, old_price: 95.00, description: "Light and fresh eau de toilette." },
        { id: "fragrance3", name: "Cologne", image: fragrance3_img, new_price: 60.00, old_price: 80.00, description: "Classic cologne." },
        { id: "fragrance4", name: "Perfume Oil", image: fragrance4_img, new_price: 100.00, old_price: 140.00, description: "Rich perfume oil." },
        { id: "fragrance5", name: "Body Mist", image: fragrance5_img, new_price: 30.00, old_price: 45.00, description: "Refreshing body mist." },
        { id: "fragrance6", name: "Scented Candle", image: fragrance6_img, new_price: 40.00, old_price: 60.00, description: "Aromatic scented candle." },
        { id: "fragrance7", name: "Room Spray", image: fragrance7_img, new_price: 35.00, old_price: 50.00, description: "Instant room spray." },
        { id: "fragrance8", name: "Diffuser", image: fragrance8_img, new_price: 55.00, old_price: 75.00, description: "Elegant diffuser." },
        { id: "fragrance9", name: "Perfume Set", image: fragrance9_img, new_price: 120.00, old_price: 160.00, description: "Complete perfume set." },
    ],
};

export default dataProduct;