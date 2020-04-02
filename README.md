# Mark McClean

## Milestone Project 2 – User Interactive Frontend Development 

## Order It – JavaScript game

### Why make a game?
For the second milestone project I decided to build a game using JavaScript to display the questions and answers with some fun interactive features. 

I’ve always enjoyed playing games, especially those that provide the opportunity to learn some knowledge from. So, I decided to create a quiz where you receive a question and 5 answers that you need to put on the right order. 

The theme of the quiz is the world and geography. I’ve always been fascinated when I look at a globe, discovering places I’ve never seen before, flag design and capital cities. That love of geography is projected into my idea for this project.

### How the game works
The idea for the game is an interactive sequence quiz. After the initial callout home page describing the idea and instructions, there’s a ‘Start Quiz’ button. The first question appears with the five possible answers in the wrong order. After reading the question, the player then needs to rearrange the answers into the correct order using the switch buttons beside the answers. When the player thinks they have the correct order they can click on the ‘Check answers’ button and they will see how many of the 5 they have in the correct order. There’s will be a next button to then continue on to the next question.

## UX: Stradegy
### Primary Target Audience
This game can be enjoyed by anyone from around 8 years and over. Also anyone who is interested in quizzes in general or people who are interested in learning new things about the world and geography.

### Appropriate Content
I think the quiz will need to be clearly presented with strong instructions so that people can begin immediately after one read through the callout section. Clear font styles and sizes so that older and younger people can read without problems. Buttons also need to stand out so that people know where to click.

### Why this quiz?
I wanted to create a quiz but there are already so many variations of the standard multiple choice quizzes out there I wanted to do something a little different. I think the fact that you need to reorder the answers gives the player a greater sense of involvement and more interactivity to the quiz.

## Scope
### User Stories
As a potential customer I would like to: 

* Do a fun interactive quiz to test my knowledge 
* Play a game where I can learn something from whilst having fun 
* Have appropriate content for younger players 
* Have a game with clear instruction and easy to follow steps 
* Have a simple design and clear structure to easily navigate through the site/game 
* Have a game I can play on a mobile or a desktop 
* See my score throughout the quiz and monitor my progress 
* Have a game that makes me want to come back again each time to improve my score 

As a developer I would like: 

* To develop a game that is fun and interesting for different people of all ages
* To create a game using my knowledge of HTML, CSS and JavaScript
* To enjoy creating this project as much as people may enjoy playing the game

### Goal
My goal for the website was to make it simple and fun. I want it to be like an app that can be used on a pc and also on a phone. Using a callout to greet you and draw you in and a button to start the quiz. The website will have vibrant and contrasting colours to differentiate between important elements but also some elements should be the same colours to create some consistency and uniformity so that people can quickly become familiar with the website.

## Structure
### Features
* An animation on the homepage callout section. 2 curved arrows that rotate 45° clockwise and back delayed 1 second after the page has loaded. This was achieved using key frames in CSS. 3 points in the animation were established: start, middle and end, each receiving a specified angle along with a timer of 1 second and a CSS rotate property. This results in a quick rotation of the curved arrows to give the impression of something being switched. Switching the answers to get the correct order is the main aim of the quiz and therefore the reason I have used this animation to signify this. 
* The website logo in the top left corner is a link to the home page. This will then be a reload link if you’re already on the home page or a stop quiz button if you’re in the middle of the game. 
* Callout section on the home page with a ‘Start Quiz’ button to begin the quiz. This is then hidden when the button is clicked and the quiz form appears. 
* Quiz form appears populated by first question and the 5 answers. There are then 4 switch answers buttons which are used to move the answers up and down to the desired locations. 
* ‘Check answers’ button will then check how many of the 5 answers are in the correct order and score will display at the bottom left of the quiz. The score container will be a different colour to the 'Check Answer' button but the same as the 'Next Question' button, which has now appeared. This gives a unifrom look to the new elements that have appeared.
* Players will be able to see which answers they have in the correct order by way of a thick green border around the correct answers and which are not in the correct order by way of a thick red border around the incorrect answers. 
* ‘Next Question’ button appears after the ‘Check answer’ button is clicked. When the player has assessed their score and which answers they have correct they can continue to the next question using the ‘Next Question’ button. 
* If the last question in the array has been reached a ‘Finish Quiz’ button will appear, in a different colour to indicate a different function so it’s clear for the player. 
* When ‘Finish Quiz’ button is clicked the final combined score will be added up and displayed on a new page with a different comment depending on how good or bad the players score was.
* When the final score is displayed there will also be a 'Homepage' button to help the user get back to the home page.

### Features left to implement 
* I would like to create an easier mode for the quiz where you get 3 attempts for each question. For the less knowledgeable or younger players it gives them a chance to really learn something from the quiz if they have 3 chances to get all 5 answers in the correct order.

### Overall Structure

## Sketelon
I used the Balsamiq program for the wireframes and attached them to the directory in assets. The original idea is still recognizable from the finished application. There have obviously been some design changes along the way but the wireframe is useful to have to put the idea in your head down on paper before you start coding. The wireframes can also be view her below.
Wireframe 1
Wireframe 2
Wireframe 3
Wireframe 4

## Surface
### Colours
For the colour scheme I wanted to go for something bright and fun and I used a colour scheme generator to help me called Coolors which can be found at coolors.co The navbar and footer sharing the same dark red/brown colour and complemented with a vibrant orange in the background throughout the site. The callout and quiz backgrounds are both white to give a clear contrast between background and main elements of the site. Within the white quiz container I used the same dark blue for the question, switch buttons and check answer question to give a uniform look and a light grey background colour for the 5 answer elements. After the check answer button is clicked, the next question button appears and it is a light green colour. I thought it best to change the colour of the button at this point so the player would clearly see that the button had changed. Further on in the quiz after the final question the ‘Finish Quiz’ button appears and changes colour again to end the quiz and get your final score. The 3 buttons – ‘Check Answer’, ‘Next Question’ and ‘Finish Quiz’ all occupy the same space but only appear one at a time, hence the need for a colour change, so the player can clearly see something else will happen.

### Font
For the font I wanted to go with something fun and playful. I used Google fonts to find one and decided upon 'Ubuntu'. I think this font works well with the game. 

I took the link from Google Fonts and pasted it into my CSS file to become the default font for the whole website with a backup font of 'Sans-serif' in the event that the browers that is being used to play the game is unable to display the 'Ubuntu' font.

## Technologies Used
* GitPod - used as my IDE for the development of this website.
* HTML - used to write the code for the structure and layout of the website/game.
* CSS - used to style all the HTML elements.
* [Bootstrap](https://getbootstrap.com/) - The website is using Bootstrap4 as the basic structure, navbar and footer of the website and to increase the responsiveness of the website.
* JavaScript - Used to write scripts for all functions within the game and buttons on the website. All interactivity of the website uses JavaScript.
* JQuery - Used to make it easiler to traverse through elements of the DOM and manipulate them.
* Popper.JS - Used to make the navbar responsive.
* [FontAwesome](https://fontawesome.com/) - Used to display icons in my callout, quiz switch buttons and the social media icons in my footer.
* [Google Fonts](https://fonts.google.com/)- The website uses 1 Google font and the Url is imported in the CSS file.
* [Coolors.co](https://coolors.co/) - Used this to find a colour scheme for my website.


## Testing
### Code Validation
Several times during the development process I tested my code in various code online validation programs.
For HTML I used [W3 Markup Validation Service](https://validator.w3.org/#validate_by_input). I pasted my entire HTML pages one at a time into the input field and the code was checked. I received several warnings about my code. Warnings are things that can be changed in the code but it's also not necessaary. For example I had several heading elements that were empty. This was an intentional choice because the JavaScript code would  later fill the inner HTML when a certain point in the code had been reached. I also received a warning that my script tag contained an unnecessary type attribute so I removed it. I did not receive any errors.

For CSS I used [W3 CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input). Again I pasted my CSS file into the input field and the code was checked. I received 2 errors. Both of which referenced a style I had created for a class that no longer was required but I forgot to remove previously. The style was then removed. I also received several warnings. For example a style where I had stated the background-color and border to the same colour, which is unnecessary. Other warnings included several unknown vendor extensions. These were mostly part of stlyes that I had from external sources so I left the extensions in.

For JavaScript validation, within the Gitpod environment there is a 'Problems' tab which I checked often during the development. Any errors in the code would appear immediately so I was able to address any issue in the JavaScript right away. The warnings I received and addressed were about expected or unexpected characters throughout the code that I needed to remove or add in. This was useful to remind me to format my code correctly during writing. For external validation I used [JS Hint](https://jshint.com/). Again I pasted my code into the input and it was checked. I did not receive any errors as I had already fixed all errors through the Gitpod 'Problems' explained previously. I did however receive a lot of warnings. These mostly consisted of missing or unnecessary semicolons so I was able to address that easily. Other warnings included the use of 'const' and 'let as these are modern JavaScript variables and may not work with old browsers. I ignored these warnings as during my own development testing and friends and family testing I didn't come accross any browsers that had any difficulty running the code. Another warning I received was the use of an outer scoped variable inside a function declared within a loop. This may be confusing semantics. I choose to ignore this as it was only a warning and the variable was defined in the line of code directly about the function. I did not see this as a problem.'

### General Testing

##Deployment 

The code environment was taken from a code institute Gitpod template that is stored on Github. This is then exported from Github to my own Gitpod account using the ‘Gitpod’ button. The template then opens up on my own Gitpod account with a boiler plate to start coding including links for Bootstrap, jQuery, Popper and Font Awesome so I didn’t need to look for the CDN’s myself. 
After every session of coding I committed my work using the Git terminal in Gitpod. Every commit has a message attached to clearly explain the changes that were made since the last commit. After the commit, the code is also then pushed to my Github account, also using the Git terminal.

###Hosting my site on Github pages

These ther the steps I took to host the live website through Github Pages:
* Opened up GitHub in the browser.
* Signed in using username and password.
* Selected Milestone Project 2 from my repositories.
* In the top navigation selected 'settings'.
* Scrolled down to the GitHub Pages area.
* Selected 'Master Branch' from the 'Source' dropdown menu.
* Clicked to confirm my selection.
* Your site is published https://sparkplug84.github.io/MilestoneProject2/