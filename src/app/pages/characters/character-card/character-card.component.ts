import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
    styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
    @Input() characterName = '';
    @Input() imageUrl = '';
    @Input() characterId: number;

    constructor(private router: Router) {}

    openCharacterPage() {
        const url = 'personagem/' + this.characterId;
        this.router.navigate([url]);
    }
}
