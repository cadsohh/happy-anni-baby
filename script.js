const reasons = [
    "thank you for always being so patient with me",
    "thank you for being so understanding",
    "thank you for being my biggest cheerleader",
    "thank you for being so proud of us",
    "thank you for always thinking about us",
    "thank you for always letting me sleep on your arm till it goes numb (hehe)",
    "thank you for being the smartest and bestest boy",
    "thank you for loving me more than Brawl Stars and FIFA",
    "thank you for remembering my likes and dislikes",
    "thank you for making me laugh all the time you funny weirdo!",
    "thank you for holding me so close to you",
    "thank you for loving me when I'm annoying",
    "thank you for watching rom-coms with me",
    "thank you for being my private chauffeur",
    "thank you for being the best boyfriend ever, I love you baba"
  ];
  
  function showReason() {
    const reasonText = document.getElementById("reason");
    const randomIndex = Math.floor(Math.random() * reasons.length);
    reasonText.textContent = reasons[randomIndex];
  }
  
  // Floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.textContent = "💖";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 800);
  