// 7 kyu: Two Oldest Ages
/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
*/

// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages: number[]): number[] {
  let oldestAge = 0,
    secondOldestAge = 0;

  ages.forEach((age) => {
    if (age > oldestAge) {
      secondOldestAge = oldestAge;
      oldestAge = age;
    } else if (age > secondOldestAge) {
      secondOldestAge = age;
    }
  });
  return [secondOldestAge, oldestAge];
}
