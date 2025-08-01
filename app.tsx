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
