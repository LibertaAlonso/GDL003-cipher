
window.cipher = {
	encode: (offset, string) => {
		let x, asciiCode, cipher = '';

		for (let i = 0; i < string.length; i++) {


			x = string.charCodeAt(i);

			if (x === 32 || x === 44) {
				cipher = cipher + String.fromCharCode(x);
			} else {
				asciiCode = ((x - 65 + offset) % 26) + 65;
				cipher = cipher + String.fromCharCode(asciiCode);
			}

		}

		return (cipher);

	},
	decode: (offset, string) => {
		let x, asciiCode, deCipher = '';

		for (let i = 0; i < string.length; i++) {
			x = string.charCodeAt(i);
			if (x === 32 || x === 44) {
				deCipher = deCipher + String.fromCharCode(x);
			} else {
				asciiCode = ((x + 65 - offset) % 26) + 65;

				deCipher = deCipher + String.fromCharCode(asciiCode);
			}

		}

		return (deCipher);

	}
};
