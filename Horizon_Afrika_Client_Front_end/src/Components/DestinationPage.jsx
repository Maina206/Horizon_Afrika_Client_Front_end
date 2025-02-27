import React from "react";
import Slider from "react-slick";

function PackageCard({ image, title }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            View Package
          </button>
        </div>
      </div>
    </div>
  );
}

const DestinationPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: "/path/to/mombasa.jpg",
      stats: [
        { value: "300+", label: "Products" },
        { value: "24/7", label: "Support" },
        { value: "100%", label: "Quality" },
      ],
    },
    {
      image: "/path/to/nairobi.jpg",
      stats: [
        { value: "200+", label: "Products" },
        { value: "24/7", label: "Support" },
        { value: "95%", label: "Quality" },
      ],
    },
    {
      image: "/path/to/maasai_mara.jpg",
      stats: [
        { value: "10000", label: "Bookings" },
        { value: "-30%", label: "Price Guarantee:" },
        { value: "98%", label: "Quality" },
      ],
    },
  ];

  return (
    <div className="p-8">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
              <div className="flex space-x-4">
                {slide.stats.map((stat, statIndex) => (
                  <div key={statIndex}>
                    <p className="text-xl font-bold">{stat.value}</p>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <h2 className="text-2xl font-bold mt-6">
        Explore Different Destinations
      </h2>
      <p className="mb-6">
        Discover the beauty and adventure that Kenya has to offer. From stunning
        landscapes to vibrant cultures, there's something for everyone.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PackageCard image="/path/to/mombasa.jpg" title="Mombasa" />
        <PackageCard image="/path/to/nairobi.jpg" title="Nairobi" />
        <PackageCard image="/path/to/maasai_mara.jpg" title="Maasai Mara" />
      </div>
    </div>
  );
};

export default DestinationPage;
