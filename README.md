## Overview
This project will generate QR code for correct URL provided by users. In case of incorrect URL, it asks again for URL. That QR code is scannable.
## Prerequisites (Modules used)
1. npm install inquirer
2. npm install qrcode-terminal
3. npm install axios
## Running code
node index.js
## Learning Outcomes
1. Used ***inquirer*** module, a command line tool which requires user interaction.
2. Used ***qrcode-terminal*** module to display QR code directly in terminal.
3. Used ***axios*** module to send a GET request to the provided URL.
## Drawback
Currently QR code is displayed for every correct URL but doesn't check for inaccessible website.
