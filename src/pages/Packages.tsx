import React, { useEffect, useState } from "react";
import { fetchPackages, TravelPackage } from "../utils/fetchPackages";
import ReactMarkdown from "react-markdown";
import { X } from "lucide-react"; // for close icon
import ClipLoader from "react-spinners/ClipLoader";

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  useEffect(() => {
    fetchPackages()
      .then(setPackages)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] bg-gradient-to-br from-blue-50 to-white">
        <ClipLoader color="#2563eb" size={60} />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen pt-24 pb-12 px-6 md:px-12">
      {/* 👆 Added pt-24 to offset fixed navbar (adjust to pt-20 or pt-28 if needed) */}

      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-800">
        Explore Our Travel Packages ✈️
      </h2>

      {/* Packages Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedPackage(pkg)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                src={pkg["Image"] || "/placeholder.jpg"}
                alt={pkg["Package Name"]}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {pkg["Package Name"]}
              </h3>
              <p className="text-blue-600 font-bold text-lg">
                ₹{pkg["Price Per Person"]}{" "}
                <span className="text-sm text-gray-600">/person</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <div className="mb-4">
              <img
                src={selectedPackage["Image"] || "/placeholder.jpg"}
                alt={selectedPackage["Package Name"]}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedPackage["Package Name"]}
              </h3>
              <p className="text-blue-600 font-semibold text-lg mb-4">
                ₹{selectedPackage["Price Per Person"]} / person
              </p>

              <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
                <ReactMarkdown>{selectedPackage["Description"]}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;
