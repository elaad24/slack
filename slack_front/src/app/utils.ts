export function findHighest(numbers: number[]): number {
    let highest = numbers[0]; // Assume the first number is the highest
    
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > highest) {
        highest = numbers[i];
      }
    }
    
    return highest;
  }
  
  export function findLowest(numbers: number[]): number {
    let lowest = numbers[0]; // Assume the first number is the lowest
    
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < lowest) {
        lowest = numbers[i];
      }
    }
    
    return lowest;
  }