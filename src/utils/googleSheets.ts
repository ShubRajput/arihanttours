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

// ---------------------------
// Constants
// ---------------------------

const GOOGLE_APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_URL ||
  'https://script.google.com/macros/s/AKfycbwOpdCCdhwsCyb8eMo2g-Ge-wXccnt9P79nnYSRy5jV6_DaqVtXxSnPxXXZYmgw6oEp/exec';

// ---------------------------
// Generic Submitter
// ---------------------------

async function submitToGoogleSheet<T extends object>(
  type: 'flight' | 'hotel' | 'cruise',
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
