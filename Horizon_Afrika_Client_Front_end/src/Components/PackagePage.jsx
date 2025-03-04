import { useState, useEffect } from "react";
import SafariModal from "./SafariModal";
import { MapPin, Calendar } from "lucide-react";
import "../styles/PackagePage.css";
import SearchBar from "./SearchBar";

function PackageCard({ image, title, location, duration, price, onView }) {
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
            <p className="text-sm text-gray-500">From: </p>
            <p className="text-xl font-bold text-orange-500">KSH {price}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={(e) => {
              e.stopPropagation(); // Prevent event propagation
              onView();
            }}
          >
            View Package
          </button>
        </div>
      </div>
    </div>
  );
}

function PackagePage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/packages/client")
      .then((response) => response.json())
      .then((data) => setPackages(data))
      .catch((error) => console.error("Error fetching packages:", error));
  }, []);

  return (
    <div className="container">
      <SearchBar />
      <div className="max-width">
        <div className="flex">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="bg-white rounded shadow-sm">
              <div className="p-4">
                <h2 className="section-title bg-gray-800">
                  Available packages
                </h2>

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
                  <h3 className="font-medium bg-gray-800 text-white">
                    Filter By:
                  </h3>
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
                  title={pkg.package_name}
                  location={pkg.location}
                  duration={pkg.duration}
                  price={pkg.price}
                  onView={() => {
                    console.log("Selected Package:", pkg); // debugging if we are getting data back
                    setSelectedPackage(pkg);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPackage && (
        <SafariModal
          packageData={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
}

export default PackagePage;
