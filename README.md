# Mark McClean

## Milestone Project 2 – User Interactive Frontend Development 

## Order It – JavaScript game

The live website hosted by Github pages can be viewed [here](https://sparkplug84.github.io/MilestoneProject2/).

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
* When the final score is displayed there will be a 'Homepage' button to help the user get back to the home page.
* When the final score is displayed there will also be a 'Try Again' button so the user can immediately start the quiz again if desired.

### Features left to implement 
* I would like to create an easier mode for the quiz where you get 3 attempts for each question. For the less knowledgeable or younger players it gives them a chance to really learn something from the quiz if they have 3 chances to get all 5 answers in the correct order.

### Overall Structure

I wanted to create a  with a logo in the top left of the navbar to bring the user back to the homepage along with some other game links and a feedback form on the right side of the navbar. These links would collapse into a dropdown button on smaller screens and not necessarily be active at this point in the project. More of a future feature for the website. At the bottom the footer contained 3 columns with social links and copyright information. My aim was just to use the index.html page only to contain all the elements and styles. I would then use JavaScript to manipulate the DOM and hide and display different elements at different times of the quiz. This would be the best way to do it to get immediate functions taking place throughout the quiz so no waiting times for the user.

## Sketelon
I used the Balsamiq program for the wireframes and attached them to the directory. The original idea is still recognizable from the finished application. There have obviously been some design changes along the way but the wireframe is useful to have to put the idea in your head down on paper before you start coding. The wireframes can also be view her below.<br/>
[Wireframe 1 - Home page callout Desktop](wireframes/CalloutHomePageDesktop.png)<br/>
[Wireframe 2 - Quiz Form Desktop](wireframes/QuizFormHomePageDesktop.png)<br/>
[Wireframe 3 - Home page callout Mobile](wireframes/CalloutHomePageMobile.png)<br/>
[Wireframe 4 - Quiz Form Mobile](wireframes/QuizFormHomePageMobile.png)

## Surface
### Colours
For the colour scheme I wanted to go for something bright and fun and I used a colour scheme generator to help me called Coolors which can be found at [Coolors](https://coolors.co/) The navbar and footer sharing the same dark red/brown colour and complemented with a vibrant orange in the background throughout the site. The callout and quiz backgrounds are both white to give a clear contrast between background and main elements of the site. Within the white quiz container I used the same dark blue for the question, switch buttons and check answer question to give a uniform look and a light grey background colour for the 5 answer elements. After the check answer button is clicked, the next question button appears and it is a light green colour. I thought it best to change the colour of the button at this point so the player would clearly see that the button had changed. Further on in the quiz after the final question the ‘Finish Quiz’ button appears and changes colour again to end the quiz and get your final score. The 3 buttons – ‘Check Answer’, ‘Next Question’ and ‘Finish Quiz’ all occupy the same space but only appear one at a time, hence the need for a colour change, so the player can clearly see something else will happen.

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
* **HTML** - For HTML I used [W3 Markup Validation Service](https://validator.w3.org/#validate_by_input). I pasted my entire HTML pages one at a time into the input field and the code was checked. I received several warnings about my code. Warnings are things that can be changed in the code but it's also not necessaary. For example I had several heading elements that were empty. This was an intentional choice because the JavaScript code would  later fill the inner HTML when a certain point in the code had been reached. I also received a warning that my script tag contained an unnecessary type attribute so I removed it. I did not receive any errors.

* **CSS** - For CSS I used [W3 CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input). Again I pasted my CSS file into the input field and the code was checked. I received 2 errors. Both of which referenced a style I had created for a class that no longer was required but I forgot to remove previously. The style was then removed. I also received several warnings. For example a style where I had stated the background-color and border to the same colour, which is unnecessary. Other warnings included several unknown vendor extensions. These were mostly part of stlyes that I had from external sources so I left the extensions in.

* **JS** - For JavaScript validation, within the Gitpod environment there is a 'Problems' tab which I checked often during the development. Any errors in the code would appear immediately so I was able to address any issue in the JavaScript right away. The warnings I received and addressed were about expected or unexpected characters throughout the code that I needed to remove or add in. This was useful to remind me to format my code correctly during writing. For external validation I used [JS Hint](https://jshint.com/). Again I pasted my code into the input and it was checked. I did not receive any errors as I had already fixed all errors through the Gitpod 'Problems' explained previously. I did however receive a lot of warnings. These mostly consisted of missing or unnecessary semicolons so I was able to address that easily. Other warnings included the use of 'const' and 'let as these are modern JavaScript variables and may not work with old browsers. I ignored these warnings as during my own development testing and friends and family testing I didn't come accross any browsers that had any difficulty running the code. Another warning I received was the use of an outer scoped variable inside a function declared within a loop. This may be confusing semantics. I choose to ignore this as it was only a warning and the variable was defined in the line of code directly above the function. I did not see this as a problem.'

### General Testing

I am not currently very knowledgeable about automated testing and was short of time so I decided to do all the testing manually via the browser and Chrome Developer tools. How I achieved this was after almost every line of code that I wrote, I opened up the browser to view the live website. Viewing it in Google Chrome I am then able to right click on the website and select inspect from the menu. Chrome Developer tools opens up which allows me to view the elements, styles and console log to see JavaScript errors.<br/>
I tried to work with small tasks in the beginning, setting up the navbar, creating some links. During this process I would view the website in the browser many times, select elements to see what default styles had been attached to them and change if necessary. Chrome Developer tools also allows you to add styles to elements and change the website as you view it. If I was happy with the changes I could copy the styles from Chrome and paste them into my CSS file. This can be useful to cut down the amout of times you view the developer tools to see what differences your styling makes and speed up the developing process.<br/>
After spending some time on the HTML, Bootstrap and CSS to set up the look, styles and responsiveness of the website, I moved on to writing the JavaScript code. I used the same manual tests as above using Chrome Developer tools. For the JavaScript though I used the Console tab more often to see what was happening within the JavaScript and any errors in the code. Sometimes I had to console log certain bits of code so that the console would display the outcome of a function, in the case that the code was not doing what I wanted it to. Then I could adjust my code accordingly.<br/>
When the basic functionality of the game was in place, I shared by the website with friends and family to get their feeback of usablity and first impressions of the game and functionality.<br/>
Through my own testing and with views of friends and family, I have fixed a few design faults in the HTML and CSS and bugs in my Javascript code.<br/>

### Testing in different browsers

I used Google Chrome as my main browser test as I was constantly using the Chrome developer tools to view and adjust my code. I also regularly tested the website on my phone, also using Google Chrome. I occasionally checked Firefox on the laptop. I sent the URL to friends and family to test on ipads(5th generation or younger) and iphones(8 or younger) along with Samsung Galaxy(S9 or younger) and Saumsung Galaxy Tab(S3 or younger). I didn't find or hear any specific issues from my own testing or from friends and family.

### General Testing and developing throughout the process

1. * **Goal** - To ensure the HTML elements were all responsive and CSS styles were being applied properly.
   * **Implementation** - Each element was regularly tested to ensure its features worked as expected and was specifically responsive tablets and mobile. For this, I used the device selector through the Chrome developer tools and selected each device to test each element. I also use of the responsive tool to manually increase and decrease screen size of the browser to see if the breakpoints were repsonding correctly. When I noticed an error, I used the dev tools to apply or change certain styles and if successful, copied it to my own code. Whenever an element was added via Javascript, tested the element’s responsiveness on all screen sizes before committing and pushing my work to Github.
   * **Result** - Responsive Navbar with collapsable menu. Responsive footer with changing icon positions with different screen sizes. Responsive quiz container for large and small screens.

2. * **Goal** - Writing my own questions for the quiz.
   * **Implementation** - The format of my quiz is a sequence quiz where you need to put the answers in the correct order so I neede to come up with a way to present the questions and state the correct order they need to be in. After some help from a Code Institute tudor I was advised to use an array of objects. Each object consisted of 2 properties, a question and an answer. The question property contained simply a string with the actual question. Within the answer property another array was created to contain the 5 answers, each with 2 more properties. A correct order property with the 5 answers ranked 1 - 5 with 1 being the answer at the top of the order and 5 being the answer at the bottom of the order. The second property inside the answers array was the details, which contained the answer itself in the form of a string. Initially this was a good setup for displaying the questions within the quiz form but later when it came to checking the order of the questions after user intput I had to change my answer order from 1-5 to 0-4 as I was using an index system to check the order and in that system the item with correct order of 0 would be the top item and 4 will be the bottom item in the order.
   * **Result** - I had a question format that worked and I could easily replicate for all other questions I wrote for the quiz.

3. * **Goal** - Displaying the question and answers in the quiz form.
   * **Implementation** - I started off by simply trying display the first question of the array in the quiz. Using the getElementById method I pushed my question into the question child container and answers seperately into the 5 answer child containers. The reason I used child containers was because these would eventually move around the DOM whereas the parent containers would stay in the same position. This would aid with the checking function. When the question and answers where displayed properly I refined the code adding in constants to store in the information instead of using getElementById in every function. Later in the development process I had to refine this code again because I had only pushed the first question of the array into the quiz form using the index of 0. I then had to create a global counter variable starting at 0 and incrementing by 1 each time javaScript reached the end of the code and restarting the build quiz function, then displaying the second question in the array. In the build quiz function the 0 index was replaced with counter.
   * **Result** - The quiz question and answers appeared in the quiz form along with the susequent quiz questions and answers when JavaScript cycled through the code.

4. * **Goal** - Giving the user the ability to switch the order of the questions.
   * **Implementation** - In my HTML I had initially designed the quiz to contain an up and down button for each answer but after encountering some difficulties with multiple buttons doing the same function and realising there were possibly too many buttons I changed my design to just 1 button shared by each pair of answers. I had initially created a function for each button to swap the child elements containing the answers around for the 2 corresponding answers next to these buttons. The code worked fine but after review with my mentor, he showed me how to to create 1 function and pass parameters into the function and apply that function to all 4 buttons.
   * **Result** - 1 clean function where all 4 switch buttons are run with it but are only activated when the user clicks on the chosen button. All answers can now be swapped around into the user desired order.

5. * **Goal** - Checking the order of the answers after user input.
   * **Implementation** - This was the most difficult function to write and therefore I needed some assistance from the Code Institute tudors. They advised me to create 2 for loops. 1 to iterate through the order the answers where placed by the user and 1 to iterate through my own correct order stated in my questions array and match up the 2. I was then able to state in JS that if the index number of the correct order in my questions is equal to the index number of the user inputted order then that would be a correct answer. 2 sub functions where then added to this function. All correct answers would receive a green border to show the user which questions they got correct and red border for incorrect answers. The second sub function was the score would be incremented for each correct answer and then displayed in the bottom left corner of the quiz form.
   * **Result** - When the 'Check Answers' button is clicked the score for that question is displayed and the correct and incorrect answers are shown but for only a few seconds so it's like a sneak peak of the correct answers. There's no time for the user to study it. I later added in a timeout function as I thought this was better for replay value.

6. * **Goal** - Displaying the next question.
   * **Implementation** - As I stated before I had to create a global counter variable which is set to 0, which is the index for the first question. When the user clicks the 'Next Question' button the counter increments by 1 and the build quiz function is run again so the whole loop will start again but this time the second question and corresponding answers would be displayed.
   * **Result** - When the 'Next Question' button is clicked a new question will appear and the process can start again.

7. * **Goal** - Finish the quiz.
   * **Implementation** - To implement this and get the 'Finish Quiz' button to appear instead if the 'Next Question' button I had to add in an extra piece of code into the check answer function. This code stated that if the maximum index number in the questions array had been reached the 'Finish Quiz' button would appear letting the user know they had reached the end of the quiz. When this button was clicked the quiz container would be removed and a new container would appear showing the final score. The final score was also stored as a global variable and incremented within the check answer function so the score would be added up throughout all questions combined. A sub function was then added here to give a different comment to the user depending on how good or bad their score was.
   * **Result** - The quiz form would disappear and the users overall score would appear with a funny comment depending on what the score was.

All of the above goals were achieved by writing the code, running it in the browser. Checking through the whole quiz, adjusting teh code. Checking the code again in the browser, adjusting again and so forth until the desired outcome had been achieved. I regularly checked tablet and phone screen sizes during developing. Some of these goals were achieved with the help of my mentor and tudor and other I was able to fugure out for myself. The process however was constant, write the code and run the code.

### Issues found and solved

1. * **Issue** - From friends and family feedback, I learned that some people were not completely sure how the quiz worked.
   * **Fix** - I added some additional instructions on the homepage along with a copy of the switch button to make it clear to people that this was to be used to switch the answers around into the desired order.
   * **Result** -  Much clearer idea for the user on how to work the quiz.

2. * **Issue** - The quiz only displayed the first question.
   * **Fix** - At the start I could only get the first question to appear in the quiz form. I originally thought of using a forEach method but was advised from a code Institute tudor that this would be difficult as my quiz required a lot of user input between all the steps. For example, clicking the 'Check Answers' and 'Next Questions' button to get back to the start of the loop. In this case I used a global counter variable instead which is set to 0 and increments by 1 when the 'Next Question' button is click, therefore instruction the JavaScript to go to the second question is the array.
   * **Result** - The questions are all displayed in array order after user input.

3. * **Issue** - When the answers switch positions, only the text changed.
   * **Fix** - I added an animation before and after the answers changed. It is a slideToggle animation giving the impression that the 2 elements involved in the switch are shutters going up, the answers then change and the shutter goes down again revealing the answers in their switched positions. I needed some help from the Code Institute tudor for this one as I wasn't sure how to apply the animation to my code. They advised me to create 2 animations, one before and the other after the switch to create the best effect.
   * **Result** - A nice smooth transition of the 2 elements answers involved, switchng places so the user can clearly see what has happened when they click the 'switch' buttons.

4. * **Issue** - Switch answers function was duplicated. I had written 1 function for each button.
   * **Fix** - I had initially written the function for the first 2 answers and then copied the code and pasted it for the other 3 switch buttons, changing only a few parameters within the function each time. My mentor advised that this is not good practised because if I needed to change anything in the future I would have to go through all switch functions seperately and change them all. There was a way to reduce all the functions into 1 function which can then be dynamically applied to all switch buttons. He talked me through the process of passing different parameters into the function, and then running the function after, one time for each switch button where the different parameters would again be passed in for the seperate buttons.
   * **Result** - A much cleaner and condensed piece of code that is easier to understand.

5. * **Issue** - When I added the temporary green and red borders to the correct and incorrect answers, the whole element disappeared along with the border after 2 seconds.
   * **Fix** - When the 'Check Answers' button is clicked I wanted to add green and red borders to the correct and incorrect answers but just for 2 seconds to give the player a sneak peak of the answers they gave correctly and incorrectly. Initially I had added green and red border CSS classes with a CSS animation added for the timing effect. However when the 2 seconds had passed the whole element with the grey background and the answers also disappeared along with the border. I did some research on the internet to see if this could be done in JavaScript instead of CSS. I found there was a timeOut function that could be applied after the addClass function so I added that in with a 2 second delay before removing the class after. That gave me the effect I was looking for and the original answer element still remained.
   * **Result** - When the 'Check Answer' button is clicked the user gets a flash of red and green borders to indicate which answers they have correct and incorrect. I added this temporary effect so they user could not memorise the answers. This gives the quiz more replay value.

6. * **Issue** - When quiz was finished, the overall score appeared in the same element as the question score.
   * **Fix** - During family and friends testing I received feedback that when the final score appeared they almost didn't notice as the question score updated to reveal the overall score. I decided to create a new element to show the overall score and that the quiz form would disappear. This gave a clearer impression for the user as to what they had achieved in the quiz. In this final score container I also later added some different comments, depending on what score the user got. I made further improvements to this final score element adding a 'Try Again' so the player could start again immediately and also a 'Homepage' button.
   * **Result** - Improved user experience and design

7. * **Issue** - When 'Try Again' button at the end of the quiz was clicked, it returned to the previous question of the quiz.
   * **Fix** - To fix this I needed to reset the global counter to 0 and overallScore to 0. I had not done this yet so the previous question was displaying everytime. Also the 'Finish Quiz' button was still there. I had not yet removed this class and added the 'Check Answers' button. I fixed all of these issues.
   * **Result** - When 'Try Again' button was clicked the quiz started again, from the first question of the array and the overall score was reset to 0.

8. * **Issue** - Order of questions was the same for every play through. Decreases replay value of the game.
   * **Fix** - From my own extensive testing of the game I thought that the order being the same for every play through may be a little predictable for replay value of the game and I wanted to randomise the order of the myQuestions array. To achieve this I did some research on the internet and found a method that I could apply to my own situation. Firstly I needed to create and empty array (myQuestionsRandom), which would later contain the myQuestions array in a random order. Before that though I needed to creat a rondom index which takes in the length of the myQuestions array in index form and randomises the numbers using a Math.random function. This index is then applied to the array (myQuestions[i]) and then pushed into the empty array of myQuestionsRandom, creating a random order of the questions. Initially though I still had some issues with this function in that it only gave me a random question for the first question and did not go to the next question and did not assess the answers correctly for that first question. After consulting with my mentor reguarding this he spotteed that I had not stated the correct array in my check answer function further down in the code. That fixed the answer problem. He also advised me to move the randomiseQuestions function outside and before the buildQuiz function. I did this but kept it inside the startQuiz function meaning the randomiseQuestions function was initialised first before the buildQuiz function then drew the questions from the new myQuestionsRandom array. The myQuestionsRandom and buildQuiz function were later also initialised within the restartQuiz function in the same order.
   * **Result** - With every play through from the homepage and try again after the quiz, the order of the questions is different increasing the replay value of the game.

9. * **Issue** - I recevied feedback that when the final score appeared, it was out of view slightly and too high up the page.
   * **Fix** - All the elements are disappearing and on the same page so people had scrolled down to the bottom of the quiz form previously displayed to see their score for that question so when the final score appeared the page was still scrolled doen to the bottom so the users could not immediately see their final score without scrolling back up. I added a jQuery method $(window).scrollTop(0); within the finishQuiz function.
   * **Result** - When the final score appears the page automatically scrolls to the top displaying the final score in the middle of the screen.

## Deployment 

The code environment was taken from a code institute Gitpod template that is stored on Github. This is then exported from Github to my own Gitpod account using the ‘Gitpod’ button. The template then opens up on my own Gitpod account with a boiler plate to start coding including links for Bootstrap, jQuery, Popper and Font Awesome so I didn’t need to look for the CDN’s myself. 
After every session of coding I committed my work using the Git terminal in Gitpod. Every commit has a message attached to clearly explain the changes that were made since the last commit. After the commit, the code is also then pushed to my Github account, also using the Git terminal.

### Hosting my site on Github pages

These ther the steps I took to host the live website through Github Pages:
* Opened up GitHub in the browser.
* Signed in using username and password.
* Selected Milestone Project 2 from my repositories.
* In the top navigation selected 'settings'.
* Scrolled down to the GitHub Pages area.
* Selected 'Master Branch' from the 'Source' dropdown menu.
* Clicked to confirm my selection.
* Your site is published https://sparkplug84.github.io/MilestoneProject2/

### Running the code locally

* On GitHub, select the desired repository
* Under the repository name, click the green 'Clone or download' button
* In the Clone with HTTPs section, click the button next to the URL to copy
* Open up your development IDE
* Change the current working directory to the desired file location
* Use the terminal to type git clone, and then paste the URL you copied in Step 2 and press enter
* The copied repository will now be displayed in your own IDE for you to start working on

### Content

All of the content was written by myself but the facts for the quiz were taken from [Wikipedia](https://www.wikipedia.org/)

### Credits and special thanks

1. Special thanks to my mentor [Anthony Ngene](https://github.com/tonymontaro) who talked me through several pieces of code and advised me on how to improve my code
2. Many thanks to the Code Institute tudors, who also helped me out with some small and larger issues I had during the development process
3. Thanks to all the friends and family who tested the game on various devides and gave me feedback to improve the game