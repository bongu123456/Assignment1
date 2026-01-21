// Test data
const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1️⃣ Filter courses with name length > 5
const longCourses = courses.filter(course => course.length > 5);
console.log("Courses with length > 5:", longCourses);

// 2️⃣ Convert all course names to uppercase
const upperCaseCourses = courses.map(course => course.toUpperCase());
console.log("Courses in uppercase:", upperCaseCourses);

// 3️⃣ Generate a single string with | separator
const courseString = upperCaseCourses.reduce((acc, course, index) => {
    return index === 0 ? course : acc + " | " + course;
}, "");
console.log("Combined course string:", courseString);

// 4️⃣ Find the course "react"
const findReact = courses.find(course => course === "react");
console.log("Found course:", findReact);

// 5️⃣ Find index of "node"
const indexOfNode = courses.findIndex(course => course === "node");
console.log("Index of 'node':", indexOfNode);
