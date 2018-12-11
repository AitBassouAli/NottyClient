import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';
import { NoteModule } from '../note/note.module';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  notes: Array<NoteModule>;
  allNotes: Array<NoteModule>;
  note = new NoteModule(0, '', '');
  
  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
    this.getArcheavedNotes();
  }


  getArcheavedNotes() {
    this.noteService.getArcheavedNotes()
      .subscribe(data => {
        this.notes = data,
        this.allNotes = data,
          console.log(data)
      }, error => console.log(error));
  }

  restore(note){
    this.noteService.restore(note)
      .subscribe(data => {
        this.getArcheavedNotes();
      }, error => console.log(error));
  }

  deleteNote(id) {
    this.noteService.remove(id)
      .subscribe(data => {
        this.getArcheavedNotes();
      }, error => console.log(error));
  }

  searchByTilte(title){
    this.notes = this.allNotes.filter(item => item.title.includes(title));
  }
}
