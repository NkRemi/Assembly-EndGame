import "./App.css";
import Header from "./Components/Header";
import { languages } from "./languages";
import Language from "./Components/Language";
import { useState } from "react";
import clsx from "clsx";
function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  //to know the number of wrong guesses, we can go through guessedLetters, 
  //and remove all correct letters and evaluate the length of the result array
  //the correct are in currentWord
  const wrongGuessArr = guessedLetters.filter((letter)=>{
    return !currentWord.includes(letter);
  })
  const wrongGuessCount = wrongGuessArr.length;

  //Win Game Logic: We're checking if all the letters in currentWord are in the guessedLetters array
    let found = 0;  
  currentWord.split('').map((letter)=>{
    guessedLetters.includes(letter)? found++ : null;
  })

  let isGameWon  = found === currentWord.length;
  console.log(isGameWon);
  const isGameLost = !isGameWon;


  //display the letters in currentWord that have been guessed ie exist in the guessedLetters Array
  const guessingLetters = currentWord.split("").map((item, index) => {
    return <span key={index}> {guessedLetters.includes(item)? item.toUpperCase() : ''} </span>;
  });

  //Handling the display of the keyboard...each "item" is a character on the keyboard
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.split('').includes(letter);
    const isWrong = isGuessed && !currentWord.split('').includes(letter);
    
    
    const classname = clsx({
      correct:isCorrect,
      wrong:isWrong
    })

     return <button
        onClick={() => {
          handleGuess(letter);
        }}
        className={classname}
      >
        {letter.toUpperCase()}
      </button>
});

//when a button is clicked, check if that char is in the guesses array or not
function handleGuess(item) {
  setGuessedLetters((prev) => {
    return prev.includes(item) ? prev : [...prev, item]
  });
}
// console.log(guessedLetters);
//Display the various languages
const languageArr = languages.map((item, index) => {
  return <Language props={item} index = {index} wrongGuessCount = {wrongGuessCount} key={index}/>

}
  );
return (
  <>
    <Header />
    <section className="status">
      <p className="game-status">You Win!!</p>
      <p>Well Done 🎉</p>
    </section>
    <div className="languages">{languageArr}</div>
    <div className="letter-guesses">{guessingLetters}</div>
    <div className="keyboard">{alphabetArr}</div>

    {isGameLost ? null: <button className="newgame"> New Game </button>}
  </>
);
}

export default App;
