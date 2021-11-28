import { ChangeEvent, useState } from 'react';

type ResultUserReview = [string, (e: ChangeEvent<HTMLTextAreaElement>) => void];

export const useUserReview = (): ResultUserReview => {
  const [review, setReview] = useState<string>('');

  const updateReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  return [review, updateReview];
};
