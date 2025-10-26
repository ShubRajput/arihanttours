import { useState } from 'react';
import { Plane, User, Phone, MapPin, Calendar, Users, CheckCircle, Send } from 'lucide-react';
import { submitFlightEnquiry } from '../utils/googleSheets';

export default function FlightEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    from: '',
    to: '',
    depart: '',
    return: '',
    travellers: '1',
    class: 'Economy',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitFlightEnquiry(formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        from: '',
        to: '',
        depart: '',
        return: '',
        travellers: '1',
        class: 'Economy',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
            src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Flight Booking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 to-orange-400/85"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Plane className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">Flight Booking</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Book Your Flight
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Fill out the form below and our team will find you the best flight deals
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Flight Enquiry Form</h2>
                <p className="text-gray-600">We'll get back to you within 24 hours</p>
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from" className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    From (City/Airport) *
                  </label>
                  <input
                    type="text"
                    id="from"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="Mumbai (BOM)"
                  />
                </div>

                <div>
                  <label htmlFor="to" className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    To (City/Airport) *
                  </label>
                  <input
                    type="text"
                    id="to"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="Dubai (DXB)"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="depart" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Departure Date *
                  </label>
                  <input
                    type="date"
                    id="depart"
                    name="depart"
                    value={formData.depart}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="return" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Return Date
                  </label>
                  <input
                    type="date"
                    id="return"
                    name="return"
                    value={formData.return}
                    onChange={handleChange}
                    min={formData.depart || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="travellers" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Number of Travellers *
                  </label>
                  <select
                    id="travellers"
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Traveller' : 'Travellers'}
                      </option>
                    ))}
                    <option value="10+">10+ Travellers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="class" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Plane className="inline h-4 w-4 mr-1" />
                    Class *
                  </label>
                  <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business Class</option>
                    <option value="First">First Class</option>
                  </select>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-100 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What Happens Next?</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    Our team will search for the best available flights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    You'll receive quotes via email and phone within 24 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    Free consultation and booking assistance
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
