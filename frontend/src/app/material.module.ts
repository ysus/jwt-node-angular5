import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { 
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule

     } from "@angular/material";

@NgModule({
    imports: [MatButtonModule,MatToolbarModule,MatIconModule,MatInputModule],
    exports: [MatButtonModule,MatToolbarModule,MatIconModule,MatInputModule,MatCardModule,]

})
export class MaterialModule {

}