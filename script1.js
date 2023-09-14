document.addEventListener("DOMContentLoaded", function() {
    const formSections = document.querySelectorAll('.form');
    const nextButtons = document.querySelectorAll('.nextBtn');
    const backButtons = document.querySelectorAll('.backBtn');
    let currentIndex = 0;

    // Function to show the current form section
    function showFormSection(index) {
        formSections.forEach((section, i) => {
            if (i === index) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Initialize by showing the first form section
    showFormSection(currentIndex);

    // Add click event listeners for the "Next" buttons
    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Hide the current form section
            formSections[currentIndex].style.display = 'none';

            // Increment the index to move to the next form section
            currentIndex++;

            // Show the next form section
            showFormSection(currentIndex);

            // Hide or show "Back" and "Submit" buttons based on the current index
            if (currentIndex > 0) {
                backButtons[index].style.display = 'inline-block';
            } else {
                backButtons[index].style.display = 'none';
            }

            if (currentIndex === formSections.length - 1) {
                nextButtons[index].style.display = 'none';
            }
        });
    });

    // Add click event listeners for the "Back" buttons
    backButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Hide the current form section
            formSections[currentIndex].style.display = 'none';

            // Decrement the index to move to the previous form section
            currentIndex--;

            // Show the previous form section
            showFormSection(currentIndex);

            // Hide or show "Back" and "Submit" buttons based on the current index
            if (currentIndex === 0) {
                backButtons[index].style.display = 'none';
            } else {
                backButtons[index].style.display = 'inline-block';
            }

            if (currentIndex < formSections.length - 1) {
                nextButtons[index].style.display = 'inline-block';
            }
        });
    });
});
