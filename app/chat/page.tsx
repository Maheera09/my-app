import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Send } from 'lucide-react'

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Chat with PlantBot</h1>
        <p className="text-lg text-gray-600 mb-8">
          Get instant answers to your plant care questions. Our AI chatbot provides expert advice 24/7, helping you become a better gardener.
        </p>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Chat Window</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 h-64 rounded-md mb-4 p-4">
              <p className="text-gray-500">Chat messages will appear here...</p>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message here..."
                className="flex-grow border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button className="rounded-l-none">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Popular Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Watering schedules for different plant types</li>
              <li>Identifying and treating common plant diseases</li>
              <li>Tips for proper fertilization</li>
              <li>Indoor vs outdoor plant care</li>
              <li>Seasonal plant care advice</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-green-600 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SproutBotanica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

