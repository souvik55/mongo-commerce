import connectDB from "@/app/lib/db";

import product from "@/app/lib/models/product";

export async function GET() {
    await connectDB();
    const products = await product.find();
    await product.deleteMany();

    await product.insertMany([
        {
            title: "Blue Sneakers",
            description: "Comfortable and styish blue sneakers for every ocassion",
            price: 999,
            category: "Footwear",
            image: "https://picsum.photos/500/300"

        },
         {
    title: "Blue Sneakers",
    description: "Comfortable and stylish blue sneakers for every occasion",
    price: 999,
    category: "Footwear",
    image: "https://picsum.photos/seed/1/500/300"
  },
  {
    title: "Running Shoes",
    description: "Lightweight running shoes for daily workouts",
    price: 1499,
    category: "Footwear",
    image: "https://picsum.photos/seed/2/500/300"
  },
  {
    title: "Leather Wallet",
    description: "Premium leather wallet with multiple compartments",
    price: 799,
    category: "Accessories",
    image: "https://picsum.photos/seed/3/500/300"
  },
  {
    title: "Smart Watch",
    description: "Fitness tracking and smart notifications",
    price: 2999,
    category: "Electronics",
    image: "https://picsum.photos/seed/4/500/300"
  },
  {
    title: "Wireless Earbuds",
    description: "Crystal clear sound with deep bass",
    price: 1999,
    category: "Electronics",
    image: "https://picsum.photos/seed/5/500/300"
  },
  {
    title: "Gaming Mouse",
    description: "RGB gaming mouse with adjustable DPI",
    price: 1299,
    category: "Electronics",
    image: "https://picsum.photos/seed/6/500/300"
  },
  {
    title: "Mechanical Keyboard",
    description: "Mechanical keyboard with tactile switches",
    price: 2499,
    category: "Electronics",
    image: "https://picsum.photos/seed/7/500/300"
  },
  {
    title: "Laptop Backpack",
    description: "Water-resistant backpack for laptops",
    price: 1199,
    category: "Bags",
    image: "https://picsum.photos/seed/8/500/300"
  },
  {
    title: "Denim Jacket",
    description: "Classic blue denim jacket",
    price: 1799,
    category: "Clothing",
    image: "https://picsum.photos/seed/9/500/300"
  },
  {
    title: "Black T-Shirt",
    description: "Soft cotton black t-shirt",
    price: 499,
    category: "Clothing",
    image: "https://picsum.photos/seed/10/500/300"
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with powerful bass",
    price: 1599,
    category: "Electronics",
    image: "https://picsum.photos/seed/11/500/300"
  },
  {
    title: "Sunglasses",
    description: "Stylish UV protected sunglasses",
    price: 699,
    category: "Accessories",
    image: "https://picsum.photos/seed/12/500/300"
  },
  {
    title: "Travel Duffel Bag",
    description: "Large capacity travel bag",
    price: 1399,
    category: "Bags",
    image: "https://picsum.photos/seed/13/500/300"
  },
  {
    title: "Sports Cap",
    description: "Breathable sports cap",
    price: 399,
    category: "Accessories",
    image: "https://picsum.photos/seed/14/500/300"
  },
  {
    title: "Yoga Mat",
    description: "Comfortable anti-slip yoga mat",
    price: 899,
    category: "Fitness",
    image: "https://picsum.photos/seed/15/500/300"
  },
  {
    title: "Dumbbell Set",
    description: "Adjustable dumbbell set",
    price: 3499,
    category: "Fitness",
    image: "https://picsum.photos/seed/16/500/300"
  },
  {
    title: "Coffee Mug",
    description: "Elegant ceramic coffee mug",
    price: 299,
    category: "Home",
    image: "https://picsum.photos/seed/17/500/300"
  },
  {
    title: "Desk Lamp",
    description: "LED desk lamp with adjustable brightness",
    price: 999,
    category: "Home",
    image: "https://picsum.photos/seed/18/500/300"
  },
  {
    title: "Office Chair",
    description: "Ergonomic office chair",
    price: 4999,
    category: "Furniture",
    image: "https://picsum.photos/seed/19/500/300"
  },
  {
    title: "Study Table",
    description: "Wooden study table with storage",
    price: 5999,
    category: "Furniture",
    image: "https://picsum.photos/seed/20/500/300"
  },
  {
    title: "Power Bank",
    description: "10000mAh fast charging power bank",
    price: 1499,
    category: "Electronics",
    image: "https://picsum.photos/seed/21/500/300"
  },
  {
    title: "Phone Case",
    description: "Shockproof mobile cover",
    price: 399,
    category: "Accessories",
    image: "https://picsum.photos/seed/22/500/300"
  },
  {
    title: "Water Bottle",
    description: "Insulated stainless steel bottle",
    price: 599,
    category: "Home",
    image: "https://picsum.photos/seed/23/500/300"
  },
  {
    title: "Wireless Charger",
    description: "Fast wireless charging pad",
    price: 899,
    category: "Electronics",
    image: "https://picsum.photos/seed/24/500/300"
  },
  {
    title: "Bean Bag",
    description: "Comfortable bean bag chair",
    price: 2499,
    category: "Furniture",
    image: "https://picsum.photos/seed/25/500/300"
  },
  {
    title: "Formal Shirt",
    description: "Premium office wear shirt",
    price: 1299,
    category: "Clothing",
    image: "https://picsum.photos/seed/26/500/300"
  },
  {
    title: "Cargo Pants",
    description: "Comfortable cargo pants",
    price: 1499,
    category: "Clothing",
    image: "https://picsum.photos/seed/27/500/300"
  },
  {
    title: "Smartphone Stand",
    description: "Adjustable phone stand",
    price: 299,
    category: "Accessories",
    image: "https://picsum.photos/seed/28/500/300"
  },
  {
    title: "Fitness Band",
    description: "Track fitness and health stats",
    price: 1799,
    category: "Fitness",
    image: "https://picsum.photos/seed/29/500/300"
  },
  {
    title: "Cricket Bat",
    description: "Professional cricket bat",
    price: 2999,
    category: "Sports",
    image: "https://picsum.photos/seed/30/500/300"
  },
  {
    title: "Football",
    description: "Durable football for matches",
    price: 799,
    category: "Sports",
    image: "https://picsum.photos/seed/31/500/300"
  },
  {
    title: "Badminton Racket",
    description: "Lightweight badminton racket",
    price: 1299,
    category: "Sports",
    image: "https://picsum.photos/seed/32/500/300"
  },
  {
    title: "Action Camera",
    description: "Capture adventures in HD",
    price: 4999,
    category: "Electronics",
    image: "https://picsum.photos/seed/33/500/300"
  },
  {
    title: "Tripod Stand",
    description: "Portable photography tripod",
    price: 899,
    category: "Electronics",
    image: "https://picsum.photos/seed/34/500/300"
  },
  {
    title: "Perfume",
    description: "Long-lasting fragrance",
    price: 1499,
    category: "Beauty",
    image: "https://picsum.photos/seed/35/500/300"
  },
  {
    title: "Face Wash",
    description: "Gentle face cleanser",
    price: 249,
    category: "Beauty",
    image: "https://picsum.photos/seed/36/500/300"
  },
  {
    title: "Hair Dryer",
    description: "Quick drying hair dryer",
    price: 999,
    category: "Beauty",
    image: "https://picsum.photos/seed/37/500/300"
  },
  {
    title: "Electric Kettle",
    description: "Fast boiling electric kettle",
    price: 1199,
    category: "Home",
    image: "https://picsum.photos/seed/38/500/300"
  },
  {
    title: "Mixer Grinder",
    description: "Multi-purpose kitchen appliance",
    price: 2999,
    category: "Home",
    image: "https://picsum.photos/seed/39/500/300"
  },
  {
    title: "Air Fryer",
    description: "Healthy oil-free cooking",
    price: 4499,
    category: "Home",
    image: "https://picsum.photos/seed/40/500/300"
  },
  {
    title: "Bluetooth Headphones",
    description: "Immersive sound experience",
    price: 2499,
    category: "Electronics",
    image: "https://picsum.photos/seed/41/500/300"
  },
  {
    title: "Tablet",
    description: "Portable tablet for work and play",
    price: 14999,
    category: "Electronics",
    image: "https://picsum.photos/seed/42/500/300"
  },
  {
    title: "Monitor",
    description: "24-inch Full HD monitor",
    price: 8999,
    category: "Electronics",
    image: "https://picsum.photos/seed/43/500/300"
  },
  {
    title: "Gaming Chair",
    description: "Ergonomic gaming chair",
    price: 7999,
    category: "Furniture",
    image: "https://picsum.photos/seed/44/500/300"
  },
  {
    title: "Notebook Set",
    description: "Premium quality notebooks",
    price: 499,
    category: "Stationery",
    image: "https://picsum.photos/seed/45/500/300"
  },
  {
    title: "Ball Pen Pack",
    description: "Smooth writing pens",
    price: 199,
    category: "Stationery",
    image: "https://picsum.photos/seed/46/500/300"
  },
  {
    title: "Wall Clock",
    description: "Modern wall clock",
    price: 799,
    category: "Home",
    image: "https://picsum.photos/seed/47/500/300"
  },
  {
    title: "Indoor Plant",
    description: "Decorative indoor plant",
    price: 599,
    category: "Home",
    image: "https://picsum.photos/seed/48/500/300"
  },
  {
    title: "Cushion Cover",
    description: "Soft decorative cushion cover",
    price: 299,
    category: "Home",
    image: "https://picsum.photos/seed/49/500/300"
  },
  {
    title: "LED Strip Lights",
    description: "RGB LED lights for room decor",
    price: 899,
    category: "Home",
    image: "https://picsum.photos/seed/50/500/300"
  }

    ]);

    return Response.json({message: "Database seeded successfully"});
}
