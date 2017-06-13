import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Play } from '../play.model';
import { PlayService} from '../play.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-first-play',
  templateUrl: './first-play.component.html',
  styleUrls: ['./first-play.component.css'],
  providers: [PlayService]
})
export class FirstPlayComponent implements OnInit {
  plays: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playService: PlayService) { }

  ngOnInit() {
    this.plays = this.playService.getPlays();
  }

  goToDetailPage(clickedPlay) {
    this.router.navigate(['plays', clickedPlay.$key])
  };

}
