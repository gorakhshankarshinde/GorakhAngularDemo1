import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCreateComponent } from './student-create.component';
import { StudentEditComponent } from './student-edit.component';



@NgModule({
  declarations: [
    StudentCreateComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    StudentCreateComponent,
    StudentEditComponent
  ]

})
export class StudentModule {

  
 }
