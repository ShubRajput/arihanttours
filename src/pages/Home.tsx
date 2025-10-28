import { useEffect, useState } from "react";
import {
  MapPin,
  Globe,
  Shield,
  Star,
  Sparkles,
  Award,
  Users,
  TrendingUp,
  Plane,
  Hotel,
  Ship,
  ArrowRight,
  Tag,
  Clock,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface AppProps {
  onNavigate?: (page: string) => void;
}

export default function App({ onNavigate }: AppProps = {}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const images = [
    "https://images.pexels.com/photos/221455/pexels-photo-221455.jpeg",
    "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg",
    "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg",
    "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1920",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const features = [
    {
      icon: Globe,
      title: "Worldwide Destinations",
      description:
        "Explore 500+ destinations across 6 continents with expert guidance",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "Travel with confidence knowing you are fully insured and protected",
    },
    {
      icon: Star,
      title: "Premium Experience",
      description:
        "Hand-picked hotels, exclusive tours, and unforgettable experiences",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "15+ years of excellence with 50,000+ satisfied travelers",
    },
  ];

  const destinations = [
    {
      name: "Santorini, Greece",
      image:
        "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "From $1,299",
      duration: "7 Days",
    },
    {
      name: "Bali, Indonesia",
      image:
        "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "From $899",
      duration: "6 Days",
    },
    {
      name: "Paris, France",
      image:
        "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "From $1,599",
      duration: "5 Days",
    },
    {
      name: "Maldives",
      image:
        "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "From $2,499",
      duration: "8 Days",
    },
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Travelers" },
    { icon: MapPin, value: "500+", label: "Destinations" },
    { icon: TrendingUp, value: "15+", label: "Years Experience" },
    { icon: Award, value: "25+", label: "Awards Won" },
  ];

  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description:
        "Find the best deals on domestic and international flights. Compare prices across airlines and book with confidence.",
      features: ["Best Price Guarantee", "24/7 Support", "Easy Cancellation"],
      image:
        "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "flight-enquiry",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Hotel,
      title: "Hotel Booking",
      description:
        "Discover handpicked hotels, resorts, and accommodations worldwide. From budget to luxury, find your perfect stay.",
      features: [
        "Verified Reviews",
        "Instant Confirmation",
        "Free Cancellation",
      ],
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "hotel-enquiry",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Ship,
      title: "Cruise Booking",
      description:
        "Embark on unforgettable ocean adventures. Explore exotic destinations while enjoying world-class amenities onboard.",
      features: [
        "All-Inclusive Packages",
        "Premium Cabins",
        "Shore Excursions",
      ],
      image:
        "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "cruise-enquiry",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const offers = [
    {
      title: "Early Bird Special",
      discount: "30% OFF",
      description: "Book 3 months in advance",
      validUntil: "Dec 31, 2025",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Honeymoon Package",
      discount: "25% OFF",
      description: "Special romantic getaways",
      validUntil: "Valid Year Round",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Group Travel",
      discount: "40% OFF",
      description: "Book for 10+ travelers",
      validUntil: "Limited Time",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Arihant Tours made our dream vacation to Bali a reality! Every detail was perfect, from the flight bookings to the stunning resort. The team was incredibly responsive and helpful throughout our journey.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      trip: "Bali Luxury Package",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "Outstanding service! The cruise booking was seamless and the recommendations were spot-on. We had the most amazing Mediterranean experience. Will definitely book again for our next adventure!",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
      trip: "Mediterranean Cruise",
    },
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "Best travel agency ever! They handled everything for our family trip to Paris. The hotel was gorgeous and exactly as promised. Their attention to detail and customer care is unmatched.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      trip: "Paris Family Tour",
    },
    {
      name: "David Martinez",
      location: "Barcelona, Spain",
      rating: 5,
      text: "Incredible experience from start to finish! The team found us the best flight deals and the hotel exceeded our expectations. Their 24/7 support gave us peace of mind throughout our trip.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
      trip: "Maldives Getaway",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION with Sliding Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Travel destination"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          </div>
        ))}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-white text-sm font-medium">
                Trusted by 50,000+ travelers worldwide
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Journey Begins with{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Arihant Tours
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover extraordinary destinations, create unforgettable
              memories, and experience the world like never before
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleNavigate("packages")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Destinations</span>
                <MapPin className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleNavigate("videos")}
                className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* OFFERS BANNER */}
      <section className="py-4 bg-gradient-to-r from-orange-600 to-red-600 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap flex items-center space-x-12">
          {[...offers, ...offers].map((offer, index) => (
            <div
              key={index}
              className="inline-flex items-center space-x-3 px-6"
            >
              <Tag className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-bold text-lg">
                {offer.discount}
              </span>
              <span className="text-white/90">{offer.title}</span>
              <span className="text-yellow-300">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <stat.icon className="h-10 w-10 mx-auto text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES - Interactive Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From flights to cruises, we've got you covered with seamless
              booking experiences
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center  rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group`}
              >
                <div className="lg:w-1/2 h-80 lg:h-96 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                        ></div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleNavigate(service.link)}
                    className={`group/btn inline-flex items-center space-x-2 bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300`}
                  >
                    <span>Book Now</span>
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Tag className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                LIMITED TIME OFFERS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exclusive Deals Just for You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these incredible savings for your next adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${offer.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`}
                ></div>

                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Tag className="h-8 w-8 text-orange-600" />
                    <div
                      className={`bg-gradient-to-r ${offer.color} text-white px-3 py-1 rounded-full text-sm font-bold`}
                    >
                      {offer.discount}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {offer.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{offer.description}</p>

                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                    <Clock className="h-4 w-4" />
                    <span>{offer.validUntil}</span>
                  </div>

                  <button
                    onClick={() => handleNavigate("contact")}
                    className={`w-full bg-gradient-to-r ${offer.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Star className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Travel with Confidence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and unforgettable experiences for
              every traveler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <MapPin className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                POPULAR TOURS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked destinations that will take your breath away
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-orange-600">
                      {destination.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {destination.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">
                      {destination.price}
                    </span>
                    <button
                      onClick={() => handleNavigate("packages")}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Star className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers who trusted us with their
              journeys
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                <div className="flex">
                  {reviews.map((review, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
                        <Quote className="h-12 w-12 text-orange-500 mb-6" />

                        <div className="flex mb-6">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-6 w-6 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>

                        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                          "{review.text}"
                        </p>

                        <div className="flex items-center space-x-4">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                          />
                          <div>
                            <h4 className="text-lg font-bold text-gray-900">
                              {review.name}
                            </h4>
                            <p className="text-gray-600">{review.location}</p>
                            <p className="text-sm text-orange-600 font-medium">
                              {review.trip}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-orange-600" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-orange-600" />
            </button>

            <div className="flex justify-center space-x-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? "bg-orange-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Let us help you create memories that will last a lifetime. Contact
            us today and begin your journey!
          </p>
          <button
            onClick={() => handleNavigate("contact")}
            className="bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            Plan Your Trip Now
          </button>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/918602941282"
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
