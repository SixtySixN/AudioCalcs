var timeoutId;
var autoCalculate = true;

function toggleAutoCalculate() {
    autoCalculate = !autoCalculate;
    document.getElementById('toggleButton').innerText = autoCalculate ? 'Turn Auto-Calculate Off' : 'Turn Auto-Calculate On';
}

function calculateSides(manual = false) {
    if (!autoCalculate && !manual) return;  // Only block automatic execution

    clearTimeout(timeoutId);  // Clear any existing timeout

    // Set a new timeout only for automatic execution
    if (!manual) {
        timeoutId = setTimeout(executeCalculation, 1000);
    } else {
        executeCalculation();
    }
}

function executeCalculation() {
    var hypotenuse = document.getElementById('hypotenuse').value;
    var angle = document.getElementById('angle').value;
    var observerHeight = document.getElementById('observerHeight').value;
    var offsetHeight = document.getElementById('offsetHeight').value;
    var offsetDepth = document.getElementById('offsetDepth').value;
    var offsetSeat = document.getElementById('offsetSeat').value;

    if (hypotenuse <= 0 || angle >= 90 || observerHeight < 0) {
        document.getElementById('result').innerHTML = 
            "Please enter valid values!";
        return;
    }

    var angleInRadians = angle * Math.PI / 180;
    var adjacent = Math.cos(angleInRadians) * hypotenuse;
    var opposite = Math.sin(angleInRadians) * hypotenuse;

    var totalHeight = parseFloat(opposite) + parseFloat(observerHeight) + parseFloat(offsetHeight) - parseFloat(offsetSeat);
    var totalDepth = parseFloat(adjacent) + parseFloat(offsetDepth);

    document.getElementById('result').innerHTML = 
    "x Distance: <span class='highlight'>" + totalDepth.toFixed(2) + 
    " m</span><br>z Height: <span class='highlight'>" + 
    totalHeight.toFixed(2) + " m</span>";
}


function clearFields() {
    document.getElementById('hypotenuse').value = '';
    document.getElementById('angle').value = 0;
   // document.getElementById('observerHeight').value = 1.32;
    document.getElementById('result').innerHTML = '';
    document.getElementById('hypotenuse').focus();
}

function clearOffsets() {
    document.getElementById('offsetHeight').value = 0;
    document.getElementById('offsetDepth').value = 0;
    document.getElementById('offsetSeat').value = 0;
}



