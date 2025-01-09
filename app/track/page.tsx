"use client"

import { Header } from "@/components/header"
import { PlantCard } from "@/components/plant-card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import Link from 'next/link'

// Sample plant data (in a real app, this would come from a database or API)
const plants = [
  { id: 1, name: "Monstera Deliciosa", imageUrl: "/placeholder.svg?height=200&width=200&text=Monstera" },
  { id: 2, name: "Snake Plant", imageUrl: "/placeholder.svg?height=200&width=200&text=Snake+Plant" },
  { id: 3, name: "Fiddle Leaf Fig", imageUrl: "/placeholder.svg?height=200&width=200&text=Fiddle+Leaf+Fig" },
]

export default function TrackPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Track Your Plants
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/track/add">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Add new plant
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="w-32 h-1 mb-8 bg-gradient-to-r from-green-300 to-emerald-600 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {plants.map((plant) => (
            <PlantCard key={plant.id} id={plant.id} name={plant.name} imageUrl={plant.imageUrl} />
          ))}
        </motion.div>
      </main>
      <footer className="bg-green-600 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SproutBotanica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

