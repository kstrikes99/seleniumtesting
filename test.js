// Dropdown menu functionality
document.getElementById('page1-link').addEventListener('mouseover', function() {
    document.getElementById('dropdown-menu').classList.add('show');
});

document.getElementById('page1-link').addEventListener('mouseout', function() {
    setTimeout(function() {
        document.getElementById('dropdown-menu').classList.remove('show');
    }, 300);
});

document.getElementById('dropdown-menu').addEventListener('mouseover', function() {
    document.getElementById('dropdown-menu').classList.add('show');
});

document.getElementById('dropdown-menu').addEventListener('mouseout', function() {
    setTimeout(function() {
        document.getElementById('dropdown-menu').classList.remove('show');
    }, 300);
});

// Form validation and submission
function validateForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var nameError = document.getElementById('name-error');
    var phoneError = document.getElementById('phone-error');

    nameError.style.display = name ? 'none' : 'block';
    phoneError.style.display = phone ? 'none' : 'block';

    if (name && phone) {
        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all required fields.');
    }
}

// Attach the validateForm function to the button's onclick event
document.getElementById('submit-button').addEventListener('click', validateForm);
