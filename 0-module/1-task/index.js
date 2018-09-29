/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function sum (m, n) {
  if ([m, n].every(Number) !== true) 
    throw new TypeError();
  
  return m + n;
}
