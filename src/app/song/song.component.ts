import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Song} from '../song';
import {Author} from '../author';
import {SongService} from '../song.service';
import {AuthorService} from '../author.service';
import {AsyncPipe} from "@angular/common";
import 'rxjs/add/operator/find';

import {FroalaEditorCompnoent} from 'ng2-froala-editor/ng2-froala-editor';

@Component({
  selector: 'my-song-detail',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})

export class SongComponent implements OnInit {
  @Input() song$: Observable<any>;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  authors: Observable<Author[]>;
  froalaOptions: any = {
    height: 300
  };
  constructor(private songService: SongService,
              private authorService: AuthorService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.authors = this.authorService.items;
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.songService.load(id);
        this.songService.items
          .map(songs => songs.find(item => item.id === id))
          .subscribe(songs => this.song$ = songs);

      } else {
        this.navigated = false;
        // this.song$ = new Song();
      }
    });
    this.authorService.loadAll();
  }

  // test(v1): void {
  //   const difference = (arr, ...others) => {
  //     var combined = [].concat(...others)
  //     return arr.filter(el => !combined.some(exclude => el === exclude))
  //   };
  //   let diffArray: any = difference(v1, Array.from(this.authors.source.value, x => x.id + ""));
  //   if (diffArray.length){
  //     diffArray.forEach((element)=>{
  //       if(this.authors.source.value.some((c)=>{
  //         console.info(c.name, element)
  //         return c.name===element
  //       })){
  //         this.authorService.create(new Author({name:element}))
  //       }
  //
  //     });
  //   }
  //
  //   // this.authors.load().map(authors => {
  //   //   debugger
  //   //   console.info(authors)
  //   // });
  //   // .subscribe(data => console.log(data));
  //   // this.authorService.load(lastItem).catch(()=>{
  //   //   this.authorService.save(new Author({name:lastItem}))
  //   // });
  //   // console.info(lastItem, this.authors);
  // }

  save(): void {
    this.songService
      .save(this.song$)
    // .then(song$ => {
    //   this.song$ = song$;
    //   this.goBack(song$);
    // })
    // .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedSong: Song = null): void {
    this.close.emit(savedSong);
    if (this.navigated) {
      window.history.back();
    }
  }
}
