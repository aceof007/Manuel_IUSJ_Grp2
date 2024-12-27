document.addEventListener('DOMContentLoaded', () => {
    const professionalTableBody = document.getElementById('professionalTableBody');
    const professionalModal = document.getElementById('professionalModal');
    const modalTitle = document.getElementById('modalTitle');
    const addProfessionalBtn = document.getElementById('addProfessionalBtn');
    const closeModal = document.querySelector('.close');
    const professionalForm = document.getElementById('professionalForm');

    let professionals = []; // Array to hold professional objects

    // Function to display professionals in the table
    function displayProfessionals() {
        professionalTableBody.innerHTML = '';
        professionals.forEach((prof, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${prof.logo}" alt="${prof.name} Logo" width="50"></td>
                <td>${prof.name}</td>
                <td>${prof.sector}</td>
                <td>${prof.businessActivity}</td>
                <td>${prof.address}</td>
                <td>
                    <button onclick="editProfessional(${index})">Edit</button>
                    <button onclick="deleteProfessional(${index})">Delete</button>
                </td>
            `;
            professionalTableBody.appendChild(row);
        });
    }

    // Open modal to add a professional
    addProfessionalBtn.onclick = () => {
        modalTitle.textContent = 'Add Professional';
        professionalForm.reset();
        professionalModal.style.display = 'block';
    };

    // Close modal
    closeModal.onclick = () => {
        professionalModal.style.display = 'none';
    };

    // Handle form submission
    professionalForm.onsubmit = (e) => {
        e.preventDefault();
        const newProfessional = {
            logo: document.getElementById('logo').value,
            name: document.getElementById('name').value,
            sector: document.getElementById('sector').value,
            businessActivity: document.getElementById('businessActivity').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
        };
        professionals.push(newProfessional);
        displayProfessionals();
        professionalModal.style.display = 'none';
    };

    // Function to edit a professional
    window.editProfessional = (index) => {
        const prof = professionals[index];
        modalTitle.textContent = 'Edit Professional';
        document.getElementById('logo').value = prof.logo;
        document.getElementById('name').value = prof.name;
        document.getElementById('sector').value = prof.sector;
        document.getElementById('businessActivity').value = prof.businessActivity;
        document.getElementById('address').value = prof.address;
        document.getElementById('phone').value = prof.phone;
        document.getElementById('email').value = prof.email;
        professionalModal.style.display = 'block';
        professionalForm.onsubmit = (e) => {
            e.preventDefault();
            professionals[index] = {
                logo: document.getElementById('logo').value,
                name: document.getElementById('name').value,
                sector: document.getElementById('sector').value,
                businessActivity: document.getElementById('businessActivity').value,
                address: document.getElementById('address').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
            };
            displayProfessionals();
            professionalModal.style.display = 'none';
        };
    };

    // Function to delete a professional
    window.deleteProfessional = (index) => {
        if (confirm('Are you sure you want to delete this professional?')) {
            professionals.splice(index, 1);
            displayProfessionals();
        }
    };
});