#Mark McClean

##Milestone Project 2 – User Interactive Frontend Development 

##Order It – JavaScript game

###Why make a game?
For the second milestone project I decided to build a game using JavaScript to display the questions and answers with some fun interactive features. 

I’ve always enjoyed playing games, especially those that provide the opportunity to learn some knowledge from. So, I decided to create a quiz where you receive a question and 5 answers that you need to put on the right order. 

The theme of the quiz is the world and geography. I’ve always been fascinated when I look at a globe, discovering places I’ve never seen before, flag design and capital cities. That love of geography is projected into my idea for this project.

###How the game works
The idea for the game is an interactive sequence quiz. After the initial callout home page describing the idea and instructions, there’s a ‘Start Quiz’ button. The first question appears with the five possible answers in the wrong order. After reading the question, the player then needs to rearrange the answers into the correct order using the switch buttons beside the answers. When the player thinks they have the correct order they can click on the ‘Check answers’ button and they will see how many of the 5 they have in the correct order. There’s will be a next button to then continue on to the next question.

##UX: Stradegy
###Primary Target Audience
This game can be enjoyed by anyone from around 8 years and over. Also anyone who is interested in quizzes in general or people who are interested in learning new things about the world and geography.

###Appropriate Content
I think the quiz will need to be clearly presented with strong instructions so that people can begin immediately after one read through the callout section. Clear font styles and sizes so that older and younger people can read without problems. Buttons also need to stand out so that people know where to click.

###Why this quiz?
I wanted to create a quiz but there are already so many variations of the standard multiple choice quizzes out there I wanted to do something a little different. I think the fact that you need to reorder the answers gives the player a greater sense of involvement and more interactivity to the quiz.

##Scope
###User Stories
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

###Goal
My goal for the website was to make it simple and fun. I want it to be like an app that can be used on a pc and also on a phone. Using a callout to greet you and draw you in and a button to start the quiz. The website will have vibrant and contrasting colours to differentiate between important elements but also some elements should be the same colours to create some consistency and uniformity so that people can quickly become familiar with the website.

##Structure
###Features
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

###Features left to implement 
* I would like to create an easier mode for the quiz where you get 3 attempts for each question. For the less knowledgeable or younger players it gives them a chance to really learn something from the quiz if they have 3 chances to get all 5 answers in the correct order.

###Overall Structure

##Sketelon
I used the Balsamiq program for the wireframes and attached them to the directory in assets. The original idea is still recognizable from the finished application. There have obviously been some design changes along the way but the wireframe is useful to have to put the idea in your head down on paper before you start coding. The wireframes can also be view her below.
Wireframe 1
Wireframe 2
Wireframe 3
Wireframe 4

##Surface
###colours
For the colour scheme I wanted to go for something bright and fun and I used a colour scheme generator to help me called Coolors which can be found at coolors.co The navbar and footer sharing the same dark red/brown colour and complemented with a vibrant orange in the background throughout the site. The callout and quiz backgrounds are both white to give a clear contrast between background and main elements of the site. Within the white quiz container I used the same dark blue for the question, switch buttons and check answer question to give a uniform look and a light grey background colour for the 5 answer elements. After the check answer button is clicked, the next question button appears and it is a light green colour. I thought it best to change the colour of the button at this point so the player would clearly see that the button had changed. Further on in the quiz after the final question the ‘Finish Quiz’ button appears and changes colour again to end the quiz and get your final score. The 3 buttons – ‘Check Answer’, ‘Next Question’ and ‘Finish Quiz’ all occupy the same space but only appear one at a time, hence the need for a colour change, so the player can clearly see something else will happen.

###Font
For the font I wanted to go with something fun and playful. I used Google fonts to find one and decided upon 'Ubuntu'. I think this font works well with the game. 

I took the link from Google Fonts and pasted it into my CSS file to become the default font for the whole website with a backup font of 'Sans-serif' in the event that the browers that is being used to play the game is unable to display the 'Ubuntu' font.

##Technologies Used
* HTML 
* CSS 
* Bootstrap 
* JavaScript 
* JQuery

##Testing
###Code Validation

###General Testing