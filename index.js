// What a QR Code really is?
// Stands for Quick Responsive code is a type of matrix barcode that can store various types of data

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer    
  .prompt([
    { message: "Enter the URL:" , name: "URL" }
  ])
  .then((answers) => {
    // console.log(answers);
    const userEnteredURL = answers.URL;
    // console.log(userEnteredURL);

    // generete qr image from the url entered by user
    const qr_png = qr.image(userEnteredURL, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qrcode.png'));
    console.log("QR code generated successfully!");

    fs.writeFile("url.txt", userEnteredURL, (err) => {
        if (err) throw err;
        console.log("URL has been saved to url.txt file.");
    });
  })
  .catch((error) => {
    if (error) throw error;
});