import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterPageComponent } from './character-page/character-page/character-page.component';
import { CharacterSelectionComponent } from './character-selection/character-selection/character-selection.component';

@NgModule({
  declarations: [CharactersComponent, CharacterCardComponent, CharacterPageComponent, CharacterSelectionComponent],
  imports: [CommonModule, CharactersRoutingModule],
})
export class CharactersModule {}
