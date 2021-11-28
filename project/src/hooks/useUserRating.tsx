import { ChangeEvent, useState } from 'react';

type ResultUserRating = [number, (e: ChangeEvent<HTMLInputElement>) => void];

export const useUserRating = (): ResultUserRating => {
  const [rating, setRating] = useState<number>(0);

  const updateRating = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value, 10));
  };

  return [rating, updateRating];
};

