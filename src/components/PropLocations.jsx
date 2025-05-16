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
    title: "Delhi",
    description: "Vibrant office space in the capital’s bustling heart.",
    image: "https://www.propdial.com/images/building-Screenshot.png",
  },
  {
    id: 2,
    title: "Gurgaon",
    description: "Prime retail spot in a thriving corporate hub.",
    image:
      "https://housingnxt.com/wp-content/uploads/2025/01/Pyramid-Fusion-Homes-features.png",
  },
  {
    id: 3,
    title: "Goa",
    description: "Creative studio in a serene coastal paradise.",
    image: "https://goa.tours/wp-content/uploads/2019/04/image.png",
  },
  {
    id: 4,
    title: "Dhulera",
    description: "Modern workspace in an emerging industrial city.",
    image:
      "https://goldendreamproperty.com/wp-content/uploads/2024/08/grater-noida.png",
  },
];

export default function PropLocation() {
  return (
    <div className="md:px-30 md:py-20 py-15 bg-gray-50">
      <div>
        <h2 className="text-center md:text-4xl text-2xl font-bold mb-2">
          Spaces Available Across the City
        </h2>
        <div className="w-24 h-1 bg-[#CC9D16] mx-auto mb-5"></div>
        <p className="md:text-lg mb-15 px-2 text-sm text-center">
          Explore a diverse range of available properties spread across top
          locations. Whether you're looking for a professional office setup, a
          high-visibility shop, or a versatile space to grow your business,
          we’ve got you covered.
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
