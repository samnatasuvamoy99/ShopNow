import React from 'react';
import { Products } from '../Components/Products';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page heading */}
      <header className="text-center py-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome to Our Store ShopNow</h2>
        <p className="text-gray-600 mt-2 text-lg">Discover our latest products at the best prices</p>
      </header>

      {/* Products section */}
      <section className="px-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Products</h3>
        <Products />
      </section>
    </div>
  );
};
