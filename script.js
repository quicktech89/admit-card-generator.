// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('admitForm').addEventListener('submit', submitForm);
});

function submitForm(e) {
    e.preventDefault();

    // Get values from the form
    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;

    // Save data to Firebase
    saveAdmitCardData(name, studentClass);

    // Show a success message
    document.getElementById('message').innerText = `Admit Card Generated for ${name}, Class: ${studentClass}`;

    // Reset form
    document.getElementById('admitForm').reset();
}

// Function to save the data in Firebase
function saveAdmitCardData(name, studentClass) {
    const newAdmitCardRef = database.ref('admitCards').push();
    newAdmitCardRef.set({
        name: name,
        class: studentClass
    });
}
