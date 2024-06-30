import React from "react";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vintage Football Shirts</h1>
        <nav>
          <a href="#" className="ml-4">Home</a>
          <a href="#" className="ml-4">Shop</a>
          <a href="#" className="ml-4">Contact</a>
        </nav>
      </div>
    </header>
  );
};