const user = {
    id: 101,
    name: "Ravi",
    email: "ravi@gmail.com",
    role: "student",
    isActive: true
  };
  
  
  
  // 1. Read and print user’s name and email
  console.log("User Name:", user.name);
  console.log("User Email:", user.email);
  
  
  
  // 2. Add a new property lastLogin
  user.lastLogin = "2026-01-01";
  
  console.log("After Adding lastLogin:", user);
  
  
  
  // 3. Update role from student to admin
  user.role = "admin";
  
  console.log("After Updating role:", user);
  
  
  
  // 4. Delete the isActive property
  delete user.isActive;
  
  console.log("After Deleting isActive:", user);
  
  
  
  // 5. Use Object.keys() to list remaining fields
  const keys = Object.keys(user);
  
  console.log("Remaining Fields:", keys);
  