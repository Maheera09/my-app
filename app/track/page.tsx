import { Header } from "../components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, Calendar, Droplet } from 'lucide-react'

export default function TrackPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Track Your Plants</h1>
        <p className="text-lg text-gray-600 mb-8">
          Monitor your plants' growth, set care reminders, and log watering and fertilizing schedules.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Growth Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart2 className="w-12 h-12 text-green-600 mb-4" />
              <p>Record and visualize your plants' growth over time.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Care Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar className="w-12 h-12 text-blue-600 mb-4" />
              <p>Set reminders for watering, fertilizing, and other care tasks.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Watering Log</CardTitle>
            </CardHeader>
            <CardContent>
              <Droplet className="w-12 h-12 text-blue-400 mb-4" />
              <p>Keep a detailed log of your watering and fertilizing activities.</p>
            </CardContent>
          </Card>
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

