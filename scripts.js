//ejemplos de como usar appen, append child y insertbefore
//append

var master_class = document.getElementById("nodoPadre");
var master_class_gira = document.getElementById("nodoPadre");
var name_pokemon = document.createElement("h1");
var decripcion_pokemon = document.createElement("p");

master_class.append(name_pokemon)
name_pokemon.append("Mi pokemon favorito es:Giratina")

master_class.appendChild(decripcion_pokemon)
decripcion_pokemon.append("Me gusta y le guardo mucho cariño porque fue el primer pokemon que atrape en los pokemons que tuve la oportunidad de jugar")

var nodoPadre = document.getElementById("nodoPadre");
var img_giratina = document.createElement("img");
img_giratina.src = "giratina.png";
img_giratina.width = 100;
img_giratina.height = 100;
nodoPadre.insertBefore(img_giratina,name_pokemon);