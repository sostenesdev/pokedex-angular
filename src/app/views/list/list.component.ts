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

  nameFilter:string = '';
  constructor(private pokeapiService: PokeapiService) {
   }

  ngOnInit(): void {
  }

  get pokemonList(){
    return  this.pokeapiService.pokeList.filter(pokemon =>{
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLocaleLowerCase()) !== -1;
    });
  }

}
