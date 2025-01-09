import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

interface PlantCardProps {
  id: number;
  name: string;
  imageUrl: string;
}

export function PlantCard({ id, name, imageUrl }: PlantCardProps) {
  return (
    <Link href={`/track/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}

