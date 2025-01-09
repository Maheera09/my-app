"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { motion } from "framer-motion"


export default function PlantIdPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the search logic
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-300 to-emerald-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Plant Identification
        </motion.h1>
        <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-green-300 to-emerald-600 rounded-full" />
        <motion.p 
          className="text-base text-gray-600 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Identify any plant species by simply uploading a photo or taking a picture. Our AI-powered system provides accurate results within seconds.
        </motion.p>
        
        <motion.form 
          onSubmit={handleSearch}
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Input
            type="text"
            placeholder="Search for a plant..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md mr-2"
          />
          <Button type="submit">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </motion.form>

      </main>
      <footer className="bg-green-600 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SproutBotanica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

