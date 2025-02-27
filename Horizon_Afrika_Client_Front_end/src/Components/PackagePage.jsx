import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: "10 DAYS CAMPING IN KENYA BUDGET",
    location: "Mombasa",
    duration: "10 Days",
    price: "45,999",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "COASTAL BEACH HOLIDAY",
    location: "Diani",
    duration: "7 Days",
    price: "65,999",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "MALINDI WATAMU GETAWAY",
    location: "Malindi",
    duration: "5 Days",
    price: "55,999",
    image: "https://images.unsplash.com/photo-1543331979-5792e8cf6e2f?auto=format&fit=crop&q=80&w=800"
  }
];

function PackageCard({ image, title, location, duration, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        
        <div className="space-y-2 mb-4">
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
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            View Package
          </button>
        </div>
      </div>
    </div>
  );
}

function PackagePage() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded shadow-sm">
              {/* Available Packages Section */}
              <div className="p-4">
                <h2 className="font-semibold text-white bg-gray-800 -mx-4 -mt-4 p-4 rounded-t">
                  Available packages
                </h2>
                
                {/* Beach Packages */}
                <div className="mt-4">
                  <h3 className="font-medium bg-gray-200 -mx-4 px-4 py-2">Beach Packages</h3>
                  <div className="py-2 space-y-2">
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Mombasa North Coast</div>
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Diani/Ukunda</div>
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Malindi/Watamu</div>
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Lamu</div>
                  </div>
                </div>

                {/* Bush Packages */}
                <div>
                  <h3 className="font-medium bg-gray-200 -mx-4 px-4 py-2">Bush Packages</h3>
                  <div className="py-2 space-y-2">
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Maasai Mara</div>
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Samburu</div>
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Amboseli</div>
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Tsavo</div>
                  </div>
                </div>

                {/* Weekend Getaways */}
                <div>
                  <h3 className="font-medium bg-gray-200 -mx-4 px-4 py-2">Weekend Getaways</h3>
                  <div className="py-2 space-y-2">
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Naivasha</div>
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Nakuru</div>
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Nanyuki</div>
                    <div className="text-sm hover:text-orange-500 cursor-pointer pl-4">Mt Kenya</div>
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mt-6">
                  <h3 className="font-medium bg-gray-800 text-white -mx-4 px-4 py-2">Filter By:</h3>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Price :</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="price" className="text-orange-500" />
                        <span className="text-sm">0-5000</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="price" className="text-orange-500" />
                        <span className="text-sm">5001-10,000</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="price" className="text-orange-500" />
                        <span className="text-sm">10,001-15,000</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="price" className="text-orange-500" />
                        <span className="text-sm">15,000 +</span>
                      </label>
                    </div>
                  </div>

                  {/* Duration Filter */}
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Duration :</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="duration" className="text-orange-500" />
                        <span className="text-sm">2 days</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="duration" className="text-orange-500" />
                        <span className="text-sm">3 days</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="duration" className="text-orange-500" />
                        <span className="text-sm">4 days</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="duration" className="text-orange-500" />
                        <span className="text-sm">5 days +</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Package Listings */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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