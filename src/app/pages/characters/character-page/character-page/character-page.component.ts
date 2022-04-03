import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersData } from 'src/app/shared/models/characters';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
    selector: 'app-character-page',
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.scss'],
})
export class CharacterPageComponent implements OnInit {
    public characterData: CharactersData;
    public imageUrl = '';
    public characterComicsUrl = '';

    constructor(private charactersService: CharactersService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.getCharacterData(params['id']);
        });
    }

    getCharacterData(id: number) {
        this.charactersService.getCharacterById(id).subscribe((response) => {
            if (response) {
                this.characterData = response;
                this.imageUrl = `url(./assets/images/background/${this.characterData.id}.jpg)`;
                const characterComicLink = this.characterData.urls.find((item) => item.type === 'comiclink');
                if (characterComicLink) {
                    this.characterComicsUrl = characterComicLink.url;
                }
            }
        });
    }
}
