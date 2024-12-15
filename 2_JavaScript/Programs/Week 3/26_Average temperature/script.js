// Complete the function calculateAverage
/*Problem statement
Suppose you're given an array of objects representing the weather conditions of different cities. 
Create a function with name calculateAverage that takes threshold pressure as a parameter and returns the 
average temperature of the cities with a pressure value above a certain threshold.
 Please note that the function should only take one parameter.


Requirements

The function should have access to the weather object. Specifically, your code should be able to:
The function should have access to the weather array of objects.
Filter the weather array to include only the objects where the pressure value is equal to or above the given threshold pressure.
Extract the temperature values from the filtered objects and store them in a new array with the help of the map method.
Reduce the temperature values to find the total temperature of the remaining cities.
Determine the number of cities that meet the pressure condition.
Calculate the average temperature by dividing the total sum of temperatures by the number of cities.
Return the average temperature rounded to one decimal place. e.g., "45.3".


The array is of the format:
[
     { city: 'New York', temperature: 50, pressure: 1015 },

     { city: 'Los Angeles', temperature: 70, pressure: 1010 },

     { city: 'Chicago', temperature: 40, pressure: 1012 },

     { city: 'Houston', temperature: 75, pressure: 1020 },

     { city: 'Miami', temperature: 80, pressure: 1017 },
]*/
const weather = [
  { city: "New York", temperature: 50, pressure: 1015 },
  { city: "Los Angeles", temperature: 70, pressure: 1010 },
  { city: "Chicago", temperature: 40, pressure: 1012 },
  { city: "Houston", temperature: 75, pressure: 1020 },
  { city: "Miami", temperature: 80, pressure: 1017 },
];
const pressureThreshold = 1015;
function calculateAverage(pressureThreshold) {
  const out = weather.filter(function (we) {
    return we.pressure >= pressureThreshold;
  });
  const tem = out.map(function (we) {
    return we.temperature;
  });
  const fin = tem.reduce(function (acc, num) {
    return acc + num;
  }, 0);
  //Implement your function here
  const ans = fin / tem.length;
  return ans.toFixed(1);
}
console.log(calculateAverage(pressureThreshold));
//Output : 68.3
