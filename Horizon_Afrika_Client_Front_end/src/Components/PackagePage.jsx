import "react";
import { MapPin, Calendar } from "lucide-react";
import '../styles/PackagePage.css'; // Correct relative path
const packages = [
  {
    id: 1,
    title: "10 DAYS CAMPING IN KENYA BUDGET",
    location: "Mombasa",
    duration: "10 Days",
    price: "45,999",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
  },

  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
  },


  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
  },



  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
  },

  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
  },


  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
  },

  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
  },

  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
  },

  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
  },

  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
  },


  {
    id: 3,
    title: "MALINDI WATAMU GETAWAY",
    location: "Malindi",
    duration: "5 Days",
    price: "55,999",
    image: "https://images.unsplash.com/photo-1543331979-5792e8cf6e2f?auto=format&fit=crop&q=80&w=800",
  },
];

function PackageCard({ image, title, location, duration, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="stats-container">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">From</p>
            <p className="text-xl font-bold text-orange-500">KSH {price}</p>
          </div>
          <button className="button">View Package</button>
        </div>
      </div>
    </div>
  );
}

function PackagePage() {
  return (
    <div className="container">
      <div className="max-width">
        <div className="flex">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="bg-white rounded shadow-sm">
              <div className="p-4">
                <h2 className="section-title">Available packages</h2>
                {/* Beach Packages */}
                <div className="mt-4">
                  <h3 className="font-medium bg-gray-200">Beach Packages</h3>
                  <div className="py-2">
                    <div className="text-sm">Mombasa North Coast</div>
                    <div className="text-sm">Diani/Ukunda</div>
                    <div className="text-sm">Malindi/Watamu</div>
                    <div className="text-sm">Lamu</div>
                  </div>
                </div>

                {/* Bush Packages */}
                <div>
                  <h3 className="font-medium bg-gray-200">Bush Packages</h3>
                  <div className="py-2">
                    <div className="text-sm">Maasai Mara</div>
                    <div className="text-sm">Samburu</div>
                    <div className="text-sm">Amboseli</div>
                    <div className="text-sm">Tsavo</div>
                  </div>
                </div>

                {/* Weekend Getaways */}
                <div>
                  <h3 className="font-medium bg-gray-200">Weekend Getaways</h3>
                  <div className="py-2">
                    <div className="text-sm">Naivasha</div>
                    <div className="text-sm">Nakuru</div>
                    <div className="text-sm">Nanyuki</div>
                    <div className="text-sm">Mt Kenya</div>
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mt-6">
                  <h3 className="font-medium bg-gray-800 text-white">Filter By:</h3>
                  <div className="mt-4">
                    <h4 className="font-medium">Price :</h4>
                    <div>
                      <label>
                        <input type="radio" name="price" />
                        <span>0-5000</span>
                      </label>
                      <label>
                        <input type="radio" name="price" />
                        <span>5001-10,000</span>
                      </label>
                      <label>
                        <input type="radio" name="price" />
                        <span>10,001-15,000</span>
                      </label>
                      <label>
                        <input type="radio" name="price" />
                        <span>15,000 +</span>
                      </label>
                    </div>
                  </div>

                  {/* Duration Filter */}
                  <div className="mt-6">
                    <h4 className="font-medium">Duration :</h4>
                    <div>
                      <label>
                        <input type="radio" name="duration" />
                        <span>2 days</span>
                      </label>
                      <label>
                        <input type="radio" name="duration" />
                        <span>3 days</span>
                      </label>
                      <label>
                        <input type="radio" name="duration" />
                        <span>4 days</span>
                      </label>
                      <label>
                        <input type="radio" name="duration" />
                        <span>5 days +</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Package Listings */}
          <div className="flex-1">
            <div className="grid">
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  image={pkg.image}
                  title={pkg.title}
                  location={pkg.location}
                  duration={pkg.duration}
                  price={pkg.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackagePage;