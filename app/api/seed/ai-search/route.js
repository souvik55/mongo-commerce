import openai from "@/lib/openai";
import connectDB from "@/app/lib/db";
import Product from "@/app/lib/models/product";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
    const query = await Product.find();
    await connectDB(); 
    const products = await Product.find({
        title: { $regex: query, $options: "i" },
    });
    return Response.json(products);

    }