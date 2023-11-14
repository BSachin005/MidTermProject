// Story stages
const story = [
    {
        text: "You are a cop searching for a jewel thief in the city. You get a call that the thief was spotted around an abandoned warehouse.",
        choices: ["Search around the warehouse", "Wait for back up"],
        consequence: [1, 2],
        image: "copgame.jpg"
    },
    {
        text: "You get to the warehouse and find a broken window. It looks like someone broke in!",
        choices: ["Enter through the window", "Case perimeter first"],
        consequence: [3, 4],
        image: "copgame.jpg"
    },
    {
        text: "You climb through the window and see the shadowy figure of someone. 'Freeze, police!' you yell.",
        choices: ["Turn on your flashlight", "Draw your weapon"],
        consequence: [5, 6],
        image: "copgame.jpg"
    },
    {
        text: "The shadowy figure runs deeper into the warehouse. You give chase!",
        choices: ["Run after them", "Radio for backup first"],
        consequence: [7, 8],
        image: "copgame.jpg"
    },
    {
        text: "You run after the thief through winding warehouse shelves. You come face to face and tackle them to the ground!",
        choices: ["Arrest the thief", "Interrogate the thief"],
        consequence: [9, 10],
        image: "copgame.jpg"
    },
    {
        text: "You slap handcuffs on the thief and radio your partner. Good work catching the jewel thief!",
        image: "copgame.png"
    },
    {
        text: "The captured thief reveals that they were part of a larger criminal organization. You need to gather more information.",
        choices: ["Cooperate with the captured thief", "Take them directly to the station"],
        consequence: [11, 12],
        image: "copgame.jpg"
    },
    {
        text: "You decide to cooperate with the captured thief, hoping to gain valuable insights into the criminal organization.",
        choices: ["Infiltrate the criminal organization", "Report the information to your superiors"],
        consequence: [13, 14],
        image: "copgame.jpg"
    },
    {
        text: "You successfully infiltrate the criminal organization but face a moral dilemma. The organization offers you a tempting deal.",
        choices: ["Accept the deal", "Stay true to your principles"],
        consequence: [15, 16],
        image: "copgame.jpg"
    },
    {
        text: "You accept the deal and gain temporary peace in the city, but you become entangled in the criminal world.",
        image: "copgame.jpg"
    },
    {
        text: "You stay true to your principles, bring down the criminal organization, and become a hero in the eyes of the city.",
        image: "copgame.jpg"
    },
    {
        text: "Months pass, and a new threat emerges. You receive intel about a drug cartel operating in the city.",
        choices: ["Investigate the drug cartel", "Take a break from the action"],
        consequence: [17, 18],
        image: "copgame.jpg"
    },
    {
        text: "You delve into the drug cartel's activities, discovering a network of illegal operations. It's a dangerous game.",
        choices: ["Confront the cartel leader", "Gather more evidence before taking action"],
        consequence: [19, 20],
        image: "copgame.jpg"
    },
    {
        text: "You confront the cartel leader in a high-stakes showdown. The city holds its breath as you bring justice to the dangerous criminals.",
        image: "copgame.jpg"
    },
    {
        text: "You choose to gather more evidence, planning a strategic takedown. It takes time, but you dismantle the cartel without compromising your safety.",
        image: "copgame.jpg"
    },
    // Add more stages as needed
];

// Game state
let currentStage = 0;

// Display story text
function displayStory(text) {
    document.getElementById("decision-heading").innerText = text;
}

// Display choices
function displayChoices(choices) {
    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
        let choiceButton = document.createElement("button");
        choiceButton.textContent = choices[i];
        choiceButton.addEventListener("click", function() {
            makeChoice(story[currentStage].consequence[i]);
        });
        choicesDiv.appendChild(choiceButton);
    }
}

// Display image 
function displayImage(image) {
    let img = document.getElementById("story-image");
    img.src = image;
    img.style.display = "block";
}

// Start game
function startGame() {
    currentStage = 0;
    document.getElementById("home").style.display = "none";
    document.getElementById("decision-page").style.display = "block";
    updateStory();
}

// Restart game
function restartGame() {
    currentStage = 0; 
    document.getElementById("home").style.display = "block";
    document.getElementById("decision-page").style.display = "none";
}

// Update story
function updateStory() {
    let stage = story[currentStage];
    
    displayStory(stage.text);
    displayChoices(stage.choices);
    displayImage(stage.image);
}

// Make choice
function makeChoice(consequence) {
    if (consequence !== undefined) {
        currentStage = consequence;
        updateStory();
    } else {
        // End of the game or specific case
        displayStory("Congratulations! You've reached the end of the adventure.");
        displayChoices([]);
        displayImage("images/end-of-game.jpg");
        document.getElementById("restart-game").style.display = "inline-block";
    }
}
// Start game on click
document.getElementById("start-game").addEventListener("click", startGame);

// Restart game on click
document.getElementById("restart-game").addEventListener("click", restartGame);
