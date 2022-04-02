import { Component, OnInit } from '@angular/core';
import { CharactersData } from 'src/app/shared/models/characters';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  public charactersList = ['Deadpool', 'Hulk', 'Spider-Man (Peter Parker)'];
  public charactersData: CharactersData[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersList.forEach((character) => {
      this.charactersService
        .getMarvelCharacters(character)
        .subscribe((response) => {
          if (response) {
            this.charactersData.push(response);
          }
        });
    });
    console.log(this.charactersData);
  }
}
