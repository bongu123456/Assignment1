// Initial data
let hasPaid = true;
let hasCompletedBasics = false;

// Ternary operation
let enrollMessage = (hasPaid && hasCompletedBasics)
    ? "Enroll Now"
    : "Complete Requirements";

// Print the message
console.log(enrollMessage);
