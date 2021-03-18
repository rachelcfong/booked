# booked

Booked Prototype README
Rachel Fong, Alexis Lowbar, Jianna So, Mika Isayama

This prototype is meant to run on an iPhone 11.

Tools used
* React Native
* Visual Studio Code
* Github
* Expo

Operating instructions

1. Create an empty directory named “Booked.”
2. From the terminal, change into the Booked directory. For example, “cd ./pathtodirectory/Booked”
3. Clone the repo from the terminal with the command “git clone https://github.com/rachelcfong/booked.git”
4. Run “npm install” to install dependencies. This may take some time.
5. Run “expo start” to start the app. A new page should open in your computer’s browser that shows a QR code on the left hand side.
6. Download the Expo app from the App store.
7. Open your phone camera app and point the camera towards the QR code. Click the top notification to open the Expo app.
8. Log into the Expo account. Please email Rachel Fong at rachel16@stanford.edu for login information.

Limitations
* There is no logout feature. You may use the back navigation arrows to simulate logging out.
* Authentication with email and password is not set up. You may log in with any valid email address and password.
* If you log in instead of going through sign up flow, your default profile name will be Kim.
* Similarly, if you log in instead of going through sign up flow, the “same gender as me” tag will not work because your gender will not have been set through sign up flow.
* Reviews are hard-coded and repeated across different interpreters.
* Interpreter bio videos are samples that include signing, but are meant to simply represent what a video introduction may look like. In a real prototype, we would like these videos to be people signing short introductions.
* You cannot enter your location for the Reviews near you page.
* You cannot add friends with a Booked ID, although the UI is set up. You will simply receive an error if you try to enter a Booked ID.
