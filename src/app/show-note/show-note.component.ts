import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteModule } from '../note/note.module';
import { NoteService } from '../note.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.css']
})
export class ShowNoteComponent implements OnInit {

  note = new NoteModule(0, '', '');
  files :any;
  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.noteService.getOne(params.id).subscribe(data => {
        this.note = data,
          console.log(data)
      }, error => console.log(error));
      this.noteService.getFiles(params.id).subscribe(data =>{
        this.files = data;
      },error =>{

      })
    });
  }

}
