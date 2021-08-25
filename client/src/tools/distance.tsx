import { getDistance } from 'geolib';
import { supplierTypes } from '../types';

export function calculateDistance(supplierObj: supplierTypes, lat: number, lon: number): number {
    return getDistance(
      { latitude: lat, longitude: lon },
      { latitude: supplierObj.sup_lat, longitude: supplierObj.sup_lng}
    );
  }