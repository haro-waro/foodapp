import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const categories = [
    { id: "cold-drinks", name: "Cold Drinks", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop" },
    { id: "hot-drinks", name: "Hot Drinks", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop" },
    { id: "bakery", name: "Bakery", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop" },
    { id: "donuts", name: "Donuts", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200&h=200&fit=crop" },
    { id: "sandwiches", name: "Sandwiches", img: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=200&h=200&fit=crop" },
    { id: "burgers", name: "Burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop" },
    { id: "fries", name: "Fries", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop" },
    { id: "crackers", name: "Crackers", img: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=200&h=200&fit=crop" },
    { id: "boxes", name: "Boxes", img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=200&h=200&fit=crop" },
  ];

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCategoryClick = (categoryId) => {
    navigate(`/menu/${categoryId}`);
  };

  return (
   <div
  className="min-h-screen bg-cover bg-center bg-fixed relative"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&h=1600&fit=crop')",
  }}
>
  {/* Overlay so content stays readable over the photo */}
  <div className="absolute inset-0 bg-white/60" />
  {/* ...rest of your content stays the same... */}

      <div className="relative">
        {/* Header */}
        <div className="bg-orange-500 pt-6 pb-8 px-4 text-center">
          <h1 className="text-white text-2xl font-extrabold tracking-wide">FOODAPP</h1>
        </div>

        {/* Branch / table info */}
        <div className="max-w-md mx-auto px-4 -mt-4">
          <div className="bg-white rounded-xl shadow-md px-4 py-3 flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Branch: <span className="text-orange-500 font-semibold">Downtown</span>
            </span>
            <span className="text-gray-600">
              Table: <span className="text-orange-500 font-semibold">2</span>
            </span>
          </div>

          {/* Search */}
          <div className="mt-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Products"
              className="w-full bg-white border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-orange-400"
            />
          </div>

          {/* Categories */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Categories</h2>

          <div className="grid grid-cols-3 gap-4 pb-10">
            {filtered.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="flex flex-col items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-xl p-1"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-gray-700 text-center">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;