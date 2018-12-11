import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { NoteComponent } from './note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './note.service';
import { FileSelectDirective } from 'ng2-file-upload';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { ShowNoteComponent } from './show-note/show-note.component';
import { TrashComponent } from './trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    LoginComponent,
    FileSelectDirective,
    UploadFileComponent,
    SideBarComponent,
    NavBarComponent,
    CreateNoteComponent,
    RegisterUserComponent,
    ShowNoteComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    FormsModule
    
  ],
  providers: [UserService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
