function getDecodings(digits) {
  const result = [];

  // Helper function for recursive decoding
  function decodeHelper(index, currentDecoding) {
    // Base case: if we've processed all digits, add the current decoding to the result
    if (index === digits.length) {
      result.push(currentDecoding);
      return;
    }

    // Case 1: Decode a single digit
    const singleDigit = parseInt(digits[index]);
    if (singleDigit >= 1 && singleDigit <= 9) {
      // '0' cannot be decoded alone
      const char = String.fromCharCode(64 + singleDigit); // 64 for 'A'
      decodeHelper(index + 1, currentDecoding + char); // helper() should be inside the if conditional statement because there are 2 different calling of recursive helper and both of them depends upon either one digit or two digit
    }

    // Case 2: Decode a two-digit number
    if (index + 1 < digits.length) {
      const twoDigits = parseInt(digits.substring(index, index + 2));
      if (twoDigits >= 10 && twoDigits <= 26) {
        const char = String.fromCharCode(64 + twoDigits);
        decodeHelper(index + 2, currentDecoding + char); // helper() should be inside the if conditional statement because there are 2 different calling of recursive helper and both of them depends upon either one digit or two digit
      }
    }
  }

  // Start the decoding process from the beginning of the digit sequence
  decodeHelper(0, "");
  return result;
}

console.log(getDecodings("123"));
