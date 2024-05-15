
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Card, CardContent } from "../ui/card"

export function Slider() {
  const ImagesList = [ 
    'https://coastline.contractors/wp-content/uploads/2023/11/gallery-6.jpg',
    'https://coastline.contractors/wp-content/uploads/2023/11/gallery-2.jpg',
    'https://coastline.contractors/wp-content/uploads/2023/11/gallery-4.jpg',
    'https://coastline.contractors/wp-content/uploads/2023/11/gallery-5.jpg',
    'https://coastline.contractors/wp-content/uploads/2023/11/gallery-1.jpg'

  ]
  return (
     <Carousel className="w-full max-w-5xl m-auto my-10">
      <CarouselContent className="-ml-1">
        {ImagesList.map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex p-0 aspect-square items-center justify-center">

                <img className="w-full object-cover h-full"
                 src={_} alt='projects' />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
