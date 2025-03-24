import { useState, useEffect } from "react";
import SafariModal from "./SafariModal";
import { MapPin, Calendar } from "lucide-react";
import "../styles/PackagePage.css";
import SearchBar from "./SearchBar";

function PackageCard({ image, title, location, duration, price, onView }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="safari-card-content">
        <h3 className="card-title">{title}</h3>
        <div className="stats-container">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{duration} days</span>
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
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    fetch("https://horizonafrika-backend.onrender.com/packages/client")
      .then((response) => response.json())
      .then((data) => {
        setPackages(data);
        setFilteredPackages(data);
      })
      .catch((error) => console.error("Error fetching packages:", error));
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      setFilteredPackages(
        packages.filter((pkg) => pkg.location === selectedLocation)
      );
    } else {
      setFilteredPackages(packages);
    }
  }, [selectedLocation, packages]);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const resetFilters = () => {
    setSelectedLocation("");
  };

  return (
    <div className="package-container">
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
                <button className="reset-button" onClick={resetFilters}>
                  Reset
                </button>
                {/* Beach Packages */}
                <div className="mt-4">
                  <h3 className="font-medium bg-gray-200">Beach Packages</h3>
                  <div className="py-2">
                    {[
                      "Mombasa",
                      "Diani",
                      "Ukunda",
                      "Malindi",
                      "Watamu",
                      "Lamu",
                    ].map((location) => (
                      <div
                        key={location}
                        className="text-sm cursor-pointer"
                        onClick={() => handleLocationClick(location)}
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bush Packages */}
                <div>
                  <h3 className="font-medium bg-gray-200">Bush Packages</h3>
                  <div className="py-2">
                    {["Maasai Mara", "Samburu", "Amboseli", "Tsavo"].map(
                      (location) => (
                        <div
                          key={location}
                          className="text-sm cursor-pointer"
                          onClick={() => handleLocationClick(location)}
                        >
                          {location}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Weekend Getaways */}
                <div>
                  <h3 className="font-medium bg-gray-200">Weekend Getaways</h3>
                  <div className="py-2">
                    {["Naivasha", "Nakuru", "Nanyuki", "Mt Kenya"].map(
                      (location) => (
                        <div
                          key={location}
                          className="text-sm cursor-pointer"
                          onClick={() => handleLocationClick(location)}
                        >
                          {location}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Package Listings */}
          <div className="flex-1">
            <div className="grid">
              {filteredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  image={
                    pkg.photos.length > 0
                      ? pkg.photos[0].photo_url
                      : "https://cdn.pixabay.com/photo/2017/10/14/11/19/elephant-2850252_1280.jpg"
                  }
                  title={pkg.package_name}
                  location={pkg.location}
                  duration={pkg.day_count}
                  price={pkg.price}
                  onView={() => {
                    console.log("Selected Package:", pkg);
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
