const messages = [
    "I have something very important to ask you...",
    "STOP CLICKING NO",
    "Are you sure? you wont find tall bff again",
    "Just say yes already!",
    "I won't stop asking 💀",
    "CAN YOU STOP CLICKING NO",
    "Pretty please?",
    "I'll keep asking forever🤣",
    "Just Say Yes Gurl",
    "Say yes😈",
];

let messageIndex = 0;
let yesButtonSize = 16; // Initial font size for the "Yes" button
let hamsterSound = new Audio("https://www.myinstants.com/media/sounds/sad-hamster.mp3");
let hamsterPlayed = false; // Track if the sound played

hamsterSound.volume = 0.5; // Set hamster sound to 50% volume

document.getElementById('proposeBtn').addEventListener('click', function() {
    document.getElementById('proposal').classList.remove('hidden');
    this.classList.add('hidden');

    // Update the proposal text
    document.querySelector("#proposal h2").textContent = "Will You Be My Best Friend Forever?";
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('proposal').classList.add('hidden');
    document.getElementById('response').classList.remove('hidden');

    // Change the main message to "Happy BFF Day!"
    document.getElementById('message').textContent = "💖 Best Friends Forever! 🎉";
    document.getElementById('message').style.fontSize = "22px";
    document.getElementById('message').style.color = "#2ecc71"; // Green color

    // Stop hamster sound
    hamsterSound.pause();
    hamsterSound.currentTime = 0;

    // Show happy GIF
    let gif = document.createElement('img');
    gif.src = "https://media.giphy.com/media/uDljXVi1w6Xmg/giphy.gif?cid=790b7611y4oy6615r6gzckvqtdwna8l99i48udugieic45y8&ep=v1_gifs_search&rid=giphy.gif&ct=g"; // Happy GIF
    gif.style.width = "100%";
    gif.style.borderRadius = "10px";
    document.getElementById('response').appendChild(gif);

    // Add love message **AFTER CLICKING YES**
    let loveMessage = document.createElement("p");
    loveMessage.innerHTML = `You're not just my sister, but my best friend too`;

    // Apply styling for readability
    loveMessage.style.fontSize = "16px";
    loveMessage.style.color = "#444";
    loveMessage.style.fontFamily = "Georgia, serif";
    loveMessage.style.fontStyle = "italic";
    loveMessage.style.textAlign = "center";
    loveMessage.style.marginTop = "15px";
    loveMessage.style.lineHeight = "1.8";
    loveMessage.style.background = "rgba(255, 182, 193, 0.2)";
    loveMessage.style.padding = "10px";
    loveMessage.style.borderRadius = "10px";

    document.getElementById('response').appendChild(loveMessage);
});

document.getElementById('noBtn').addEventListener('click', function() {
    // Change the message
    messageIndex = (messageIndex + 1) % messages.length;
    document.getElementById('message').textContent = messages[messageIndex];

    // Increase the size of the "Yes" button
    yesButtonSize += 2;
    document.getElementById('yesBtn').style.fontSize = `${yesButtonSize}px`;

    // Move the "No" button randomly to make it harder to click
    const noBtn = document.getElementById('noBtn');
    noBtn.style.position = 'relative';
    noBtn.style.left = `${Math.random() * 20 - 10}px`;
    noBtn.style.top = `${Math.random() * 20 - 10}px`;

    // Play hamster sound only on the first "No" click
    if (!hamsterPlayed) {
        hamsterSound.loop = true; // Keep playing until "Yes" is clicked
        hamsterSound.play();
        hamsterPlayed = true; // Prevent multiple triggers
    }

    // Show sad hamster GIF
    let sadHamster = document.getElementById("sadHamster");
    if (!sadHamster) {
        sadHamster = document.createElement("img");
        sadHamster.id = "sadHamster";
        sadHamster.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmdnZW42aTZ1OTBwN3h1ZWNheDZtdXA2YW9iMzhqbjV5cGNwaTJmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/98MaHVwJOmWMz4cz1K/giphy.gif";
        sadHamster.style.width = "100%";
        sadHamster.style.borderRadius = "10px";
        sadHamster.style.marginTop = "10px";
        document.getElementById('proposal').appendChild(sadHamster);
    }
});
