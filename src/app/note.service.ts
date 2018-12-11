import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FileModule } from './upload-file/file/file.module';
import { NoteModule } from './note/note.module';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  uri: string = 'http://localhost:8080/';
  uriNotes: string = 'http://localhost:8080/notes/';
  files: Array<any>;
  note= new NoteModule (0,'','');

  constructor(private http: HttpClient) {
    this.files = [];
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.uriNotes}`);
  }

  getOne(id):any {
    return this.http.get(`${this.uriNotes}${id}`);
  }

  create(note) {
    return this.http.post(`${this.uriNotes}`, note);
  }

  edit(note) {
    return this.http.put(`${this.uriNotes}`, note);
  }

  remove(id) {
    return this.http.delete(`${this.uriNotes}${id}`);
  }

  public getFiles(id): Observable<any> {
    return this.http.get(`${this.uriNotes}${id}`+'/files');
  }

  public saveUploadedFile(file) {
    this.files.push(file);
  }

  public setNote(note) {
    this.note = note;
  }

  restore(note){
    return this.http.put(`${this.uriNotes}restore`, note);
  }

  archive(note){
    return this.http.put(`${this.uriNotes}archive`, note);
  }

  getArcheavedNotes(): Observable<any> {
    return this.http.get(`${this.uriNotes}archeaved`);
  }

  getNote() {
    return this.note;
  }
}
