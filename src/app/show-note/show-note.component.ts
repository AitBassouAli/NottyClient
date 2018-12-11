import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteModule } from '../note/note.module';
import { NoteService } from '../note.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.css']
})
export class ShowNoteComponent implements OnInit {

  uri: string = 'http://localhost:8080/';
  note = new NoteModule(0, '', '');
  files: any;
  uploader: any;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.noteService.getOne(params.id).subscribe(data => {
        this.note = data;
        this.uploader = new FileUploader({ url: this.uri + this.note.id + '/uploadFile', itemAlias: 'file' });
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          console.log('ImageUpload:uploaded:', item, status, response);
          this.files.push(JSON.parse(response));
        };
      }, error => console.log(error));
      this.noteService.getFiles(params.id).subscribe(data => {
        this.files = data;
      }, error => {
      })
    });
  }

}
