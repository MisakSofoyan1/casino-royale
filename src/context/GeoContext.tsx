import React, { createContext, useState, useContext } from 'react';
import { Region, REGIONS_DATA, GeoConfig } from '../region/config';

interface GeoContextType {
  region: Region;
  config: GeoConfig;
  setRegion: (region: Region) => void;
}

const GeoContext = createContext<GeoContextType | undefined>(undefined);

export const GeoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [region, setRegion] = useState<Region>('EN');

  const value = {
    region,
    config: REGIONS_DATA[region],
    setRegion
  };

  return <GeoContext.Provider value={value}>{children}</GeoContext.Provider>;
};

export const useGeo = () => {
  const context = useContext(GeoContext);
  if (!context) throw new Error('useGeo must be used within GeoProvider');
  return context;
};
