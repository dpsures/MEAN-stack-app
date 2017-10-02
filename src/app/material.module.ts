import { NgModule } from '@angular/core';

import { 
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
 } from "@angular/material";

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialComponentModule { }
