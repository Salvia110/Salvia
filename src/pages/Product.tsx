import { useState } from "react";
import { categories, products } from "../data";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState("BUCKET & TROLLEY");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
        <span className="text-lg font-bold">Categories</span>
        <button
          className="bg-[var(--secondary-color)] px-3 py-1 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Select"}
        </button>
      </div>

      <div className="flex flex-1 flex-col md:flex-row bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`${
            menuOpen ? "block" : "hidden"
          } md:block w-full md:w-80 bg-gray-800 text-white p-6 space-y-4 overflow-y-auto`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setMenuOpen(false); // close on mobile after selection
              }}
              className={`block w-full text-left py-2 px-4 rounded ${
                selectedCategory === cat
                  ? "bg-[var(--secondary-color)]"
                  : "hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </aside>

        {/* Product Display */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Selected Category Label for Mobile */}
          <div className="md:hidden text-center text-lg font-semibold text-gray-700 mb-4">
            Showing:{" "}
            <span className="text-[var(--secondary-color)]">
              {selectedCategory}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded shadow p-4 text-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto h-40 object-contain"
                />
                <h2 className="mt-4 font-bold">{product.title}</h2>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
