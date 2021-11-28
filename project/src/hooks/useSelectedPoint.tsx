import { useState } from 'react';
import { Offer, Offers } from '../types/offer';

type ResultUserReview = [Offer | undefined, (listItemId: string) => void];

export const useSelectedPoint = (offers: Offers): ResultUserReview => {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (listItemId: string) => {
    const currentPoint = offers.find((offer) => `${offer.id}` === listItemId);
    setSelectedPoint(currentPoint);
  };

  return [selectedPoint, onListItemHover];
};
