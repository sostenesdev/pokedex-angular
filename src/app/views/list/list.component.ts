import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [
    PokeapiService
  ]
})
export class ListComponent implements OnInit {
  pokemonSelected: any = null;
  nameFilter:string = '';
  constructor(private pokeapiService: PokeapiService) {
   }

  ngOnInit(): void {
    this.pokeapiService.listAll();
  }

  get pokemonList(){
    return  this.pokeapiService.pokeList.filter(pokemon =>{
      if(pokemon === null){
        return;
      }
      return pokemon?.name.toLowerCase().indexOf(this.nameFilter.toLocaleLowerCase()) !== -1;
    });
  }

  handleClick(pokemon: any){
    this.pokemonSelected = pokemon;
  }

}
