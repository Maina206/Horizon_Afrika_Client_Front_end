import "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/DestinationPage.css';

const PackageCard = ({ image, title }) => {
  return (
    <div className="destination-card">
      <img src={image} alt={title} className="destination-image" />
      <div className="destination-content">
        <h3 className="destination-title">{title}</h3>
        <button className="view-button">View Package</button>
      </div>
    </div>
  );
};

const DestinationPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=1200",
      stats: [
        { value: "300+", label: "Products" },
        { value: "24/7", label: "Support" },
        { value: "100%", label: "Quality" },
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1200",
      stats: [
        { value: "200+", label: "Products" },
        { value: "24/7", label: "Support" },
        { value: "95%", label: "Quality" },
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1543331979-5792e8cf6e2f?auto=format&fit=crop&q=80&w=1200",
      stats: [
        { value: "10000", label: "Bookings" },
        { value: "-30%", label: "Price Guarantee" },
        { value: "98%", label: "Quality" },
      ],
    },
  ];

  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800",
      title: "Mombasa"
    },
    {
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
      title: "Nairobi"
    },
    {
      image: "https://images.unsplash.com/photo-1543331979-5792e8cf6e2f?auto=format&fit=crop&q=80&w=800",
      title: "Maasai Mara"
    }
  ];

  return (
    <div className="destination-container">
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-slide">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />
              <div className="stats-overlay">
                <div className="stats-wrapper">
                  {slide.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="stat-item">
                      <p className="stat-value">{stat.value}</p>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="content-section">
        <h2 className="section-title">Explore Different Destinations</h2>
        <p className="section-description">
          Discover the beauty and adventure that Kenya has to offer. From stunning
          landscapes to vibrant cultures, there is something for everyone.
        </p>
        
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <PackageCard 
              key={index}
              image={destination.image}
              title={destination.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;