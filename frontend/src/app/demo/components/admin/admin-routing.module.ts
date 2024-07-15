import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchByPositionComponent } from './search-by-position/search-by-position.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SearchComponent },
        { path: 'position', component: SearchByPositionComponent },

    ])],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
