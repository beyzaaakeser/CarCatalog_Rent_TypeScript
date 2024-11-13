import { CarType } from '../types';
import { colors } from './constants';

const generateImage = (car: CarType, angle?: string): string => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  url.searchParams.append('customer', import.meta.env.VITE_CUSTOMER_ID);
  url.searchParams.append('make', car.make);
  url.searchParams.append('modelFamily', car.model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');

  console.log('VITE_IMAGE_BASE_URL:', import.meta.env.VITE_IMAGE_BASE_URL);
  console.log('VITE_CUSTOMER_ID:', import.meta.env.VITE_CUSTOMER_ID);

  if (angle) {
    url.searchParams.append('angle', angle);
  }

  const i = Math.round(Math.random() * colors.length);

  url.searchParams.append('paintId', colors[i]);
  return url.href;
};

export default generateImage;
