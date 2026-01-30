// Test data
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1️⃣ Filter temperatures above 35
const above35 = temperatures.filter(temp => temp > 35);
console.log("Temperatures above 35:", above35);

// 2️⃣ Convert all temperatures from Celsius to Fahrenheit
const toFahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", toFahrenheit);

// 3️⃣ Calculate average temperature
const total = temperatures.reduce((sum, temp) => sum + temp, 0);
const average = total / temperatures.length;
console.log("Average temperature:", average);

// 4️⃣ Find first temperature above 40
const firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First temperature above 40:", firstAbove40);

// 5️⃣ Find index of temperature 28
const indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of temperature 28:", indexOf28);
