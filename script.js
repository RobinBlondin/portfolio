var colors = [
    'rgba(255, 255, 150, 0.95)', 
    'rgba(150, 255, 150, 0.95)', 
    'rgba(150, 150, 255, 0.95)', 
    'rgba(255, 150, 150, 0.95)', 
    'rgba(255, 200, 150, 0.95)'
];

var rotations = [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5];

function setUpBlackboard() {
    var stickyContainers = document.querySelectorAll('.stickyContainer')
    var colors = ['#ffeb3b', '#ff4081', '#2196f3', '#4caf50', '#ff9800', '#03a9f4'];
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

document.querySelectorAll('.stickyNote').forEach(function(note) {
    note.addEventListener('click', function() {
        var color = note.getAttribute('color');
        var noteDetails = document.getElementById('noteDetails');
        var noteText = document.getElementById('noteText');
        var clickedText = `#${note.id} p`;

        console.log(clickedText);
        noteDetails.style.display = 'flex';
        noteDetails.style.backgroundColor = color;
        noteText.innerHTML = document.querySelector(clickedText).innerHTML;
        note.style.display = 'none';
    });
});


document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('noteDetails').style.display = 'none';
    document.querySelectorAll('.stickyNote').forEach(function(note) {
        note.style.display = 'block';
    });
});

