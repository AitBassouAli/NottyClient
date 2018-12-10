import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NoteModule {
  id: number;
  title: string;
  body: string;
  creationDate: Date;
  updateDate: Date;
  deleteDate: Date;

  constructor(
    id:number,
    title: string,
    body: string
  ) { }

  

}
