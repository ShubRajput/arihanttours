import { useState } from 'react';
import { Play, X, MapPin } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  mainVideoId: string;
  relatedVideoIds: string[];
}

export default function Videos() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [currentVideoId, setCurrentVideoId] = useState<string>('');

  const destinations: Destination[] = [
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'BFS9n4B_2xA',
      relatedVideoIds: ['sY6BGVE-PBE', 'rgk3o2VX57k', 'GCPBudrVA5s', 'linlz7-Pnvw'],
    },
    {
      id: 'kashmir',
      name: 'Kashmir',
      country: 'India',
      image: 'https://images.pexels.com/photos/14580337/pexels-photo-14580337.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'OBfJHF_2vkQ',
      relatedVideoIds: ['OBfJHF_2vkQ', '7d_TpmC5QSo', 'sXo8RzVPSn8', 'oe2pCI2k7t4'],
    },
    {
      id: 'new-zealand',
      name: 'New Zealand',
      country: 'New Zealand',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'Fms1xung8ug',
      relatedVideoIds: ['Fms1xung8ug', 'pTQ0y_23I4M', 'FVj1-6J_QIc', '2zv8-Ld-2SA'],
    },
    {
      id: 'santorini',
      name: 'Santorini',
      country: 'Greece',
      image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'wqFG28N6Su0',
      relatedVideoIds: ['wqFG28N6Su0', 'uqWA0fXPIMI', 'Ld6Xcd6RSHg', '2_-E1jKOPkI'],
    },
    {
      id: 'paris',
      name: 'Paris',
      country: 'France',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'AQ6GmpMu5L8',
      relatedVideoIds: ['AQ6GmpMu5L8', 'oqFzJhu37RU', 'PeAGZVeDzh8', 'WYsqz7R5cJA'],
    },
    {
      id: 'maldives',
      name: 'Maldives',
      country: 'Maldives',
      image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'gRI4YH9Qcc0',
      relatedVideoIds: ['gRI4YH9Qcc0', 'pFOAsnrXKaw', 'u3hy76-4Fk4', '7WTSHrHLddk'],
    },
    {
      id: 'dubai',
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'RWPjS5fqzRA',
      relatedVideoIds: ['RWPjS5fqzRA', 'K6_zsJ8KPP0', 'kv6f2YVy8GQ', '1_EjXmJRg1s'],
    },
    {
      id: 'switzerland',
      name: 'Switzerland',
      country: 'Switzerland',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'tu32xzW7pP0',
      relatedVideoIds: ['tu32xzW7pP0', 'jMUxJLhVFHU', '8Yh35uWLBQ8', 'VgkVIXk4U2s'],
    },
    {
      id: 'thailand',
      name: 'Thailand',
      country: 'Thailand',
      image: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'vsN32F0V2lU',
      relatedVideoIds: ['vsN32F0V2lU', 'BU_6r9dPbSo', 'kVNZfGUGvsU', 'qzM3k0L1r4U'],
    },
    {
      id: 'singapore',
      name: 'Singapore',
      country: 'Singapore',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'QbC9straight',
      relatedVideoIds: ['QbC9straight', '_w5NVF4CRAM', 'TiZmYhVUMN4', 'fXTZPfVxUjc'],
    },
    {
      id: 'iceland',
      name: 'Iceland',
      country: 'Iceland',
      image: 'https://images.pexels.com/photos/356774/pexels-photo-356774.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'jfBA0jYPJQ8',
      relatedVideoIds: ['jfBA0jYPJQ8', 'XqnyaAL0Q_8', 'VdI7_v_KTCY', 'lPvhKV3Yg2o'],
    },
    {
      id: 'japan',
      name: 'Tokyo',
      country: 'Japan',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      mainVideoId: 'dK2kn_D8Y6k',
      relatedVideoIds: ['dK2kn_D8Y6k', 'xn26xCfNSLg', 'h0_WN62-c9g', 'JpC6h5WB_K8'],
    },
  ];

  const openVideo = (destination: Destination) => {
    setSelectedDestination(destination);
    setCurrentVideoId(destination.mainVideoId);
  };

  const closeModal = () => {
    setSelectedDestination(null);
    setCurrentVideoId('');
  };

  const handleRelatedVideoClick = (videoId: string) => {
    setCurrentVideoId(videoId);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Destination Videos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 to-orange-400/85"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Play className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">Video Gallery</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore Destinations
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Watch stunning videos of the world's most beautiful places
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <MapPin className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">VIDEO TOURS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Amazing Places
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click on any destination to watch breathtaking videos and explore more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                onClick={() => openVideo(destination)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Watch Now
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{destination.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedDestination && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-7xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="grid lg:grid-cols-3 gap-0">
              <div className="lg:col-span-2">
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`}
                    title={selectedDestination.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6 bg-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedDestination.name}, {selectedDestination.country}
                  </h3>
                  <p className="text-gray-400">
                    Explore the beauty and culture of {selectedDestination.name}
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 overflow-y-auto max-h-[80vh]">
                <h4 className="text-lg font-bold text-white mb-4 sticky top-0 bg-gray-800 pb-2">
                  More Videos
                </h4>
                <div className="space-y-4">
                  {selectedDestination.relatedVideoIds.map((videoId, index) => (
                    <div
                      key={index}
                      onClick={() => handleRelatedVideoClick(videoId)}
                      className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                        currentVideoId === videoId
                          ? 'ring-2 ring-orange-500'
                          : 'hover:ring-2 hover:ring-gray-600'
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                          alt={`Video ${index + 1}`}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="bg-white/90 p-2 rounded-full">
                            <Play className="h-4 w-4 text-orange-600" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-700">
                        <p className="text-sm text-white font-medium line-clamp-2">
                          {selectedDestination.name} - Video {index + 1}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      <a
        href="https://wa.me/918602941282" // replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.38 0 .09 5.29.09 11.91a11.9 11.9 0 001.68 6.06L0 24l6.24-1.63a11.89 11.89 0 005.76 1.47h.01c6.62 0 11.91-5.29 11.91-11.91a11.86 11.86 0 00-3.4-8.45zM12 21.44a9.48 9.48 0 01-4.82-1.31l-.35-.21-3.7.96.99-3.6-.23-.37A9.44 9.44 0 012.52 12C2.52 6.75 6.75 2.52 12 2.52a9.43 9.43 0 016.67 2.76A9.45 9.45 0 0121.48 12c0 5.25-4.23 9.48-9.48 9.48zm5.47-7.15c-.3-.15-1.77-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.5-1.76-1.68-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.28 5.18 4.6.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35z" />
        </svg>
      </a>
    </div>
  );
}
