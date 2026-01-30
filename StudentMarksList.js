// Test data
const marks = [78, 92, 35, 88, 40, 67];

// 1️⃣ Filter marks ≥ 40 (pass marks)
const passMarks = marks.filter(mark => mark >= 40);
console.log("Pass marks:", passMarks);

// 2️⃣ Add 5 grace marks to each student
const graceMarks = marks.map(mark => mark + 5);
console.log("Marks after adding grace:", graceMarks);

// 3️⃣ Find highest mark using reduce
const highestMark = marks.reduce((max, mark) => (mark > max ? mark : max), marks[0]);
console.log("Highest mark:", highestMark);

// 4️⃣ Find first mark below 40
const firstFail = marks.find(mark => mark < 40);
console.log("First mark below 40:", firstFail);

// 5️⃣ Find index of mark 92
const indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of mark 92:", indexOf92);
