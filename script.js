            //Variables
            const targetNumber = Math.floor(Math.random() *100) +1;
            const guessedNumbers = [];
            const highGuesses = [];
            const lowGuesses = [];

            //getElements
            const guessInput = document.getElementById("numberInputField")
            const enterGuessButton = document.getElementById("enterGuessButton");
            const message = document.getElementById("message");
            const guessList = document.getElementById("guessList");
            const highGuessesList = document.getElementById("highGuesses");
            const lowGuessesList = document.getElementById("lowGuesses");

            //Enter the guess
            enterGuessButton.addEventListener("click", () => {
                const userGuess = parseInt(guessInput.value);
                    const difference = Math.abs(userGuess - targetNumber);

                    
                //Check if guess is correct
                if (userGuess === targetNumber)  {
                    message.textContent= `Congratulations! You have guessed correctly! The number was (${targetNumber})`;
                } else if (userGuess < 1 || userGuess > 100)  {
                    message.textContent = "Please guess a number between 1 and 100"
                } else if (userGuess < targetNumber)  {
                    message.textContent = "Higher";
                    lowGuesses.push({guess: userGuess, difference});
                } else {
                    message.textContent = "Lower";
                    highGuesses.push({guess: userGuess, difference});
                }  

                //Sorting and clarity
                guessedNumbers.unshift(userGuess);
                lowGuesses.sort((a, b) => a.difference - b.difference);
                highGuesses.sort((a, b) => a.difference - b.difference);

                //Display numbers
                    guessList.textContent = `Guessed numbers: ${guessedNumbers.join(', ')}`;
                    highGuessesList.textContent = `Too high: ${highGuesses.map(entry => entry.guess).join(', ')}`;
                    lowGuessesList.textContent = `Too low: ${lowGuesses.map(entry => entry.guess).join(', ')}`;

                guessInput.value= " ";
            })

