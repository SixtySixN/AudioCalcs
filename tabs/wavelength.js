// Function to calculate the path offset and delay time
function calculateWavelength() {
    // Get values from the input fields
    const frequency = parseFloat(document.getElementById("frequency").value) || 0;
  
    // Calculate the wavelength time
    const waveLength = (343 / frequency); // Speed of sound in air is approximately 343 m/s
    const fullDelayTime = ((343 / frequency)/343) * 1000; // Convert to milliseconds
    const quarterWavelength = (343 / frequency)/4;
    const quarterDelayTime = (((343 / frequency)/343) * 1000)/4; // Convert to milliseconds
    const halfWavelength = (343 / frequency)/2;
    const halfDelayTime = (((343 / frequency)/343) * 1000)/2; // Convert to milliseconds
    // Display the results
    displayWaveResults(waveLength, halfWavelength, quarterWavelength, fullDelayTime, halfDelayTime, quarterDelayTime);
}

function displayWaveResults(waveLength, halfWavelength, quarterWavelength, fullDelayTime, halfDelayTime, quarterDelayTime) {
    // Get the existing result container
    const resultContainer = document.getElementById("waveResults");

    resultContainer.innerHTML = `
    <div style="width: 500px;">
        <div style="display: table; margin-left: 20px;">

                  <div style="display: table-row;">
                <div style="display: table-cell; padding-right: 10px;font-size: larger;"><label><strong>Wavelength:</strong></label></div>
                <div style="display: table-cell; color: green;font-size: larger;"><strong>${waveLength.toFixed(2)} m /</strong></div>
                <div style="display: table-cell; color: green;font-size: larger;"><strong>&nbsp; ${fullDelayTime.toFixed(2)} m/s</strong></div>
                </div>
                        <div style="display: table-row;">
                <div style="display: table-cell; padding-right: 10px;"><label><strong>1/2 Wavelength:</strong></label></div>
                <div style="display: table-cell;">${halfWavelength.toFixed(2)} m</div>
                <div style="display: table-cell;">/ ${halfDelayTime.toFixed(2)} m/s</div>
            </div>
            <div style="display: table-row;">
                <div style="display: table-cell; padding-right: 10px;"><label><strong>1/4 Wavelength:</strong></label></div>
                <div style="display: table-cell;">${quarterWavelength.toFixed(2)} m</div>
                <div style="display: table-cell;">/ ${quarterDelayTime.toFixed(2)} m/s</div>
            </div>

        </div>
    </div>`;
}
// Function to clear all fields and reset results
function clearWaveLength() {
    document.getElementById("frequency").value = "";

    const resultContainer = document.getElementById("waveResults");
    if (resultContainer) {
        resultContainer.innerHTML = "";
    }
}


//Distance to delay Time
function calculateDelay() {
    // Get values from the input fields
    const distance = parseFloat(document.getElementById("distance").value) || 0;
  
    // Calculate the wavelength time
    const delayTime = (distance/343) * 1000; // Speed of sound in air is approximately 343 m/s


    // Display the results
    displayDelayResults(delayTime);
}

function displayDelayResults(delayTime) {
    // Get the existing result container
    const resultContainer = document.getElementById("delayResults");

    resultContainer.innerHTML = `
    <div style="width: 500px;">
        <div style="display: table; margin-left: 20px;">

                  <div style="display: table-row;">
                <div style="display: table-cell; padding-right: 10px;font-size: larger;"><label><strong>Delay Time:</strong></label></div>
                <div style="display: table-cell; color: green;font-size: larger;"><strong>${delayTime.toFixed(2)} m/s</strong></div>
            </div>


        </div>
    </div>`;
}
// Function to clear all fields and reset results
function clearFields() {
    document.getElementById("distance").value = "";

    const resultContainer = document.getElementById("delayResults");
    if (resultContainer) {
        resultContainer.innerHTML = "";
    }
}