// Updated ASCII art for AAYUSH
const asciiArt = `█████╗   █████╗ ██╗   ██╗██╗   ██╗███████╗██╗  ██╗
██╔══██╗ ██╔══██╗╚██╗ ██╔╝██║   ██║██╔════╝██║  ██║
███████║ ███████║ ╚████╔╝ ██║   ██║███████╗███████║
██╔══██║ ██╔══██║  ╚██╔╝  ██║   ██║╚════██║██╔══██║
██║  ██║ ██║  ██║   ██║   ╚██████╔╝███████║██║  ██║
╚═╝  ╚═╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝`;

const asciiContainer = document.getElementById("ascii-art");

// Fixed ASCII art alignment implementation
const rows = asciiArt.split("\n");

// Create monospace container with fixed-width characters
rows.forEach((row) => {
  const rowDiv = document.createElement("div");
  rowDiv.className = "ascii-row";

  [...row].forEach((char, index) => {
    const charDiv = document.createElement("div");
    charDiv.className = "ascii-char";
    charDiv.textContent = char;
    charDiv.style.setProperty("--delay", index % 10); // Cycle delay for performance
    rowDiv.appendChild(charDiv);
  });

  asciiContainer.appendChild(rowDiv);
});

// Update time in Back to the Future style
function updateTime() {
  const now = new Date();
  const timeDisplay = document.getElementById("current-time");
  const dateDisplay = document.getElementById("current-date");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  timeDisplay.textContent = `${hours}:${minutes}`;
  dateDisplay.textContent = `${month}-${day}-${year}`;
}

// Initial time update
updateTime();

// Update time every minute
setInterval(updateTime, 60000);
