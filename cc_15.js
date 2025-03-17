// Task 1: Base Structure Setup
document.addEventListener("DOMContentLoaded", () => {
    console.log("Risk Dashboard Loaded"); // Prints message to console when page loads

    // Selecting elements from the HTML
    // const riskDashboard = document.getElementById("riskDashboard"); // Duplicate declaration removed
    const riskForm = document.getElementById("riskForm");
    const increaseRiskButton = document.getElementById("increaseRiskLevels");
    const riskDashboard = document.getElementById("riskDashboard");

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

    // Task 3: Removing Risk Items
    riskCard.querySelector(".resolveBtn").addEventListener("click", (e) => {
        e.stopPropagation(); /// Task 6: Prevents event bubbling
        riskDashboard.removeChild(riskCard); // Removes the risk card when resolved
    });

    riskDashboard.appendChild(riskCard); // Adds the new risk item to the dashboard
}

 // Task 5: Implementing Bulk Updates
 increaseRiskButton.addEventListener("click", () => {
    document.querySelectorAll(".riskCard").forEach(card => {
        let newRiskLevel = "High"; // Default to High

        // Task 4: Categorizing Risks by Level
        if (card.classList.contains("low")) newRiskLevel = "Medium";
        else if (card.classList.contains("medium")) newRiskLevel = "High";

        card.className = "riskCard " + newRiskLevel.toLowerCase(); // Updates risk level class
        card.innerHTML = card.innerHTML.replace(/\(.*?\)/, `(${newRiskLevel})`); // Updates risk level text

        // Reattach resolve button event listener
        card.querySelector(".resolveBtn").addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents event bubbling
            riskDashboard.removeChild(card); // Removes the risk card when resolved
        });
    });
});
});
