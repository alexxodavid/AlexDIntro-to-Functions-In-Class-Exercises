/**
 *
 * 
 * @param {number} ratePerHour
 * @returns {number} 
 */
export function dayRate(ratePerHour) {
    return ratePerHour * 8;
    }
    /**
     *
     * @param {number} budget
     * @param {number} ratePerHour
     * @returns {number} 
     */
    export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
    }
    /**
     * 
     *
     * @param {number} ratePerHour
     * @param {number} numDays
     * @param {number} discount
     * @returns {number} 
     */
    export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
      const dailyRate = dayRate(ratePerHour);
      const fullMonths = Math.floor(numDays / 22);
      const remainingDays = numDays % 22;
      const discountedPrice = fullMonths * 22 * dailyRate * (1 - discount);
      const normalPrice = remainingDays * dailyRate;
      return Math.ceil(discountedPrice + normalPrice);
    }
    