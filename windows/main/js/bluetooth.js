async function connectToDevice() {
    try {
        const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: ['battery_service'] // Add the appropriate service UUID of your device
        });

        const server = await device.gatt.connect();
        const service = await server.getPrimaryService('0000180f-0000-1000-8000-00805f9b34fb'); // Replace with your device's service UUID
        const characteristic = await service.getCharacteristic('00001812-0000-1000-8000-00805f9b34fb'); // Replace with your device's characteristic UUID

        // Start notifications for receiving data
        characteristic.addEventListener('characteristicvaluechanged', handleDataReceived);
        await characteristic.startNotifications();
    } catch (error) {
        console.error('Error connecting to Bluetooth device:', error);
    }
}

function handleDataReceived(event) {
    const value = new TextDecoder().decode(event.target.value);
    console.log('Received:', value);

    // Populate the input fields based on received data
    // Assuming the device sends a string like "distance,angle"
    const [distance, angle] = value.split(',');
    if (distance && angle) {
        document.getElementById('hypotenuse').value = parseFloat(distance);
        document.getElementById('angle').value = parseFloat(angle);
        calculateSides();
    }
}
