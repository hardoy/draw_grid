
function createGrid() {
    var gridSize = window.prompt("Please, enter the size of the grid.");
    var dotSize = 700 / gridSize;
    /*var containerSize = (30 * gridSize) + 2 * gridSize;*/
    for (i = 0; i < gridSize * gridSize; i++) {
        $('.container').append('<div class="dot"></div>');
    };
    $('.dot').css("height", dotSize);
    $('.dot').css("width", dotSize);
};

function draw() {
    $('.dot').mouseenter(function() {
        $(this).css("background-color", "#FF3D40");
    });
};

function resetGrid() {
    $('.reset').click(function() {
        $('.dot').remove();
        createGrid();
        draw();
    });
}

function main() {
    createGrid();
    draw();
    resetGrid();
};

$(document).ready(main());
