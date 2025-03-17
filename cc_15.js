// Task 1: Base Structure Setup
document.addEventListener("DOMContentLoaded", () => {
    console.log("Risk Dashboard Loaded"); // Prints message to console when page loads

    // Selecting elements from the HTML
    const riskDashboard = document.getElementById("riskDashboard");
    const riskForm = document.getElementById("riskForm");
    const increaseRiskButton = document.getElementById("increaseRiskLevels");

// Task 2: Adding Risk Items Dynamically
riskForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents form from refreshing the page
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
    addRiskItem(riskName, riskLevel, department); // Calls function to add risk item
    riskForm.reset(); // Clears form fields after submission
});

// Function to create and add a new risk item
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div"); // Creates a div for the risk item
    riskCard.classList.add("riskCard", riskLevel.toLowerCase()); // Assigns class based on risk level

    // Adds risk details to the card
    riskCard.innerHTML = `
        <strong>${riskName}</strong> (${riskLevel})<br>
        Department: ${department}
        <button class="resolveBtn">Resolve</button>
    `;