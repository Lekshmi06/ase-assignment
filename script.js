// Function to change background color
function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#f4ff33", "#33fff0"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
   
}

// Add event listener to button
document.getElementById("changeColorBtn").addEventListener("click", changeBackgroundColor);
