

async function decrypt() {
    // Specify the path to the file
    const filePath = 'encrypted.pdf';

    const password = document.getElementById("password").value;
    // Convert file to bytes
    const response = await fetch(filePath);
    const buffer = await response.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    // Convert encrypt password to ASCII values and sum them up
    let shiftValue = password.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    console.log(shiftValue)
    // Encrypt each byte by shifting
    const decryptedBytes = bytes.map(byte => (byte - shiftValue + 256) % 256);
    console.log(decryptedBytes[0])

    // Create a new Uint8Array from the encrypted bytes
    const decryptedBuffer = new Uint8Array(decryptedBytes);
    // Create a Blob from the Uint8Array
    const decryptedBlob = new Blob([decryptedBuffer]);

    // Save or handle the encrypted file as needed
    // For example, you can create a download link:
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(decryptedBlob);
    downloadLink.download = 'decrypted_file.pdf';
    downloadLink.click();
}