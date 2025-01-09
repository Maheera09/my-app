"use client"

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Header } from '@/components/header'

// Sample plant data (in a real app, this would come from a database or API)
const plants = [
  { id: 1, name: "Monstera Deliciosa", imageUrl: "/placeholder.svg?height=400&width=400&text=Monstera", description: "The Monstera deliciosa is a species of evergreen tropical vine known for its large, glossy, perforated leaves." },
  { id: 2, name: "Snake Plant", imageUrl: "/placeholder.svg?height=400&width=400&text=Snake+Plant", description: "The snake plant, also known as mother-in-law's tongue, is a hardy succulent that can grow anywhere from 6 inches to several feet tall." },
  { id: 3, name: "Fiddle Leaf Fig", imageUrl: "/placeholder.svg?height=400&width=400&text=Fiddle+Leaf+Fig", description: "The fiddle leaf fig is a species of flowering plant in the mulberry and fig family Moraceae. It is native to western Africa, from Cameroon west to Sierra Leone." },
]

export default function PlantDetailPage() {
  const params = useParams()
  const [plant, setPlant] = useState<(typeof plants)[0] | null>(null)

  useEffect(() => {
    const plantId = Number(params.id)
    const foundPlant = plants.find(p => p.id === plantId)
    setPlant(foundPlant || null)
  }, [params.id])

  if (!plant) {
    return <div>Plant not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="relative h-96 w-full">
              <Image
                src={plant.imageUrl}
                alt={plant.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-300 to-emerald-600 bg-clip-text text-transparent">
              {plant.name}
            </h1>
            <p className="text-gray-700 text-lg mb-4">{plant.description}</p>
            <div className="bg-green-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-green-800">User Notes</h2>
              <p className="text-gray-700">
                Add your personal notes about this plant here. Track its growth, care routine, or any special requirements.
              </p>
            </div>
          </div>
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

