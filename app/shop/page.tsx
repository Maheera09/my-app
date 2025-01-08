import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag } from 'lucide-react'

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6">SproutBotanica Shop</h1>
        <p className="text-lg text-gray-600 mb-8">
          Browse and purchase plants, tools, and accessories for your garden. We partner with trusted suppliers to bring you quality products.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {['Plants', 'Tools', 'Accessories'].map((category) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ShoppingBag className="w-12 h-12 text-green-600 mb-4" />
                <p>Explore our selection of high-quality {category.toLowerCase()}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="bg-green-600 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SproutBotanica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

