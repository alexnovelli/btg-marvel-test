import { Component } from '@angular/core';
import { CharactersData } from '../../models/characters';
import { CharactersService } from '../../services/characters.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public charactersList = [1009718, 1009351, 1009610];
    public charactersData: CharactersData[] = [];

    constructor(private charactersService: CharactersService) {
        this.getCharacters();
    }

    getCharacters() {
        this.charactersList.forEach((id) => {
            this.charactersService.getCharacterById(id).subscribe((response) => {
                if (response) {
                    this.charactersData.push(response);
                }
            });
        });
        this.charactersService.setData(this.charactersData);
    }
}
