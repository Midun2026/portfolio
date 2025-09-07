function toggleFullSize() {
    var smallImage = document.getElementById('smallImage');
    if (smallImage.classList.contains('full-size')) {
        // If the image is already full size, revert to the small size
        smallImage.classList.remove('full-size');
        // Remove the "Click image to enlarge" message
        var clickMessage = document.getElementById('clickMessage');
        if (clickMessage) {
            clickMessage.style.display = 'none';
        }
    } else {
        // If the image is small, make it full size
        smallImage.classList.add('full-size');
        // Show the "Click image to enlarge" message
        var clickMessage = document.getElementById('clickMessage');
        if (clickMessage) {
            clickMessage.style.display = 'block';
        }
    }
}
