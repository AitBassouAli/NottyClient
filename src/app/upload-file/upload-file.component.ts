import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FileModule } from './file/file.module';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  uri: string = 'http://localhost:8080/';
  response: FileModule;

  constructor(private noteService: NoteService) { }

  public uploader: FileUploader = new FileUploader({ url: this.uri + '1/uploadFile', itemAlias: 'file' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response);
      this.response = JSON.parse(response);
      this.noteService.saveUploadedFile(this.response);
    };
  }

}
