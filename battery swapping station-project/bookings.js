document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Process the booking form submission
    document.getElementById('confirmation').style.display = 'block';
});
