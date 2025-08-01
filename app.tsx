import { Switch, Route } from "wouter";
import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Checkout from "@/pages/Checkout";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router({ searchQuery }: { searchQuery: string }) {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products">
        <Products searchQuery={searchQuery} />
      </Route>
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="min-h-screen bg-white">
              <Header onSearch={handleSearch} />
              <CartDrawer />
              <Router searchQuery={searchQuery} />
              
              {/* Footer */}
              <footer className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <div className="flex items-center space-x-2 mb-6">
                        <span className="text-[--beauty-primary] text-2xl">✨</span>
                        <h3 className="font-playfair text-2xl font-bold">BeautyBloom</h3>
                      </div>
                      <p className="text-gray-400 mb-4">
                        Your trusted partner in beauty and self-care. Discover premium cosmetics that enhance your natural glow.
                      </p>
                      <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[--beauty-primary] transition-colors">
                          <span>f</span>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[--beauty-primary] transition-colors">
                          <span>📷</span>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[--beauty-primary] transition-colors">
                          <span>🐦</span>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-6">Quick Links</h4>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-6">Categories</h4>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Skincare</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Makeup</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fragrance</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hair Care</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-6">Customer Service</h4>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support Center</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Your Order</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-800 pt-8 mt-8 text-center">
                    <p className="text-gray-400">&copy; 2024 BeautyBloom. All rights reserved. | Privacy Policy | Terms of Service</p>
                  </div>
                </div>
              </footer>
            </div>
            <Toaster />
          </WishlistProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
