/* eslint-disable import/prefer-default-export */

export const transformUnit = (
  sourceUnit,
  sourceInputValue,
  targetUnit,
) => {
  if (sourceUnit === 'kg' && targetUnit === 'lbs') {
    return (Number(sourceInputValue) * 2.2046).toFixed(2);
  }
  if (sourceUnit === 'lbs' && targetUnit === 'kg') {
    return (Number(sourceInputValue) * 0.454).toFixed(2);
  }
  return null;
};
