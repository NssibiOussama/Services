import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PaginatorModule } from 'primeng/paginator';
import { AdminRoutingModule } from './admin-routing.module';

import { SearchComponent } from './search/search.component';
import { SearchByPositionComponent } from './search-by-position/search-by-position.component';


@NgModule({
    declarations: [SearchComponent,SearchByPositionComponent],
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        AdminRoutingModule,
        FileUploadModule,
        InputTextModule,
        InputTextareaModule,
        ToolbarModule,
        CardModule,
        MultiSelectModule,
        SelectButtonModule,
        PaginatorModule
    ]
})
export class AdminModule { }
