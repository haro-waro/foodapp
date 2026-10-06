
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const sampleOrders = [
  { id: "ORD-1042", date: "Sep 25, 2026", items: "Classic Cheeseburger, Fries", total: 15.5, status: "Delivered" },
  { id: "ORD-1039", date: "Sep 22, 2026", items: "Iced Latte, Blueberry Scone", total: 8.15, status: "Delivered" },
  { id: "ORD-1031", date: "Sep 18, 2026", items: "Chicken Sandwich, Cola", total: 9.6, status: "Delivered" },
];

function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive
        ? "bg-orange-500 text-white shadow-sm"
        : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
    }`;

  // Close dropdown when clicking outside it
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav aria-label="Main navigation" className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Brand + profile */}
        <div className="flex items-center gap-2 relative" ref={dropdownRef}>
          <NavLink
            to="/"
            aria-label="FoodApp home"
            className="text-xl font-extrabold text-orange-600 tracking-tight"
          >
            FoodApp
          </NavLink>

          <button
            onClick={() => setProfileOpen((prev) => !prev)}
            aria-label="View profile and order history"
            aria-expanded={profileOpen}
            className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          {/* Dropdown panel */}
          {profileOpen && (
            <div className="absolute top-12 left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2">
              {/* User summary */}
              <div className="bg-orange-500 px-5 py-4 text-white">
                <p className="font-semibold">Welcome back 👋</p>
                <p className="text-orange-100 text-sm">nawfazim@icloud.com</p>
              </div>

              {/* Quick actions */}
              <div className="flex divide-x divide-gray-100 border-b border-gray-100">
                <NavLink
                  to="/profile"
                  className="flex-1 flex flex-col items-center gap-1 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  My Account
                </NavLink>
                <NavLink
                  to="/favorites"
                  className="flex-1 flex flex-col items-center gap-1 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Favorites
                </NavLink>
                <NavLink
                  to="/settings"
                  className="flex-1 flex flex-col items-center gap-1 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </NavLink>
              </div>

              {/* Order history */}
              <div className="px-5 py-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-800">Recent Orders</h3>
                  <NavLink to="/orders" className="text-xs text-orange-500 font-medium hover:underline">
                    View all
                  </NavLink>
                </div>

                <div className="space-y-3 max-h-56 overflow-y-auto">
                  {sampleOrders.map((order) => (
                    <div key={order.id} className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{order.items}</p>
                        <p className="text-xs text-gray-400">{order.date} · {order.id}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-semibold text-orange-500">${order.total.toFixed(2)}</p>
                        <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Logout */}
              <button className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-red-500 hover:bg-red-50 border-t border-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Log Out
              </button>
            </div>
          )}
        </div>

        {/* Nav links with icons */}
        <ul className="flex items-center gap-1 bg-gray-50 rounded-full p-1">
          <li>
            <NavLink to="/" end className={linkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="hidden sm:inline">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={linkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              <span className="hidden sm:inline">Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={linkClass} aria-label="View cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m-10 0a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;