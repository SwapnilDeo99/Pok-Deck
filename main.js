async function fetchApi() {
  let n = parseInt(document.querySelector("#numberOfPoke").value);
  let type = document.querySelector("#type").value;
  const response = await fetch("https://pokeapi.co/api/v2/type/" + type);
  const data = await response.json();
  selectedPokemonList = data.pokemon.slice(0, n);

  let parent = document.querySelector(".container");
  parent.innerHTML= "";

  for (let i = 0; i < selectedPokemonList.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "pokemon-card");

    let p_Url = selectedPokemonList[i].pokemon.url;
    let p_response = await fetch(p_Url);
    let p_data = await p_response.json();

    
    p_img = p_data.sprites.front_default;
    let img = document.createElement("img");
    img.setAttribute("src",p_img);
    div.appendChild(img)


    let h3 = document.createElement("h3");
    h3.innerHTML = selectedPokemonList[i].pokemon.name;
    div.appendChild(h3); 

    let div_stat = document.createElement("div");
    div_stat.setAttribute("class", "stat");
    let p_stat = p_data.stats;
    console.log(p_stat)
    for(let j = 0; j < p_stat.length; j++){
        let stat = p_stat[j].stat.name;
        let value = p_stat[j].base_stat;
        let p = document.createElement("p"); 
        p.innerHTML = stat + " : " + value;
        div_stat.appendChild(p);
    }
    div.appendChild(div_stat);

    parent.appendChild(div);
  }
}
