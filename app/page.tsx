import { Header } from "@/components/header"
import { ImageSlider } from "@/components/image-slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, AlertTriangle, ShoppingBag, BarChart2, MessageSquare } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col">
        <ImageSlider />
        <section className="bg-white py-16 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-green-700 mb-4">SproutBotanica</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Your personal plant care companion. Identify plants, detect diseases, track growth, and chat with our AI bot for expert advice.
            </p>
            <hr className="w-32 mx-auto border-t-2 border-green-500 mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              SproutBotanica combines cutting-edge technology with a passion for plants. Whether you're a seasoned gardener or just starting your green journey, our app provides the tools and knowledge you need to help your plants thrive.
            </p>
          </div>
        </section>
        <section className="bg-gray-100 py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-green-700 mb-12 text-center">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Leaf, title: "Plant Identification", description: "Instantly identify any plant species by simply taking a photo. Our AI-powered system provides accurate results within seconds.", color: "text-green-600" },
                { icon: AlertTriangle, title: "Disease Detection", description: "Detect plant diseases early. Upload a photo of your plant, and our system will diagnose potential issues and suggest treatments.", color: "text-yellow-600" },
                { icon: ShoppingBag, title: "E-commerce", description: "Shop for plants, tools, and accessories directly through our app. We partner with trusted suppliers to bring you quality products.", color: "text-blue-600" },
                { icon: BarChart2, title: "Growth Tracking", description: "Monitor your plants' growth over time. Set care reminders, log watering and fertilizing, and watch your garden flourish.", color: "text-purple-600" },
                { icon: MessageSquare, title: "Chat with BOT", description: "Get instant answers to your plant care questions. Our AI chatbot provides expert advice 24/7, helping you become a better gardener.", color: "text-indigo-600" },
              ].map((feature, index) => (
                <Card key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="bg-gradient-to-br from-green-50 to-green-100">
                    <feature.icon className={`w-12 h-12 ${feature.color} mb-2`} />
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <div className="bg-white bg-[url('/placeholder.svg?height=200&width=200')] bg-opacity-10 border-2 border-green-600 rounded-xl p-10 max-w-4xl mx-auto shadow-xl transform hover:scale-105 transition-all duration-300 mt-16">
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white py-3 px-6 rounded-lg -mt-14 mb-6 shadow-lg inline-block">
            <h3 className="text-xl font-bold">Start Your Green Journey</h3>
          </div>
          <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto">
            Unlock all features and nurture your plants like never before! Join our community of plant enthusiasts today.
          </p>
          <div className="flex justify-center space-x-6">
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-base shadow-md hover:shadow-lg">
              Sign Up
            </Button>
            <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-base shadow-md hover:shadow-lg">
              Login
            </Button>
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

