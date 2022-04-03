import { Component } from '@angular/core';

import { CharactersData } from 'src/app/shared/models/characters';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
    selector: 'app-character-selection',
    templateUrl: './character-selection.component.html',
    styleUrls: ['./character-selection.component.scss'],
})
export class CharacterSelectionComponent {
    public charactersData: CharactersData[] = [];

    constructor(private charactersService: CharactersService) {
        charactersService.apiData$.subscribe((data) => (this.charactersData = data));
    }
}
