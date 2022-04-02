import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CharactersData } from '../models/characters';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url: string;
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.url = environment.marvelUrl;
    this.apiKey = environment.marvelApiKey;
  }

  getMarvelCharacters(characterName: string): Observable<CharactersData> {
    return this.http
      .get<CharactersData>(`${this.url}`, {
        params: {
          name: characterName,
          apikey: this.apiKey,
        },
      })
      .pipe(
        map((response) => Object(response).data.results[0] as CharactersData)
      );
  }
}
