(function() {


    const firstQuestions = [
        {
            question: "How long was the USS Enterprise's mission supposed to last?",
            answers: {
              a:  "5 years ",
              b:  "3 years",
              c:  "10 years",
              d:  "It was never stated",
            },
            correctAnswer:  "a"
          },
          {
            question: "What nickname does Kirk have for McCoy?",
            answers: {
              a:  "Mac",
              b:  "Jay",
              c:  "Doc",
              d:  "Bones",
            },
            correctAnswer:  "d"
          },
          {
            question: "What is the “T” in “James T Kirk”?",
            answers: {
              a:  "Thomas",
              b:  "Tiberius",
              c:  "Talium",
              d:  "Terra",
            },
            correctAnswer:  "b"
          },
          {
            question: "If you wore a red shirt in a story, it was likely you would . . . ?",
            answers: {
              a:  "Get to sleep with a woman",
              b:  "Beback for another episode",
              c:  "Have lines to say",
              d:  "Die",
            },
            correctAnswer:  "d"
          },
          {
            question: "What is the name of the actor who portrayed James T Kirk in the Original Star Trek series?",
            answers: {
              a:  "DeForest Kelley",
              b:  "Leanord Nimoy",
              c:  "William Shatner",
              d:  "Nichelle Nichols",
            },
            correctAnswer:  "c"
          },
          {
            question: "What is Captain Kirk's middle name?",
            answers: {
              a:  "Tiberius",
              b:  "Troy",
              c:  "Timothy",
              d:  "Thomas",
            },
            correctAnswer:  "a"
          },      
    ]
    
    const secondQuestions = [
        {
            question: "The original Star Trek series took place over how many years?",
            answers: {
              a:  "3",
              b:  "1",
              c:  "5",
              d:  "10",
            },
            correctAnswer:  "a"
          },
          {
            question: "Which cast member was always the miracle worker?",
            answers: {
              a:  "McCoy",
              b:  "Sulu",
              c:  "Spock",
              d:  "Scotty",
            },
            correctAnswer:  "d"
          },
          {
            question: "What is the principle of Star Fleet's \"Prime Directive\?",
            answers: {
              a:  "Non-Intervention",
              b:  "Diplomacy and Non-Violence",
              c:  "Providing Assistance to Those in Need",
              d:  "Exploration and Scientific Study",
            },
            correctAnswer:  "a"
          },        
    ]
    
    const thirdQuestions = [
        {
            question: "Which state is the birthplace of James T. Kirk?",
            answers: {
              a:  "New Jersey",
              b:  "Arizona",
              c:  "Iowa",
              d:  "Maine",
            },
            correctAnswer:  "c"
          },
          {
            question: "What did Zefram Cochrane invent?",
            answers: {
              a:  "Teleportation Technology",
              b:  "Replicators",
              c:  "Androids",
              d:  "Warp Drive Technology",
            },
            correctAnswer:  "d"
          },
          {
            question: "Hikaru Sulu held which position for the longest period of time aboard the USS Enterprise (NCC-1701-A)?",
            answers: {
              a:  "Science Officer",
              b:  "Chief Engineer",
              c:  "Helmsman",
              d:  "Communications Officer",
            },
            correctAnswer:  "c"
          },
          {
            question: "What class of planet is the most suitable for human existence?",
            answers: {
              a:  "I-Class",
              b:  "A-Class",
              c:  "M-Class",
              d:  "Q-Class",
            },
            correctAnswer:  "c"
          },
          {
            question: "Who created the Original Star Trek Series?",
            answers: {
              a:  "George Takei",
              b:  "Majel Barrett-Roddenberry",
              c:  "Gene Roddenberry",
              d:  "Walter Koenig",
            },
            correctAnswer:  "c"
          },
          {
            question: "What is Scotty's first and last name on the show?",
            answers: {
              a:  "Montgomery Scott",
              b:  "William Scott Fitzgerald",
              c:  "Fitzwilliam Scott",
              d:  "Scotty McScott-Scott",
            },
            correctAnswer:  "a"
          },
          {
            question: "What do you call a speed lower than Warp 1?",
            answers: {
              a:  "Impulse",
              b:  "Jump Speed",
              c:  "Deceleration",
              d:  "Light Speed",
            },
            correctAnswer:  "a"
          },      
    ]
    
    const fourthQuestions = [
        {
            question: "Scotty was played by James Doohan. What country is James originally from?",
            answers: {
              a:  "Canada",
              b:  "Scotland",
              c:  "The United States",
              d:  "Australia",
            },
            correctAnswer:  "a"
          },
          {
            question: "Leo Francis Walsh was a known galactic criminal and a con man. What was his real name?",
            answers: {
              a:  "Robert Fox",
              b:  "Roger Charles Carmel",
              c:  "Zefram Cochrane",
              d:  "Harcourt Fenton Mudd",
            },
            correctAnswer:  "d"
          },
          {
            question: "The physiology of the alien race Horta, that caused problems in the mines of Janus VI, is based on which element?",
            answers: {
              a:  "Sulfur",
              b:  "Lithium",
              c:  "Carbon",
              d:  "Silicon",
            },
            correctAnswer:  "d"
          },
          {
            question: "What is the name of the Klingon home world?",
            answers: {
              a:  "Qo'noS",
              b:  "Klingonia",
              c:  "Anacreon",
              d:  "Gorkon",
            },
            correctAnswer:  "a"
          },
          {
            question: "Mr. Spock was one of the main characters of the Star Trek franchise.  In which season did viewers get their first glimpse of Spock's home world, Vulcan?",
            answers: {
              a:  "Season 1",
              b:  "Season 2",
              c:  "Season 3",
              d:  "Season 4",
            },
            correctAnswer:  "b"
          },
          {
            question: "Spock’s parents were both different species. What were they?",
            answers: {
              a:  "Romulan and Vulcan",
              b:  "Klingon and Human",
              c:  "Vulcan and Human",
              d:  "Human and Romulan",
            },
            correctAnswer:  "c"
          },
          {
            question: "How many years did the original Star Trek air on TV?",
            answers: {
              a:  "8 years",
              b:  "5 years",
              c:  "3 years",
              d:  "2 years",
            },
            correctAnswer:  "c"
          },
          {
            question: "What is Nurse Chapel's first name?",
            answers: {
              a:  "Mortimer",
              b:  "Christine",
              c:  "Stephen",
              d:  "Sally",
            },
            correctAnswer:  "b"
          },      
    ]
    
    const fifthQuestions = [
        {
            question: "On which ship did Captain James Kirk serve before the USS Enterprise?",
            answers: {
              a:  "USS Summit",
              b:  "USS Republic",
              c:  "USS Farragut ",
              d:  "USS Defiant",
            },
            correctAnswer:  "c"
          },
          {
            question: "Amanda Grayson, Spock's mother, was very fond of one author. Who was her favorite writer?",
            answers: {
              a:  "Ernest Hemingway",
              b:  "Lewis Carroll",
              c:  "Jack London",
              d:  "William Shakespeare",
            },
            correctAnswer:  "b"
          },
          {
            question: "Originally, the creators of the show intended for Spock to be from Mars. Later, however, they changed it to Vulcan. Why?",
            answers: {
              a:  "They wanted something more exotic than a planet from our Solar System",
              b:  "They thought it was too similar to George Wells' novel \"War of the Worlds\"",
              c:  "They thought that humans would walk on Mars soon after the show was launched",
              d:  "At the time of the creation of Star Trek, they knew Mars was basically a desert",
            },
            correctAnswer:  "c"
          },
          {
            question: "Who was supporting the people of planet Neural with weapons (Episode 19, Season 2, 'A Private Little War')?",
            answers: {
              a:  "Klingons",
              b:  "Romulans",
              c:  "Humans",
              d:  "Andorians",
            },
            correctAnswer:  "a"
          },
          {
            question: "Who designed the costumes for the Star Trek crew?",
            answers: {
              a:  "John Caglione",
              b:  "Jack Pierce",
              c:  "Bill Theiss",
              d:  "Stan Winston",
            },
            correctAnswer:  "c"
          },
          {
            question: "In one episode, James T. Kirk engaged himself in a fight against an individual of the Gorn race on the surface of a desert planet. What was the title of the episode?",
            answers: {
              a:  "The Enemy Within",
              b:  "Arena",
              c:  "Space Seed",
              d:  "The Cloud Minders",
            },
            correctAnswer:  "b"
          },
          {
            question: "One of the members of the crew was chief communications officer Uhura. Her name comes from Swahili word \"uhuru\". What does it mean?",
            answers: {
              a:  "Freedom",
              b:  "Star",
              c:  "Hope",
              d:  "Light",
            },
            correctAnswer:  "a"
          },
          {
            question: "In the pilot, who was “Number One”?",
            answers: {
              a:  "The woman who ended up playing Nurse Chapel on the series",
              b:  "Mr. Spock",
              c:  "There was no Number One",
              d:  "A bit player, never to be seen again",
            },
            correctAnswer:  "a"
          },
          {
            question: "Who told Nichelle Nichols that her role on Star Trek was important to the black community in general?",
            answers: {
              a:  "Bill Cosby",
              b:  "Martin Luther King, Jr",
              c:  "Gene Roddenberry",
              d:  "Sidney Poitier",
            },
            correctAnswer:  "b"
          },
          {
            question: "On the show, how many times did Kirk marry?",
            answers: {
              a:  "5 Times",
              b:  "He never married",
              c:  "1 Time",
              d:  "8 Times",
            },
            correctAnswer:  "c"
          },
          {
            question: "What was the name of the man who existed in both the positive and negative universes?",
            answers: {
              a:  "Lazarus",
              b:  "Bale",
              c:  "Zephram",
              d:  "Artimus",
            },
            correctAnswer:  "a"
          },
          {
            question: "What is the name of the species that compelled Captain Kirk and Lt Uhura to kiss (the first kiss between a white man and a black woman on a scripted US TV show)?",
            answers: {
              a:  "The Romulans",
              b:  "The Iconians",
              c:  "The Platonians",
              d:  "The Kazon",
            },
            correctAnswer:  "c"
          },
          {
            question: "Which of the following was not a founding species of the United Federation of Planets?",
            answers: {
              a:  "Andorians",
              b:  "Vulcans",
              c:  "Betazoids",
              d:  "Tellarites",
            },
            correctAnswer:  "c"
          },
          {
            question: "What was the title of the original Star Trek series pilot?",
            answers: {
              a:  "The Cage",
              b:  "Where No Man Has Gone Before",
              c:  "The Man Trap",
              d:  "Tomorrow Is Yesterday",
            },
            correctAnswer:  "a"
          },
          {
            question: "When did the last episode (Turnabout Intruder) of the Original Star Trek series air?",
            answers: {
              a:  "25023",
              b:  "25357",
              c:  "26658",
              d:  "24721",
            },
            correctAnswer:  "b"
          },
          {
            question: "What is special about Elaan’s necklace in “Elaan of Troyius”?",
            answers: {
              a:  "It's Got a Negative Energy",
              b:  "It's Alive",
              c:  "It's made of Dilithium Crystals",
              d:  "If she touched someone with the necklace, they fell in love with her.",
            },
            correctAnswer:  "c"
          },
    ]

    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];

      myQuestions = [
          firstQuestions[Math.floor(Math.random() * firstQuestions.length)],
          secondQuestions[Math.floor(Math.random() * secondQuestions.length)],
          thirdQuestions[Math.floor(Math.random() * thirdQuestions.length)],
          fourthQuestions[Math.floor(Math.random() * fourthQuestions.length)],
          fifthQuestions[Math.floor(Math.random() * fifthQuestions.length)],
        ];

  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <form method="post" action="/" id="form${questionNumber}">
               <div class="question"> ${currentQuestion.question} </div>
               <div class="answers"> ${answers.join("")} </div>
               
             </form>


           </div>`
        );
      });
      //             <button type="submit" form="form${questionNumber}" value="Submit Question ${questionNumber}">Submit Question ${questionNumber}</button>
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }

    function resetQuiz() {

        httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', '/reset');
        httpRequest.send();

        quizContainer.innerHTML = "";
        buildQuiz();
        slides = document.querySelectorAll(".slide");
        let currentSlide = 0;
        showSlide(0);
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;

      if (currentSlide === slides.length -1) {
          resetButton.style.display = "inline-block";
      } else {
          resetButton.style.display = "none";
      }
      nextButton.style.display = "inline-block";
    }
  
    function showFailure() {
        resetButton.style.display = "inline-block";
        nextButton.style.display = "none";
    }
    function showNextSlide() {
      var passed = validateSlide();

      httpRequest = new XMLHttpRequest();
      httpRequest.open('POST', '/sendToSQS');
      httpRequest.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8' );
      httpRequest.send(passed);
      
      if (passed === true) {
        showSlide(currentSlide + 1);
      } else {
        showFailure();
      }
      
    }



    function validateSlide() {
        var result = false;
        const answerContainers = quizContainer.querySelectorAll(".answers");
        const answerContainer = answerContainers[currentSlide];
        const selector = `input[name=question${currentSlide}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === myQuestions[currentSlide].correctAnswer) {
            result = true;
        }

        return result;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
  
    // display quiz right away
    buildQuiz();
  
    const nextButton = document.getElementById("next");
    const resetButton = document.getElementById('reset')
    var slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    nextButton.addEventListener("click", showNextSlide);
    resetButton.addEventListener("click", resetQuiz);
  })();
  