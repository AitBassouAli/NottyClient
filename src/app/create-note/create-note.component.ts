import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileModule } from '../upload-file/file/file.module';
import { NoteModule } from '../note/note.module';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
 
  uri: string = 'http://localhost:8080/';
  response: FileModule;
  note= new NoteModule (0,'','');

  constructor(private noteService: NoteService, private router: Router) { 
    this.note = noteService.getNote();
  }

  public uploader: FileUploader = new FileUploader({ url: this.uri + 'uploadFile', itemAlias: 'file'});

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response);
      this.response = JSON.parse(response);
      this.noteService.saveUploadedFile(this.response);
    }
  }

  createNewNote() {
    this.noteService.create(this.note)
      .subscribe(data => {
        this.uploader
        this.router.navigate(["/notes"]);
        console.log(data)
      }, error => console.log(error));
  }

  updateNote() {
    this.noteService.edit(this.note)
      .subscribe(data => {console.log(data)
      this.router.navigate(["/notes"]);
      }, error => console.log(error));
  }

  onSubmit() { 
    if (this.note.id) {
      this.updateNote();
    }else{
      this.createNewNote();
    }
}

}
