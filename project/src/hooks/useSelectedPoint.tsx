import { useState } from 'react';
import { Offer, Offers } from '../types/offer';

type ResultUserReview = [Offer | undefined, (listItemName: string) => void];

export const useSelectedPoint = (offers: Offers): ResultUserReview => {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((offer) => offer.title === listItemName);
    setSelectedPoint(currentPoint);
  };

  return [selectedPoint, onListItemHover];
};
