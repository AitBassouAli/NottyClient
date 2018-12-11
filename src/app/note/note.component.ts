import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { NoteModule } from './note.module';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: Array<NoteModule>;
  allNotes: Array<NoteModule>;
  note = new NoteModule(0, '', '');
  id : any;
  uri: string = 'http://localhost:8080/';
  uploader= new FileUploader({url:'',itemAlias:''});

  constructor(private noteService: NoteService, private router: Router) {
  }

  ngOnInit() {
    this.getAllNotes();
  }

  navigateTo(path){
    this.router.navigate([path]);
  }

  getAllNotes() {
    this.noteService.getAll()
      .subscribe(data => {
        this.notes = data,
        this.allNotes = data,
          console.log(data)
      }, error => console.log(error));
  }

  updateNote(note) {
    this.noteService.setNote(note);
    this.router.navigate(["notes/create"]);
  }

  setNote(note) {
    this.note = note;
    console.log(this.note);
    this.uploader =new FileUploader({ url: this.uri + note.id+'/uploadFile', itemAlias: 'file' });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  archive(note){
    this.noteService.archive(note)
      .subscribe(data => {
        this.getAllNotes();
      }, error => console.log(error));
  }

  searchByTilte(title){
    this.notes = this.allNotes.filter(item => item.title.includes(title));
  }

  copyLink(note){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'http://localhost:4200/notes/'+note.id;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
