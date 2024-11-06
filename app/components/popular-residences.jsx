import PropertyCard from "./property-card"

const PopularResidences = () => {
  const properties = [
    {
      image: "/card1.svg",
      location: "San Francisco, California",
      rooms: 4,
      sqft: "3,500",
      price: 2500000,
    },
    {
      image: "/card2.svg",
      location: "Beverly Hills, California",
      rooms: 3,
      sqft: "1,500",
      price: 850000,
    },
    {
      image: "/card3.svg",
      location: "Palo Alto, California",
      rooms: 6,
      sqft: "4,000",
      price: 3700000,
    },
  ]

  return (
    <section className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D] mb-12">
        Our Popular Residences
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            location={property.location}
            rooms={property.rooms}
            sqft={property.sqft}
            price={property.price}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularResidences