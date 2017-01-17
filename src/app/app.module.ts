import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from "ng-semantic";
import { FroalaEditorModule } from "ng2-froala-editor/ng2-froala-editor";

import { AppRoutingModule, routedComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { SongService } from './song.service';
import { AuthorService } from './author.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SongsComponent } from './songs/songs.component';
import { SongComponent } from './song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    DashboardComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    FroalaEditorModule,
    NgSemanticModule
  ],
  providers: [
    SongService, AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
