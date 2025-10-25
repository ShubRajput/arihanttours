import { useState } from 'react';
import { Ship, User, Phone, MapPin, Calendar, Users, CheckCircle, Send, Bed } from 'lucide-react';
import { submitCruiseEnquiry } from '../utils/googleSheets';

export default function CruiseEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    destination: '',
    departureDate: '',
    duration: '3-4 nights',
    passengers: '2',
    cabinType: 'Interior',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitCruiseEnquiry(formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        destination: '',
        departureDate: '',
        duration: '3-4 nights',
        passengers: '2',
        cabinType: 'Interior',
        specialRequests: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/163236/luxury-cruise-ship-costa-ricica-163236.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Cruise Booking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 to-red-900/85"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Ship className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">Cruise Booking</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Book Your Cruise
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Experience luxury on the high seas with our cruise packages
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl">
                <Ship className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Cruise Enquiry Form</h2>
                <p className="text-gray-600">Set sail on your dream cruise vacation</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Cruise Destination *
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select destination</option>
                  <option value="Caribbean">Caribbean</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Dubai & Emirates">Dubai & Emirates</option>
                  <option value="Southeast Asia">Southeast Asia</option>
                  <option value="Norwegian Fjords">Norwegian Fjords</option>
                  <option value="Greek Islands">Greek Islands</option>
                  <option value="Baltic Sea">Baltic Sea</option>
                  <option value="South Pacific">South Pacific</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="departureDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Preferred Departure Date *
                  </label>
                  <input
                    type="date"
                    id="departureDate"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Cruise Duration *
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="3-4 nights">3-4 Nights</option>
                    <option value="5-7 nights">5-7 Nights</option>
                    <option value="8-10 nights">8-10 Nights</option>
                    <option value="11-14 nights">11-14 Nights</option>
                    <option value="15+ nights">15+ Nights</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="passengers" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Number of Passengers *
                  </label>
                  <select
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                    <option value="9+">9+ Passengers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cabinType" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Bed className="inline h-4 w-4 mr-1" />
                    Cabin Type *
                  </label>
                  <select
                    id="cabinType"
                    name="cabinType"
                    value={formData.cabinType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="Interior">Interior Cabin</option>
                    <option value="Ocean View">Ocean View Cabin</option>
                    <option value="Balcony">Balcony Cabin</option>
                    <option value="Suite">Suite</option>
                    <option value="Luxury Suite">Luxury Suite</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-2">
                  Special Requests or Requirements
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="E.g., Dietary requirements, accessibility needs, celebration occasions, preferred deck..."
                ></textarea>
              </div>

              <div className="bg-orange-50 border-2 border-orange-100 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What Happens Next?</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    Our cruise specialists will search for the best available itineraries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    You'll receive detailed cruise options with pricing within 24 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    Personalized assistance with booking and shore excursions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    Special rates and onboard credits available
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:scale-105'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span>Submitting...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="h-6 w-6" />
                    <span>Enquiry Submitted!</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
