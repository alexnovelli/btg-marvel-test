import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './character-page/character-page/character-page.component';
import { CharacterSelectionComponent } from './character-selection/character-selection/character-selection.component';
import { CharactersComponent } from './characters.component';

const routes: Routes = [
    {
        path: '',
        component: CharactersComponent,
        children: [
            {
                path: '',
                component: CharacterSelectionComponent,
            },
            {
                path: 'personagem/:id',
                component: CharacterPageComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharactersRoutingModule {}
