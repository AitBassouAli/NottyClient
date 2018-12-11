import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ShowNoteComponent } from './show-note/show-note.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {
    path: 'auth', children: [
      {
        path: 'login', component: LoginComponent
      }
    ]
  },
  {
    path: 'notes', children: [
      {
        path: '', component: NoteComponent
      },
      {
        path: 'create', component: CreateNoteComponent
      }, 
      {
        path: ':id', component: ShowNoteComponent
      }
    ]
  },
  {
    path: 'upload', component: UploadFileComponent
  },
  {
    path: 'trash', component: TrashComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
