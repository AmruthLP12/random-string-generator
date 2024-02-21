/**
 * Generate a random string of specified length
 * @param {number} length - The length of the random string to generate
 * @param {string} charset - (Optional) The character set to use for generating the random string (default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
 * @returns {string} - The generated random string
 */
const generateRandomString = (length, charset) => {
    // Check if length is a positive integer
    if (!Number.isInteger(length) || length <= 0) {
        throw new Error('Length must be a positive integer');
    }

    // Check if length is a number
    if (typeof length !== 'number' || isNaN(length)) {
        throw new TypeError('Length must be a number');
    }

    // // Check if charset is a string
    // if (typeof charset !== 'string') {
    //     throw new TypeError('Charset must be a string');
    // }

    charset = charset || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charsetLength = charset.length;
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        result += charset.charAt(randomIndex);
    }
    
    return result;
}

module.exports = generateRandomString;

//   // Example usage:
//   const randomString = generateRandomString(10); // Generates a random string of length 10 using the default character set
//   console.log(randomString); // Output: "f2Vh9kTqPn"
  
//   const customRandomString = generateRandomString(8, 'abcdef'); // Generates a random string of length 8 using a custom character set
//   console.log(customRandomString); // Output: "abbcafcc"
  