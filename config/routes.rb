Pokedex::Application.routes.draw do


  root to: "pokedex#index"
  resources :pokemons

end
