document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var firstImage = document.getElementById('firstImage');
    var secondImage = document.getElementById('secondImage');
    var thirdImage = document.getElementById('thirdImage');
    var myAudio = document.getElementById('myAudio'); // Added this line

    // First image initially
    firstImage.style.display = 'block';
    secondImage.style.display = 'none';
    thirdImage.style.display = 'none';

    // Click event for the button
    toggleButton.addEventListener('click', function () {
        // Determine which image is currently displayed and toggle to the next one
        if (firstImage.style.display === 'block') {
            firstImage.style.display = 'none';
            secondImage.style.display = 'block';
            thirdImage.style.display = 'none';
        } else if (secondImage.style.display === 'block') {
            firstImage.style.display = 'none';
            secondImage.style.display = 'none';
            thirdImage.style.display = 'block';
        } else {
            // If the third image is currently displayed, loop back to the first one
            firstImage.style.display = 'block';
            secondImage.style.display = 'none';
            thirdImage.style.display = 'none';
        }

        // Play the audio when the button is clicked
        myAudio.play();
    });
});
