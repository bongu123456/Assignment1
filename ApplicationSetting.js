const settings = {
    theme: "light",
    notifications: true,
    autoSave: false,
    language: "en"
  };
  
  
  // 1. Toggle theme between "light" and "dark"
  if (settings.theme === "light") {
    settings.theme = "dark";
  } else {
    settings.theme = "light";
  }
  
  console.log("After Toggling Theme:", settings.theme);
  
  
  // 2. Turn autoSave to true
  settings.autoSave = true;
  
  console.log("After Turning autoSave On:", settings.autoSave);
  
  
  // 3. Remove the notifications setting
  delete settings.notifications;
  
  console.log("After Removing Notifications:", settings);
  
  
  // 4. Freeze the settings object so it cannot be modified
  Object.freeze(settings);
  
  console.log("Settings Object is Frozen Now");
  
  // Trying to change a property after freeze (this will not work)
  settings.language = "fr"; 
  console.log("After Trying to Change Language:", settings.language);
  