function setUpBlackboard() {
    var stickyContainers = document.querySelectorAll('.stickyContainer')
    var colors = ['#ffeb3b', '#ff4081', '#2196f3', '#4caf50', '#ff9800', '#9c27b0', '#03a9f4'];
    var rotations = [-6, -5. - 3, -2, -1, 0, 1, 2, 3, 4, 5];
    stickyContainers.forEach(function (container) {
        var stickyNotes = container.querySelectorAll('.stickyNote');

        stickyNotes.forEach(function (note) {
            
            var randomColor = randomize(colors);
            var randomRotation = randomize(rotations);
            var maxX = container.clientWidth - note.offsetWidth;
            var maxY = container.clientHeight - note.offsetHeight;
            

            var randomX = Math.random() * maxX;
            var randomY = Math.random() * maxY;

            note.setAttribute('color', randomColor);
            note.style.left = randomX + 'px';
            note.style.top = randomY + 'px';

            note.style.backgroundColor = randomColor;
            note.style.transform = 'rotate(' + randomRotation + 'deg)';
        });
    });
};

setUpBlackboard();


window.addEventListener('resize', setUpBlackboard);


function randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
