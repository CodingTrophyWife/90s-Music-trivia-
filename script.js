

// define variable for tracking
//     track time 
//     track question
// var trackTime;
// var trackQuestion;


// create variables to reference DOM elements

//var timer = document.getElementById("time");
//var questions = document.getElementById("question");
//var answers = document.getElementById("options") ;
//var startbutton = document.getElementById("start");
//var name = document.getElementById("") ;
//var savebutton = document.getElementById("questionbox");
//var highscores = document.getElementById("questionbox");

//document.addEventListener("click", "start");

// function 
//     start quiz
//     hide start button
//     start timer / display timer (countdown)
//     display first question 
// function startquiz(question, questionbox, time, ) {
    



// function 
//     clearing / removing previous question
//     rendering a question 
//     getting first question 
//     add question to question container 
//     make button for each answer
//     add answers to the answer container

    

// function 
//     handle answer clicks 
    
//     if wrong 
//         subtract time for timer (15 seconds)
//         make sure time is displayed correctly on page


//     else 
//         generate next question 

//       flash wrong answer message (setTimeOut)  
//       update question variable to next question 
//       display question on page 

//         if question is last question 
//             trigger quiz completion 
  

     

// function
//     handle quiz completion 
//     stop timer 
//     hide quiz container 
//     show end screen 
//     show time remaining as score



// function 
//     tracking time
//     subtract time 
//     update the page

//         if
//             timer hits zero 
//             trigger quiz completion 


// function 
//     saving high scores 
//     get value of user input (name/initals)
//     validate input
//     retreive existing data fom local storage 
//     update the high score data
//     save updated data back to local storage 
//     redirect to start screen after save 


// function 
//     listening for key press    
//     check if the key pressed was 'enter' for saving scores
//     (optional) check if the key pressed was 'a' 'b' 'c' for answers 




// event listeners
    //  document.addEventListener("click", "start");
    //  document.addEventListener("click", "answers"); 
    //  document.addEventListener("click", "save score") 
    
    //  listen key press?


// var obj = JSON.parse(jsonString);

// console.log(obj.questions[0].Answer2);

// document.getElementById("questionbox").innerHTML = obj.questions[0].Question;


const  question = [
     {
    id: 0,
    q: "Who hit No.1 in 1992 with \"I\'ll Be There?",
    a: [{ text: "Mariah Carey", isCorrect: true },
        { text: "Celine Dion", isCorrect: false },
        { text: "Gloria Estefan", isCorrect: false },
        { text: "Whitney Houston", isCorrect: false }
    ]
},
{
    id: 1,
    q: "How many members were there in 1990s Boyband 98 Degrees?",
    a: [{ text: "6", isCorrect: false },
        { text: "3", isCorrect: false },
        { text: "4", isCorrect: true },
        { text: "5", isCorrect: false } 
    ]
     
},
{
    id: 2,
    q: "Prince had a No.1 hit in 1991 with which color?",
    a: [{ text: "Cream", isCorrect: false },
        { text: "White", isCorrect: false },
        { text: "Red", isCorrect: false },
        { text: "Purple", isCorrect: true }
    ]
     
},
{
    id: 3,
    q: "Who had 1990s hits with \'Release Me\' and \'Hold On\'?",
    a: [{ text: "Mariah Carey", isCorrect: false },
        { text: "Wilson Phillips", isCorrect: true},
        { text: "Paula Abdul", isCorrect: false },
        { text: "Sweet Sensation", isCorrect: false }
    ]
     
},
{
    id: 4,
    q: "Who sang the hit song \'Un-Break My Heart\'?",
    a: [{ text: "All-4-One", isCorrect: false },
        { text: "Mariah Carey", isCorrect: false },
        { text: "Bone Thugs-N-Harmony", isCorrect: false },
        { text: "Toni Braxton", isCorrect: true }
    ]
     
},
{
    id: 5,
    q:"Kris Kross had a No.1 hit with which song in 1992?",
    a: [{ text: "Walk", isCorrect: false },
        { text: "Leap", isCorrect: false },
        { text: "Jump", isCorrect: true },
        { text: "Run", isCorrect: false }
    ]
     
},
{
    id: 6,
    q: "Which band had a one hit wonder in 1998 with \'You Get What You Give\'?",
    a: [{ text: "Blink-182", isCorrect: false },
        { text: "Two Princes", isCorrect: false },
        { text: "New Radicals", isCorrect: true },
        { text: "Aqua", isCorrect: false }
    ]
     
},
{
    id: 7,
    q:"Who sang the song \'Genie in a bottle\'?",
    a: [{ text: "Britney Spears", isCorrect: false },
        { text: "NSync", isCorrect: false },
        { text: "Jessica Simpson", isCorrect: false },
        { text: "Christina Aguilera", isCorrect: true }
    ]
     
},
{
    id: 8,
    q:"What song put Tom Petty and the Heartbreakers back on the charts in the 1990s?",
    a: [{ text: "Mary Jane\'s Last Dance", isCorrect: false },
        { text: "I Won\'t Back Down", isCorrect: true },
        { text: "Breakdown", isCorrect: false},
        { text: "Louisiana Rain", isCorrect: false}
    ]
     
},
{
    id: 9,
    q:"In which year did Sinead O\' Connor have a UK No. 1 hit with Nothing Compares 2 U?",
    a: [{ text: "1994", isCorrect: false },
        { text: "1999", isCorrect: false },
        { text: "1998", isCorrect: false },
        { text: "1990", isCorrect: true }
    ]
     
},
{
    id: 10,
    q:"Monica had a 1998 No.1 with which song?",
    a: [{ text: "The First Night", isCorrect: true },
        { text: "This Night", isCorrect: false },
        { text: "Every Night", isCorrect: false },
        { text: "The Last Night", isCorrect: false }
    ]
     
},
{
    id: 11,
    q:"Cher had a UK No. 1 hit with which song in 1998?",
    a: [{ text: "I Got You Babe", isCorrect: false },
        { text: "Love Hurts", isCorrect: false},
        { text: "Believe", isCorrect: true },
        { text: "Baby I\'m Yours", isCorrect: false }
    ]
     
},
{
    id: 12,
    q: "Emma Bunton was known as which \'Spice\'?",
    a: [{ text: "Sporty", isCorrect: false },
        { text: "Baby", isCorrect: true },
        { text: "Scary", isCorrect: false },
        { text: "Ginger", isCorrect: false }
    ]
     
},
{
    id: 13,
    q: "Which Amy scored a hit in 1991 with \'Baby Baby\'?",
    a: [{ text: "Grant", isCorrect: true },
        { text: "Smith", isCorrect: false },
        { text: "Jones", isCorrect: false },
        { text: "Johnson", isCorrect: false }
    ]
     
},
{
    id: 14,
    q:"What was the name of the Spice Girls first album?",
    a: [{ text: "1", isCorrect: false },
        { text: "Wannabe", isCorrect:  false },
        { text: "Girl Power", isCorrect: false },
        { text: "Spice", isCorrect: true }
    ]
     
},
{
    id: 15,
    q:"Marky Mark was often backed by which \'Bunch\'?",
    a: [{ text: "Crazy Bunch", isCorrect: false },
        { text: "Funky Bunch", isCorrect: true },
        { text: "Mad Bunch", isCorrect: false },
        { text: "Groovy Bunch", isCorrect: false }
    ]
     
},
{
    id: 16,
    q:"Which record did Ace of Base take to No.1 in 1994?",
    a: [{ text: "The Sign", isCorrect: true },
        { text: "The Sigh", isCorrect: false },
        { text: "The Song", isCorrect: false },
        { text: "The Sing", isCorrect: false }
    ]
     
},
{
    id: 17,
    q:"Usher scored a number one hit in 1998 with what song?",
    a: [{ text: "Yeah", isCorrect: false },
        { text: "Caught Up", isCorrect: false },
        { text: "Nice And Slow", isCorrect: true },
        { text: "Burn", isCorrect: false }
    ]
     
},
{
    id: 18,
    q:"Who gave us something to talk about with the song \'Something To Talk About\'?",
    a: [{ text: "Melissa Ethridge", isCorrect: false },
        { text: "Shawn Colvin", isCorrect: false},
        { text: "Christina Aguilera", isCorrect: false },
        { text: "Bonnie Raitt", isCorrect: true }
    ]
     
},
{
    id: 19,
    q:"Who wanted to \'Fly Away\' in 1999?",
    a: [{ text: "Ricky Martin", isCorrect: false },
        { text: "R-Kelly", isCorrect: false },
        { text: "Lenny Kravitz", isCorrect: true },
        { text: "Michael Jackson", isCorrect: false }
    ]
     
},
{
    id: 20,
    q:"What rapper had a number one hit with the song \'Hypnotize\'?", 
    a: [{ text: "Notorious BIG", isCorrect: true },
        { text: "Coolio", isCorrect: false },
        { text: "Mr. Big", isCorrect: false },
        { text: "2Pac", isCorrect: false }
    ]
     
},
{
    id: 21,
    q:"What was Britney Spears\' first hit single?",
    a: [{ text: "Lucky", isCorrect: false },
        { text: "Oops I Did It Again", isCorrect: false },
        { text: "Hit Me Baby One More Time", isCorrect: true },
        { text: "Everytime", isCorrect: false }
    ]
     
},
{
    id: 22,
    q:"Brandy and Monica sang what hit song that stayed at number one for 13 weeks?",
    a: [{ text: "I\'ll Be Your Everything", isCorrect: false},
        { text: "If Wishes Came True", isCorrect: false},
        { text: "Smooth", isCorrect: false },
        { text: "The Boy Is Mine", isCorrect: true }
    ]
     
},
{
    id: 23,
    q:"Who sang the song \'No Scrubs\'?",
    a: [{ text: "Destiny\'s Child", isCorrect: false },
        { text: "Mary J. Blige", isCorrect: false },
        { text: "Whitney Houston", isCorrect: false },
        { text: "TLC", isCorrect: true }
    ]
     
},
{
    id: 24,
    q:"Who was \'Getting Jiggy With It\' in 1999?",
    a: [{ text: "Jay-Z", isCorrect: false },
        { text: "Puff Daddy", isCorrect: false },
        { text: "Will Smith", isCorrect: true },
        { text: "Usher", isCorrect: false }
    ]
     
},
{
    id: 25,
    q:" Nick Carter was a member of which 1990s boy band?", 
    a: [{ text: "NSync", isCorrect: false },
        { text: "98 Degrees", isCorrect: false },
        { text: "Backstreet Boys", isCorrect: true },
        { text: "Boyz II Men", isCorrect: false }
    ]
     
}
]

const questionBox = document.getElementById("questionbox");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");

var wrongAnswers = 0;
var correctAnswers = 0;
var questionNumber = 0;

function bringit() {
    var currentQuestion = question[questionNumber];
    questionBox.innerText = currentQuestion.q;

    answerA.innerText = currentQuestion.a[0].text;
    answerB.innerText = currentQuestion.a[1].text;
    answerC.innerText = currentQuestion.a[2].text;
    answerD.innerText = currentQuestion.a[3].text;

    answerA.value = currentQuestion.a[0].isCorrect;
    answerB.value = currentQuestion.a[1].isCorrect;
    answerC.value = currentQuestion.a[2].isCorrect;
    answerD.value = currentQuestion.a[3].isCorrect;

    answerA.addEventListener("click", answerButtonClicked);
    answerB.addEventListener("click", answerButtonClicked);
    answerC.addEventListener("click", answerButtonClicked);
    answerD.addEventListener("click", answerButtonClicked);
}

function answerButtonClicked() {
    if (this.value == true) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    questionNumber++;
    if (questionNumber < question.length) {
        bringit();
    } else {
        clearBoard(true);
    }
}

function startGame() {
    var timeBox = document.getElementById("time");
    var count = 90;

    timeBox.innerText = count;
    bringit();
    var interval = setInterval(function() {
        count--;
        document.getElementById("time").innerText = count;

        if (count === 0)
        {
            clearInterval(interval);
            clearBoard(false);
        }

        if (questionNumber === question.length) {
            clearInterval(interval);
        }
    }, 1000);
}

function clearBoard(allAnswered) {
    answerA.removeEventListener("click", answerButtonClicked);
    answerB.removeEventListener("click", answerButtonClicked);
    answerC.removeEventListener("click", answerButtonClicked);
    answerD.removeEventListener("click", answerButtonClicked);
    questionBox.innerText = "";
    answerA.innerText = "";
    answerB.innerText = "";
    answerC.innerText = "";
    answerD.innerText = "";

    if (allAnswered == true) {
        alert("You have answered all questions");
    } else {
        alert("You have ran out of time");
    }
}

const startbutton = document.getElementById("start");
startbutton.addEventListener("click", startGame);