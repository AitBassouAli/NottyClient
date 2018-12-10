import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FileModule {
  fileName: string;
  fileDownloadUri: string;
  fileType: string;
  size: number;
}
