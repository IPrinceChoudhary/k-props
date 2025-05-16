import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const properties = [
  {
    id: 1,
    title: "Aditya Birla",
    image: "https://companieslogo.com/img/orig/ABCAPITAL.NS-69fa632a.png?t=1720244490",
  },
  {
    id: 2,
    title: "India Bulls",
    image:
      "https://logowik.com/content/uploads/images/indiabulls-housing-finance6471.jpg",
  },
  {
    id: 3,
    title: "Zomato",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
  },
  {
    id: 4,
    title: "ICICI Bank",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8mXBusladp4eop5YLbiGOpipboZcpsGylw&s",
  },
];

export default function Partners() {
  return (
    <div className="md:px-30 md:py-20 py-15 bg-black">
      <div>
        <h2 className="text-center md:text-4xl text-2xl font-bold mb-2 text-white">
          We have worked with
        </h2>
        <div className="w-24 h-1 bg-[#CC9D16] mx-auto mb-5"></div>
        <p className="md:text-lg mb-15 px-2 text-sm text-center text-white">
          We have worked with a wide range of clients in the property and real estate sector, including developers, agents, property managers, and investors. From showcasing residential and commercial properties to creating platforms for listings, bookings, and virtual tours, our work reflects a deep understanding of the industry’s needs. Our goal is to highlight properties in the best possible light while ensuring functionality, speed, and user-friendly experiences.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Carousel className="w-full max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-lg">
          <CarouselContent>
            {properties.map((property) => (
              <CarouselItem key={property.id}>
                <div className="md:p-1">
                  <Card className="md:h-[500px] h-[300px]">
                    <CardContent className="flex flex-col items-center justify-between md:p-6 p-3 h-full">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full md:h-80 h-40 object-cover rounded-md md:mb-4 mb-2"
                      />
                      <div className="text-center">
                        <h3 className="md:text-2xl text-lg font-semibold mb-2">
                          {property.title}
                        </h3>
                        {property.description && (
                          <p className="md:text-[16px] text-sm text-gray-600">
                            {property.description}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
}
