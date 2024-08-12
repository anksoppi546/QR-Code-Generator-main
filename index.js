import inquirer from "inquirer"; // to build command-line tools that require user interaction
import qrcode from "qrcode-terminal"; // used to display QR code directly in terminal
import axios from "axios";  //to send a GET request to the provided URL

// Function to prompt for URL and check if it exists
function promptForURL() {
  inquirer
    .prompt([
      {
        message: "Type the URL for which you want to generate a QR code:\n",
        name: "URL",
      },
    ])
    .then((answers) => {
      let url = answers.URL;

      // Ensure the URL starts with http:// or https://
      if (!/^https?:\/\//i.test(url)) {
        url = `http://${url}`;
      }

      // Check if the website exists
      axios
        .get(url)
        .then(() => {
          // If the request is successful, generate and display the QR code
          qrcode.generate(url, { small: true });
          console.log(
            "The QR code for the URL has been generated and displayed!"
          );
        })
        .catch(() => {
          // If the request fails, display an error message and ask again
          console.log("Website does not exist. Please try again.");
          promptForURL(); 
        });
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something went wrong: ", error);
      }
    });
}

// Start the prompt loop
promptForURL();
