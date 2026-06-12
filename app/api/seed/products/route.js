import connectDB from "@/app/lib/db";
import Product from "@/app/lib/models/product";

export async function GET() {
    await connectDB();
    const products = await Product.find();
    return Response.json(products);
    
}