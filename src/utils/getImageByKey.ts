import { Clover, Spade, Heart, Diamond } from 'assets';

const images: Record<string, string> = {
  Clover,
  Spade,
  Heart,
  Diamond,
};

const getImageByKey = (key: string) => images[key];

export default getImageByKey;
