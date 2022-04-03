import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [CharactersComponent, CharacterCardComponent],
  imports: [CommonModule, CharactersRoutingModule],
})
export class CharactersModule {}
