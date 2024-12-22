
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import gallery_1 from "../../public/gallery-1.jpg"
import gallery_2 from "../../public/gallery-2.jpg"
import gallery_3 from "../../public/gallery-6.jpg"
import gallery_4 from "../../public/gallery-4.jpg"
import gallery_5 from "../../public/gallery-5.jpg"
import Image from "next/image"

export function Slider() {
  const ImagesList = [ 
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,

  ]
  return (
     <Carousel className="w-full overflow-hidden max-w-5xl m-auto my-10">
      <CarouselContent className="-ml-1">
        {ImagesList.map((img, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex p-0 aspect-square items-center justify-center">

                <Image className="w-full object-cover h-full"
                 src={img} alt='projects' />
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
