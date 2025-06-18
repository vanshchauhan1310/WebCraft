 // Weather Example
        function checkWeather() {
            return new Promise((resolve, reject) => {
                const weatherOptions = ["☀️ Sunny", "🌧️ Rainy", "⛄ Snowy"];
                const randomWeather = weatherOptions[Math.floor(Math.random() * 3)];
                
                setTimeout(() => {
                    if(randomWeather){
                    resolve(`Today's weather: ${randomWeather}`);
                    }
                    else{
                        reject("no wheater")
                    }
                }, 1000);
            });
        }

        document.getElementById("weatherBtn").addEventListener("click", () => {
            const weatherResult = document.getElementById("weatherResult");
            weatherResult.textContent = "Checking weather...";
            
            checkWeather()
                .then(weather => {
                    weatherResult.textContent = weather;
                })
                .catch(error => {
                    weatherResult.textContent = "Failed to check weather";
                    console.error(error);
                });
        });

        // Joke Example
        document.getElementById("jokeBtn").addEventListener("click", () => {
            const jokeResult = document.getElementById("jokeResult");
            jokeResult.textContent = "Loading joke...";
            
            fetch("https://official-joke-api.appspot.com/random_joke")
                .then(response => response.json())
                .then(joke => {
                    jokeResult.innerHTML = `<p><strong>${joke.setup}</strong><br>${joke.punchline}</p>`;
                })
                .catch(error => {
                    jokeResult.textContent = "Couldn't fetch joke. Try again!";
                    console.error(error);
                });
        });

   