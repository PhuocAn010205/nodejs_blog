// Function to get user input and sort alphabetically
function getUserInfoAndSort() {
    // Example: Prompt user for names (comma-separated)
    let userInput = prompt("Enter names separated by commas:");
    
    if (!userInput) {
        console.log("No input provided.");
        return;
    }

    // Split input into an array, trim whitespace, and sort alphabetically
    let names = userInput.split(",").map(name => name.trim()).sort();

    console.log("Sorted names:", names);
}

// Call the function
getUserInfoAndSort();