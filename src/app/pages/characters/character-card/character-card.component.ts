import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
    styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
    @Input() characterName = '';
    @Input() imageUrl = '';
    @Input() characterId: number;

    constructor() {}

    openCharacterPage() {
        console.log(this.characterId);
    }
}
