var colors = [
    'rgba(255, 255, 150, 0.95)', 
    'rgba(150, 255, 150, 0.95)', 
    'rgba(150, 150, 255, 0.95)', 
    'rgba(255, 150, 150, 0.95)', 
    'rgba(255, 200, 150, 0.95)'
];

var rotations = [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5];

document.querySelectorAll('.stickyNote').forEach(function(note) {
    if(!note.id.includes('portfolio')) {
    note.addEventListener('click', function() {
        var color = note.getAttribute('data-color');
        var noteDetails = document.getElementById('noteDetails');
        var noteText = document.getElementById('noteText');
        var clickedText = `#${note.id} p`;
        

        noteDetails.style.display = 'flex';
        noteDetails.style.backgroundColor = color;
        noteText.innerHTML = document.querySelector(clickedText).innerHTML;
        note.style.display = 'none';
        
    });
}
});


document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('noteDetails').style.display = 'none';
    document.querySelectorAll('.stickyNote').forEach(function(note) {
        if(!note.id.includes('portfolio')) {
            note.style.display = 'flex';
            note.style.transform = note.originalTransform;
        }
    });
});

document.querySelectorAll('.stickyNote').forEach(function(note) {
    note.addEventListener('mouseenter', function() {
        note.style.transform = `${note.originalTransform} rotateX(35deg)`;
        note.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.8)';
        note.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
    });
    
    note.addEventListener('mouseleave', function() {
       
        note.style.transform = note.originalTransform;
        note.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.3)';
        note.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
        
    });
});


function randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setUpBlackboard() {
    var stickyContainers = document.querySelectorAll('.stickyContainer')
    
    stickyContainers.forEach(function (container) {
        var stickyNotes = container.querySelectorAll('.stickyNote');

        stickyNotes.forEach(function (note) {
            var randomColor = randomize(colors);
            var randomRotation = randomize(rotations);
            var maxX = container.clientWidth - note.offsetWidth;
            var maxY = container.clientHeight - note.offsetHeight;
            var randomX = Math.random() * maxX;
            var randomY = Math.random() * maxY;
            var originalTransform = 'rotate(' + randomRotation + 'deg)';

            note.setAttribute('data-color', randomColor);
            note.style.left = randomX + 'px';
            note.style.top = randomY + 'px';

            note.style.backgroundColor = randomColor;
            note.style.transform = originalTransform;
            note.originalTransform = originalTransform;
        });
    });
};


setUpBlackboard();
window.addEventListener('resize', setUpBlackboard);


