
// Get references to the elements
const draggableDiv = document.getElementById('draggable-div');
const headerX = document.getElementById('header-x');
const toggleLink = document.getElementById('toggle-msg');
const bodyMsg = document.getElementById('body-msg');
const noBTN = document.getElementById('btn2');
const yesBTN = document.getElementById('btn1');


// Arrays of values for the body msg 
const listC = ["Do you like Cats?", "Are you a ROBOT??", "Do you know POKI?"];

// Function to generate a random value from an array
function getRandomValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to update the content with random values
function updateContent() {
    bodyMsg.textContent = getRandomValue(listC);
}

// Function to hide the message container
function hideMessage() {
    draggableDiv.style.display = 'none';
}

// Function to show the message container
function showMessage() {
    draggableDiv.style.display = 'block';
    updateContent();
}

// Add a click event listener to the "X" button
headerX.addEventListener('click', hideMessage);
noBTN.addEventListener('click', hideMessage);
yesBTN.addEventListener('click', hideMessage);

// Add a click event listener to the toggle link
toggleLink.addEventListener('click', showMessage);

//NOTE PAD STUFF
// Get references to the elements
const notepadToggle2 = document.getElementById('notepad-toggle2');
const notepadToggle1 = document.getElementById('notepad-toggle');
const notepadContainer = document.getElementById('notepad-container');
const exitX = document.getElementById('exit-note');


// Function to hide the message container
function hideNote() {
    notepadContainer.style.display = 'none';
}

// Function to show the message container
function showNote() {
    notepadContainer.style.display = 'block';
    updateContent();
}

// Add a click event listener to the "X" button
exitX.addEventListener('click', hideNote);


// Add a click event listener to the toggle link
notepadToggle1.addEventListener('click', showNote);
notepadToggle2.addEventListener('click', showNote);


// NOTEPAD COLOR
// Get references to the elements
const notepadInput = document.getElementById('notepad-input');
const cpesWhite = document.getElementById('cpes-white'); 
const cpesBlue = document.getElementById('cpes-blue'); 

// Get references to the elements of the captions
const columnHeaders = document.querySelectorAll('.column header');

// Function to change the body background color and image source
function changeBackgroundColorAndImage(color) {
    document.body.style.backgroundColor = color;

    // Check if the background color is white
    if (color.toLowerCase() === 'white') {
        // Change the image source to a new image
        cpesWhite.style.display = 'none';
        cpesBlue.style.display = 'block';
    } else {
        // Reset the image source to the default image
        cpesWhite.style.display = 'block';
        cpesBlue.style.display = 'none';
    }

    if (color.toLowerCase()==='black')
    {
        columnHeaders.forEach(header => {
            header.style.color = 'white';
        });
    }
}

// Add an input event listener to the textarea
notepadInput.addEventListener('input', () => {
    const userInput = notepadInput.value.trim().toLowerCase();

    // Check if the user input is a valid color name
    if (isValidColor(userInput)) {
        changeBackgroundColorAndImage(userInput);
    } else {
        // Reset to default background color and image
        changeBackgroundColorAndImage('');
    }
});

// Function to validate if the user input is a valid color name
function isValidColor(color) {
    const validColors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'white', 'black', 'grey']; // Add more valid colors as needed
    return validColors.includes(color);
}


