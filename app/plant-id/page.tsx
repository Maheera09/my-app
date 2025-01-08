import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Camera } from 'lucide-react'

export default function PlantIdPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Plant Identification</h1>
        <p className="text-lg text-gray-600 mb-8">
          Identify any plant species by simply uploading a photo or taking a picture. Our AI-powered system provides accurate results within seconds.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Upload an Image</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Select a clear image of the plant you want to identify.</p>
              <Button className="w-full">
                <Upload className="mr-2 h-4 w-4" /> Upload Image
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Take a Photo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Use your device's camera to take a photo of the plant.</p>
              <Button className="w-full">
                <Camera className="mr-2 h-4 w-4" /> Open Camera
              </Button>
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

