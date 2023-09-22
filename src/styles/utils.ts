export const toRem = (pixels: string | number) => {
  if (typeof pixels === 'string' && pixels.includes('px')) {
    pixels = pixels.replace('px', '');
  }
  return +pixels * 0.063 + 'rem';
};
