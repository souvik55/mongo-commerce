"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredProducts = products.filter((product) => {
    const query = searchTerm.toLowerCase().trim();
    if (!query) return true;
    return (
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });

  useEffect(() => {
    fetch("/api/seed/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("error fetching products:", err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Product catalog</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              All Products
            </h1>
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
              onSubmit={(event) => {
                event.preventDefault();
                setSearchTerm(searchQuery);
              }}
            >
              <label htmlFor="product-search" className="sr-only">Search products</label>
              <input
                id="product-search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by title, category, or description"
                className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Search
              </button>
            </form>
          </div>
          <div className="rounded-3xl bg-slate-50 px-5 py-4 text-center sm:text-right">
            <p className="text-sm text-slate-500">Total items</p>
            <p className="mt-1 text-3xl font-semibold text-slate-900">{products.length}</p>
          </div>
        </div>

        {isLoading ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 shadow-sm">
            Loading products...
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-3xl border border-slate-300 bg-white p-10 text-center text-slate-500 shadow-sm">
            No products available.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product._id ?? product.title}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {product.category}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">{product.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-slate-900">₹{product.price}</span>
                    <span className="cursor-pointer rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                      View details
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
