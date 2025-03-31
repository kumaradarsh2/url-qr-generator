# QR Code Generator

A simple Node.js command-line application that generates QR codes from URLs.

## Description

This lightweight utility allows users to input a URL through the command line, which is then converted into a QR code image. The application also saves the URL to a text file for reference. It's built with Node.js and leverages the power of the `inquirer` and `qr-image` packages.

## Features

- Interactive command-line interface
- Generates high-quality PNG QR codes
- Saves the input URL to a text file
- Simple and easy to use

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer) - For collecting user input
- [qr-image](https://www.npmjs.com/package/qr-image) - For generating QR code images
- [fs](https://nodejs.org/api/fs.html) - Node.js native file system module

## Usage

Run the application:

```
node index.js
```

You will be prompted to enter a URL. After entering the URL:
- A QR code image (qrcode.png) will be generated in the project directory
- The URL will be saved to a text file (url.txt)

## How It Works

1. The application uses the `inquirer` package to prompt the user for a URL
2. Once a URL is provided, it's passed to the `qr-image` package to generate a QR code
3. The QR code is saved as a PNG file using Node.js file system operations
4. The original URL is also saved to a text file for future reference

## Example

```
$ node index.js
? Enter the URL: https://github.com
{ URL: 'https://github.com' }
https://github.com
QR code generated successfully!
URL has been saved to url.txt file.
```

## Contributing

Contributions, issues, and feature requests are welcome!

## Author

[Adarsh Kumar]

## Acknowledgments

- [inquirer](https://www.npmjs.com/package/inquirer)
- [qr-image](https://www.npmjs.com/package/qr-image)