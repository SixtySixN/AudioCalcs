
export function getBluetoothData() {
    return navigator.bluetooth.requestDevice({
        filters: [{ namePrefix: 'DISTO' }], // Filters for Leica Disto devices
        optionalServices: ['00001810-0000-1000-8000-00805f9b34fb'] // Example UUID for measurement service
    })
    .then(device => device.gatt.connect())
    .then(server => server.getPrimaryService('00001810-0000-1000-8000-00805f9b34fb')) // Replace with actual service UUID
    .then(service => Promise.all([
        service.getCharacteristic('00002a6e-0000-1000-8000-00805f9b34fb'), // Distance characteristic
        service.getCharacteristic('00002a6f-0000-1000-8000-00805f9b34fb')  // Angle characteristic
    ]))
    .then(characteristics => Promise.all([
        characteristics[0].readValue(),
        characteristics[1].readValue()
    ]))
    .then(values => {
        return {
            distance: values[0].getUint16(0, true) / 1000, // Assuming distance is sent in mm
            angle: values[1].getUint8(0) // Angle in degrees
        };
    })
    .catch(error => console.error('Bluetooth error:', error));
}

navigator.bluetooth.requestDevice({
    filters: [{ namePrefix: 'DISTO' }], 
    optionalServices: ['00001810-0000-1000-8000-00805f9b34fb']
})
.then(device => {
    console.log('Connected to:', device.name);
    return device.gatt.connect();
})
.then(server => server.getPrimaryService('00001810-0000-1000-8000-00805f9b34fb'))
.then(service => Promise.all([
    service.getCharacteristic('00002a6e-0000-1000-8000-00805f9b34fb'), // Distance characteristic
    service.getCharacteristic('00002a6f-0000-1000-8000-00805f9b34fb')  // Angle characteristic
]))
.then(characteristics => Promise.all([
    characteristics[0].readValue(),
    characteristics[1].readValue()
]))
.then(values => {
    let distance = values[0].getUint16(0, true) / 1000; // Convert mm to meters
    let angle = values[1].getUint8(0);
    console.log('Distance:', distance, 'Angle:', angle);

    document.getElementById('hypotenuse').value = distance.toFixed(2);
    document.getElementById('angle').value = angle;
})
.catch(error => console.error('Bluetooth error:', error));
