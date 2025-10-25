// ---------------------------
// Types
// ---------------------------

interface FlightEnquiry {
  name: string;
  mobile: string;
  from: string;
  to: string;
  depart: string;
  return: string;
  travellers: string;
  class: string;
  timestamp: string;
}

interface HotelEnquiry {
  name: string;
  mobile: string;
  area: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  starCategory: string;
  nationality: string;
  freeCancellation: boolean;
  breakfastIncluded: boolean;
  timestamp: string;
}

interface CruiseEnquiry {
  name: string;
  mobile: string;
  destination: string;
  departureDate: string;
  duration: string;
  passengers: string;
  cabinType: string;
  specialRequests: string;
  timestamp: string;
}

interface ContactEnquiry {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  timestamp: string;
}


// ---------------------------
// Constants
// ---------------------------

const GOOGLE_APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_URL ||
  'https://script.google.com/macros/s/AKfycbz1D3rh9VB1nzpxDW5g7ROnWYi274L7PuE9wnDaZ6o2vxDVkAN6_6tb9dSoXgpjQ8bSDg/exec';

// ---------------------------
// Generic Submitter
// ---------------------------

async function submitToGoogleSheet<T extends object>(
  type: 'flight' | 'hotel' | 'cruise' | 'contact',
  data: Omit<T, 'timestamp'>
): Promise<boolean> {
  try {
    const payload = {
      type,
      data: {
        ...data,
        timestamp: new Date().toISOString(),
      },
    };

    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // no-cors prevents reading response; assume success
    return true;
  } catch (error) {
    console.error(`Error submitting ${type} enquiry:`, error);
    return false;
  }
}

// ---------------------------
// Exported Functions
// ---------------------------

export async function submitFlightEnquiry(
  data: Omit<FlightEnquiry, 'timestamp'>
): Promise<boolean> {
  return submitToGoogleSheet<FlightEnquiry>('flight', data);
}

export async function submitHotelEnquiry(
  data: Omit<HotelEnquiry, 'timestamp'>
): Promise<boolean> {
  return submitToGoogleSheet<HotelEnquiry>('hotel', data);
}

export async function submitCruiseEnquiry(
  data: Omit<CruiseEnquiry, 'timestamp'>
): Promise<boolean> {
  return submitToGoogleSheet<CruiseEnquiry>('cruise', data);
}

export async function submitContactEnquiry(
  data: Omit<ContactEnquiry, 'timestamp'>
): Promise<boolean> {
  return submitToGoogleSheet<ContactEnquiry>('contact', data);
}
