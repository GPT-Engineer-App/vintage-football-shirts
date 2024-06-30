import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const products = [
  {
    id: 1,
    name: "Vintage Manchester United Shirt",
    price: "$120",
    image: "/images/manchester-united-shirt.jpg",
  },
  {
    id: 2,
    name: "Vintage Real Madrid Shirt",
    price: "$130",
    image: "/images/real-madrid-shirt.jpg",
  },
  {
    id: 3,
    name: "Vintage AC Milan Shirt",
    price: "$110",
    image: "/images/ac-milan-shirt.jpg",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Vintage Football Shirts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <p className="text-lg font-semibold">{product.price}</p>
                <Button className="mt-4 w-full">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;