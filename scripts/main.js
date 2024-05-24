
// Get references to the elements
const draggableDiv = document.getElementById('draggable-div');
const headerX = document.getElementById('header-x');
const toggleLink = document.getElementById('toggle-msg');
const bodyMsg = document.getElementById('body-msg');
const noBTN = document.getElementById('btn2');
const yesBTN = document.getElementById('btn1');
const archive_23 = document.getElementById('2023-folder');
const sponsors24 = document.getElementById('sponsors-folder');
const exit_archive_23 = document.getElementById('exit-2023-archive');
const exit_sponsors = document.getElementById('exit-sponsors');
const exit_admins = document.getElementById('exit-admins');
const exit_admins23 = document.getElementById('exit-admins23');
const exit_admins22 = document.getElementById('exit-admins22');
const exit_admins24 = document.getElementById('exit-admins24');
const admins_folder = document.getElementById('admins-folder');
const admins23_folder = document.getElementById('admins23-folder');
const admins22_folder = document.getElementById('admins22-folder');
const admins24_folder = document.getElementById('admins24-folder');

// Arrays of values for the body msg 
const listC = ["68 65 6C 6C 6F 3F", "Do u know Project Code Kw?", "HlElO>>?", "Ever heard of 91TOR?"];

// Function to generate a random value from an array
function getRandomValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to update the content with random values
function updateContent() {
    bodyMsg.textContent = getRandomValue(listC);
}

function noBtnClicked() {
    if (bodyMsg.textContent === "Do u know Project Code Kw?") {

        window.location.href = 'https://projectcodekw.com/';
        draggableDiv.style.display = 'none';
    }
    else {
        draggableDiv.style.display = 'none';
    }
}

function yesBtnClicked() {
    const pc_logo = document.getElementById('pc-logo');

    if (bodyMsg.textContent === "Do u know Project Code Kw?") {
        document.body.style.backgroundColor = "#8bd8bd";
        draggableDiv.style.display = 'none';
    }
    else if (bodyMsg.textContent === "Ever heard of 91TOR?") {

        window.location.href = 'https://www.youtube.com/watch?v=CL7QGyT_xQ0&ab_channel=NPC3301';
        draggableDiv.style.display = 'none';
    }
    else {
        draggableDiv.style.display = 'none';
    }
}

// Function to show the message container
function showMessage() {

    draggableDiv.style.display = 'block';
    updateContent();
}


function hideMessage() {
    draggableDiv.style.display = 'none';
}

headerX.addEventListener('click', hideMessage);
noBTN.addEventListener('click', noBtnClicked);
yesBTN.addEventListener('click', yesBtnClicked);
exit_archive_23.addEventListener('click', hideArchive2023);

//FOR SPONSORS
exit_sponsors.addEventListener('click', hideSponsors24);


//FOR ADMINS
exit_admins.addEventListener('click', function() {
    hide(adminsContainer);
});
exit_admins23.addEventListener('click', function() {
    hide(admins23Container);
});
exit_admins24.addEventListener('click', function() {
    hide(admins24Container);
});
exit_admins22.addEventListener('click', function() {
    hide(admins22Container);
});

// Add a click event listener to the toggle link
toggleLink.addEventListener('click', showMessage);
archive_23.addEventListener('click', showArchive2023);

//SPONSORS
sponsors24.addEventListener('click', showSponsors24);

//FOR ADMINS
admins_folder.addEventListener('click', function() {
    show(adminsContainer);
});
admins23_folder.addEventListener('click', function() {
    show(admins23Container);
});
admins24_folder.addEventListener('click', function() {
    show(admins24Container);
});
admins22_folder.addEventListener('click', function() {
    show(admins22Container);
});

//NOTE PAD STUFF
const notepadToggle2 = document.getElementById('notepad-toggle2');
const notepadToggle1 = document.getElementById('notepad-toggle');
const notepadContainer = document.getElementById('notepad-container');
const exitX = document.getElementById('exit-note');
const archiveContainer = document.getElementById('archive-container');

//sponsors STUFF
const sponsorsContainer = document.getElementById('sponsors-container');

//admins STUFF
const adminsContainer = document.getElementById('admins-container');
const admins23Container = document.getElementById('admins23-container');
const admins22Container = document.getElementById('admins22-container');
const admins24Container = document.getElementById('admins24-container');

function hide(container){
    container.style.display = 'none';
}

function show(container) {
    container.style.display = 'block';
}

// Function to hide the message container
function hideNote() {
    notepadContainer.style.display = 'none';
}

// Function to show the message container
function showNote() {
    notepadContainer.style.display = 'block';
    updateContent();
}

function showArchive2023() {
    archiveContainer.style.display = 'block';
}

function showSponsors24() {
    sponsorsContainer.style.display = 'block';
}

function hideArchive2023() {
    archiveContainer.style.display = 'none';
}


function hideSponsors24() {
    sponsorsContainer.style.display = 'none';
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

    if (color.toLowerCase() === 'black') {
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


