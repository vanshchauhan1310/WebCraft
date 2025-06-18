document.getElementById("searchBtn").addEventListener("click", () => {
  const pokemonId = document.getElementById("pokemonId").value;
  const infoDiv = document.getElementById("pokemonInfo");
  
  if (!pokemonId) {
    infoDiv.innerHTML = "<p>Please enter a number between 1-150</p>";
    return;
  }

  infoDiv.innerHTML = "<p>Loading...</p>";
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => {
      if (!response.ok) throw new Error("Pokémon not found");
      return response.json();
    })
    .then(data => {
      infoDiv.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Height: ${data.height / 10}m</p>
        <p>Weight: ${data.weight / 10}kg</p>
      `;
    })
    .catch(error => {
      infoDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
});