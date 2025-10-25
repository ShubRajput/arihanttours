// src/utils/fetchPackages.ts
export interface TravelPackage {
  "Package Name": string;
  "Price Per Person": string;
  "Description": string;
  "Image": string;
}

const GOOGLE_SHEET_PACKAGES_URL = import.meta.env.VITE_GOOGLE_SHEET_PACKAGES_URL || 'https://script.google.com/macros/s/AKfycbxSdAmvgdDGCfBvvPrH0dIQI1FdrRNMOPXFUYx7iD-JX16BdCTR3wc_4uxpBpTD9EnF/exec';

export async function fetchPackages(): Promise<TravelPackage[]> {
  try {
    const res = await fetch(GOOGLE_SHEET_PACKAGES_URL);
    const json = await res.json();
    return json.packages || [];
  } catch (error) {
    console.error('Error fetching packages:', error);
    return [];
  }
}
