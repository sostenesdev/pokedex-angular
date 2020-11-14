import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface PokemonListItem{
  name: string,
  number: string
}
interface PokeListResponseItem{
  name: string,
  resource_uri: string,
  number: any
}

interface PokeListResponse{
  pokemon: PokeListResponseItem[]
}


@Injectable()
export class PokeapiService {
  pokeList:any = [];
  private url:string = '';

  list: PokeListResponseItem[] =[];
  constructor(private http: HttpClient) {
    this.url = "https://dev.treinaweb.com.br/pokeapi";
    let list:PokemonListItem[] = [];

   }

   listAll(){
     this.http.get<PokeListResponse>(`${this.url}/pokedex/1`).subscribe(
       response =>{
         response.pokemon.forEach(pokemon =>{
           pokemon.number = this.getNumberFromUrl(pokemon.resource_uri)
         })
         this.pokeList = this.sortPokemon(response.pokemon).filter(pokemon =>pokemon.number <2000);
       }
     );
   }


   private getNumberFromUrl(url:string){
     return parseInt(url.replace(/.*\/(\d+)\/$/,'$1'));
   }

   private sortPokemon(pokemonList){
     return pokemonList.sort((a, b)=>{
       return(a.number > b.number ? 1 : -1)
     })
   }



}
