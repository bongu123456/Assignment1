// Initial data
let isLoggedIn = true;
let isProfileComplete = false;
let message;

// Check login 
if (!isLoggedIn) {
    message = "Please login";
} else if (!isProfileComplete) {
    message = "Complete your profile";
} else {
    message = "Welcome back!";
}

console.log(message);
