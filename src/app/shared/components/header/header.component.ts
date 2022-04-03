import { Component } from '@angular/core';
import { CharactersData } from '../../models/characters';
import { CharactersService } from '../../services/characters.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public charactersData: CharactersData[] = [];

    constructor(private charactersService: CharactersService) {
        charactersService.apiData$.subscribe((data) => (this.charactersData = data));
    }
}
