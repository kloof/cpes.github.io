function updateTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const timeString = `${hours}:${minutes} ${ampm}`;
    
    document.getElementById('clock').textContent = timeString;
}

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Initial call to set the time immediately when the page loads
updateTime();
