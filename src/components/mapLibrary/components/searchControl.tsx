import React from 'react';

interface Props {
  data?: object;
  options?: ymaps.control.SearchControlParametersOptions;
  state?: object;
  templateNewPlacemark?: {
    properties: ymaps.PlacemarkProperties,
    options: ymaps.PlacemarkOptions,
  };
}

export const SearchControl: React.FC<Props> = () => {
  return <SearchControl />;
};
