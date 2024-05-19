//Create a shopping list manager that allows users to add, remove, and display items on their shopping list using arrays and loops in JavaScript.


// Shopping list array to store items
let shoppingList = [];

// To add an item to the shopping list
function addItem(item) {
    shoppingList.push(item);
    console.log(`${item} added to the shopping list.`);
}

// To remove an item from the shopping list
function removeItem(itemNumber) {
    if (itemNumber >= 1 && itemNumber <= shoppingList.length) {
        const removedItem = shoppingList.splice(itemNumber - 1, 1);
        console.log(`${removedItem} removed from the shopping list.`);
    } else {
        console.log("Invalid item number.");
    }
}

// To display the current items on the shopping list
function displayList() {
    console.log("Shopping List:");
    shoppingList.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

// Main function to manage the shopping list
function shoppingListManager() {
    console.log("Welcome to the Shopping List Manager!\n");

    let choice;
    do {
        console.log("1. Add item");
        console.log("2. Remove item");
        console.log("3. Display list");
        console.log("4. Exit");

        choice = parseInt(prompt("Enter your choice:"));

        switch (choice) {
            case 1:
                const itemToAdd = prompt("Enter the item to add:");
                addItem(itemToAdd);
                break;
            case 2:
                const itemToRemove = parseInt(prompt("Enter the item number to remove:"));
                removeItem(itemToRemove);
                break;
            case 3:
                displayList();
                break;
            case 4:
                console.log("Goodbye!");
                break;
            default:
                console.log("Invalid choice. Please enter a number between 1 and 4.");
        }
    } while (choice !== 4);
}

// Call the main function to start the shopping list manager
shoppingListManager();