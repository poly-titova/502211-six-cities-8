import { Host, Location, City, Offer, Offers } from './offer';
import { User, Review, Reviews } from './review';

const isRecord = (obj: unknown): obj is Record<string, unknown> => typeof obj === 'object' && obj !== null;

const isArray = (data: unknown): data is Array<unknown> => Array.isArray(data);

const toN = (data: unknown, defValue: number) => typeof data === 'number' ? data : defValue;
const toS = (data: unknown, defValue: string) => typeof data === 'string' ? data : defValue;
const toB = (data: unknown, defValue: boolean) => typeof data === 'boolean' ? data : defValue;
const toA = (data: unknown, defValue: string[] = []) => !isArray(data) ? defValue : data.map((el) => toS(el, ''));

const toLocation = (data: unknown): Location => {
  if (!isRecord(data)) {
    throw new Error('Location не правильный');
  }
  const { latitude, longitude, zoom } = data;
  return { latitude: toN(latitude, 0), longitude: toN(longitude, 0), zoom: toN(zoom, 0) };
};

const toCity = (data: unknown): City => {
  if (!isRecord(data)) {
    throw new Error('City не правильный');
  }
  const { location, name } = data;
  return { location: toLocation(location), name: toS(name, '') };
};

const toHost = (data: unknown): Host => {
  if (!isRecord(data)) {
    throw new Error('Host не правильный');
  }
  const { avatarUrl, id, name, isPro } = data;
  return { avatarUrl: toS(avatarUrl, ''), id: toN(id, 0), name: toS(name, ''), isPro: toB(isPro, false) };
};

const toOffer = (item: unknown): Offer => {
  if (!isRecord(item)) {
    throw new Error('Сервер передал не валидные данные');
  }
  const {
    bedrooms,
    city,
    description,
    goods,
    host,
    id,
    images,
    location,
    price,
    rating,
    title,
    type,
  } = item;
  return {
    bedrooms: toN(bedrooms, 0),
    city: toCity(city),
    description: toS(description, ''),
    goods: toA(goods),
    host: toHost(host),
    id: toN(id, 0),
    images: toA(images),
    isFavorite: toB(item['is_favorite'], false),
    isPremium: toB(item['is_premium'], false),
    location: toLocation(location),
    maxAdults: toN(item['max_adults'], 0),
    previewImage: toS(item['preview_image'], ''),
    price: toN(price, 0),
    rating: toN(rating, 0),
    title: toS(title, ''),
    type: toS(type, ''),
  };
};

export const adaptOffer = (data: unknown): Offers => {
  if (!isArray(data)) {
    throw new Error('Полученные данные не являються массивом');
  }
  return data.map(toOffer);
};

const toUser = (data: unknown): User => {
  if (!isRecord(data)) {
    throw new Error('User не правильный');
  }
  const { avatarUrl, id, isPro, name } = data;
  return { avatarUrl: toS(avatarUrl, ''), id: toN(id, 0), isPro: toB(isPro, false), name: toS(name, '') };
};

const toReview = (item: unknown): Review => {
  if (!isRecord(item)) {
    throw new Error('Сервер передал не валидные данные');
  }
  const { comment, date, id, rating, user } = item;
  return { comment: toS(comment, ''), date: toS(date, ''), id: toN(id, 0), rating: toN(rating, 0), user: toUser(user) };
};

export const adaptReview = (data: unknown): Reviews => {
  if (!isArray(data)) {
    throw new Error('Полученные данные не являються массивом');
  }
  return data.map(toReview);
};
