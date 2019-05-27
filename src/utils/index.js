/* eslint-disable import/prefer-default-export */

export const transformUnit = (
  sourceInputValue,
  targetUnit,
  sourceUnit,
) => {
  // TODO: Move units to constants
  if (sourceUnit === 'kg' && targetUnit === 'lb') {
    return (Number(sourceInputValue) * 2.2046).toFixed(2);
  }
  if (sourceUnit === 'lb' && targetUnit === 'kg') {
    return (Number(sourceInputValue) * 0.454).toFixed(2);
  }
  return null;
};
