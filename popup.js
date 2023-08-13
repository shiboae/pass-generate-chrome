document.addEventListener("DOMContentLoaded", function () {
    const currentTimeElement = document.getElementById("currentTime");
    const currentDateElement = document.getElementById("currentDate");
    const greetingElement = document.getElementById("greeting");
    
    // Display Current Time
    function updateCurrentTime() {
      const currentTime = new Date().toLocaleTimeString();
      currentTimeElement.textContent = currentTime;
    }

    // Display Current Date
    function updateCurrentDate() {
    const currentDate = new Date().toLocaleDateString();
    currentDateElement.textContent = currentDate;
    }

    function getGreeting() {
        const currentHour = new Date().getHours();
        let greeting = "";
    
        if (currentHour >= 4 && currentHour < 12) {
          greeting = "Good Morning";
        } else if (currentHour >= 12 && currentHour < 16) {
          greeting = "Good Afternoon";
        } else if (currentHour >= 16 && currentHour < 20) {
          greeting = "Good Evening";
        } else {
          greeting = "Good Night"
        }
    
        return `${greeting}, Stranger!`;
      }

    // Password Generator Function
    function generatePassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
    }

    // Button to Generate Password
    const generatePasswordButton = document.getElementById("generatePassword");
    const passwordDisplay = document.getElementById("passwordDisplay");

    const passwordLengthSlider = document.getElementById("passwordLengthSlider");
    const passwordLengthDisplay = document.getElementById("passwordLengthDisplay");

    passwordLengthSlider.addEventListener("input", function () {
    const newPasswordLength = parseInt(passwordLengthSlider.value);
    passwordLengthDisplay.textContent = newPasswordLength;
    });
    
    generatePasswordButton.addEventListener("click", function () {
        const newPasswordLength = parseInt(passwordLengthSlider.value);
        const newPassword = generatePassword(newPasswordLength);
        passwordDisplay.textContent = newPassword;
    });

    // Copy to Clipboard Button
    const copyToClipboardButton = document.getElementById("copyToClipboard");

    copyToClipboardButton.addEventListener("click", function () {
    const passwordText = passwordDisplay.textContent;
    if (passwordText) {
      copyToClipboard(passwordText);
      copyToClipboardButton.textContent = "Copied!";
      setTimeout(() => {
        copyToClipboardButton.textContent = "Copy to Clipboard";
      }, 1500); 
    }
    });
  
    function copyToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    }

    // Update Current Time Every Second
    updateCurrentTime();
    updateCurrentDate();
    greetingElement.textContent = getGreeting();

    setInterval(updateCurrentTime, 1000);
    setInterval(updateCurrentDate, 60000); 
  });
  