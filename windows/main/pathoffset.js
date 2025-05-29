// Function to calculate the path offset and delay time
function calculateDelay() {
    // Get values from the input fields
    const subDistance = parseFloat(document.getElementById("subDistance").value) || 0;
    const arrayDistance = parseFloat(document.getElementById("arrayDistance").value) || 0;
    const alignmentDelay = parseFloat(document.getElementById("alignmentDelay").value) || 0;

    // Calculate the path offset (arrayDistance - subDistance)
    const pathOffset = arrayDistance - subDistance;

    // Calculate the delay time (pathOffset converted to m/s and adding alignmentDelay)
    const delayTime = pathOffset / 343 *1000 + alignmentDelay; // Speed of sound in air is approximately 343 m/s

    const quarterWavelength = (pathOffset / 343 *1000 + alignmentDelay)/4;
    const halfWavelength = (pathOffset / 343 *1000 + alignmentDelay)/2;
    // Display the results
    displayResults(pathOffset, delayTime, halfWavelength, quarterWavelength);
}

function displayResults(pathOffset, delayTime, halfWavelength, quarterWavelength) {
    // Get the existing result container
    const resultContainer = document.getElementById("results");

    resultContainer.innerHTML = `
    <div style="width: 500px;">
        <div style="display: table; margin-left: 20px;">
                    <div style="display: table-row;">
                <div style="display: table-cell; padding-right: 10px;font-size: larger;"><label><strong>Delay Time:</strong></label></div>
                <div style="display: table-cell; color: green;font-size: larger;"><strong>${delayTime.toFixed(2)} ms</strong></div>
            </div>
            <div style="display: table-row;">
                <div style="display: table-cell; padding-right: 10px;"><label><strong>Path Offset:</strong></label></div>
                <div style="display: table-cell;">${pathOffset.toFixed(2)} m</div>
            </div>

            <div style="display: table-row;">
                <div style="display: table-cell; padding-right: 10px;"><label><strong>1/4 Wavelength:</strong></label></div>
                <div style="display: table-cell;">${quarterWavelength.toFixed(2)} ms</div>
            </div>
            <div style="display: table-row;">
                <div style="display: table-cell; padding-right: 10px;"><label><strong>1/2 Wavelength:</strong></label></div>
                <div style="display: table-cell;">${halfWavelength.toFixed(2)} ms (& PHASE INV)</div>
            </div>
        </div>
    </div>
    `;
}
// Function to clear all fields and reset results
function clearFields() {
    document.getElementById("subDistance").value = "";
    document.getElementById("arrayDistance").value = "";
    document.getElementById("alignmentDelay").value = "";

    const resultContainer = document.getElementById("results");
    if (resultContainer) {
        resultContainer.innerHTML = "";
    }
}

