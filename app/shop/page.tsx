"use client"

import { useState } from 'react'
import { Header } from '@/components/header'
import { ProductList } from './components/product-list'
import { ShoppingCart } from "./components/shopping-cart"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from 'lucide-react'

const products = [
  { id: 1, name: "Monstera Deliciosa", price: 29.99, image: "/placeholder.svg?height=200&width=200&text=Monstera" },
  { id: 2, name: "Snake Plant", price: 19.99, image: "/placeholder.svg?height=200&width=200&text=Snake+Plant" },
  { id: 3, name: "Fiddle Leaf Fig", price: 39.99, image: "/placeholder.svg?height=200&width=200&text=Fiddle+Leaf+Fig" },
  { id: 4, name: "Pothos", price: 14.99, image: "/placeholder.svg?height=200&width=200&text=Pothos" },
  { id: 5, name: "ZZ Plant", price: 24.99, image: "/placeholder.svg?height=200&width=200&text=ZZ+Plant" },
  { id: 6, name: "Peace Lily", price: 22.99, image: "/placeholder.svg?height=200&width=200&text=Peace+Lily" },
]

export default function ShopPage() {
  const [cart, setCart] = useState<Array<{ product: typeof products[0], quantity: number }>>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product: typeof products[0]) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { product, quantity: 1 }]
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-300 to-emerald-600 bg-clip-text text-transparent">
          SproutBotanica Shop
        </h1>
        <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-green-300 to-emerald-600 rounded-full" />
        <div className="flex justify-end mb-4">
          <Button
            onClick={() => setIsCartOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Button>
        </div>
        <ProductList products={products} addToCart={addToCart} />
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          isOpen={isCartOpen}
          setIsOpen={setIsCartOpen}
        />
      </main>
      <footer className="bg-green-600 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SproutBotanica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

