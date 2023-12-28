import struct

def encrypt_file(file_path, password):
    # Convert password to ASCII values and sum them up
    shift_value = sum(ord(char) for char in password)
    print(shift_value)
    # Read the file content
    with open(file_path, 'rb') as file:
        # Get the file content as bytes
        file_bytes = bytearray(file.read())

        # Encrypt each byte by shifting
        encrypted_bytes = [(byte + shift_value) % 256 for byte in file_bytes]

        # Convert the list of encrypted bytes to bytes
        encrypted_bytes_array = bytearray(encrypted_bytes)
        print(encrypted_bytes[0])
        print(len(encrypted_bytes))
        # Write the encrypted bytes to a new file
        with open('encrypted.pdf', 'wb') as encrypted_file:
            encrypted_file.write(encrypted_bytes_array)

# Example usage:
file_path = 'test.pdf'  # Replace with the path to your file
password = input('Enter your password: ')
encrypt_file(file_path, password)
