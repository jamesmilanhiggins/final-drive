import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Play } from '../play.model';
import { PlayService } from '../play.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css'],
  providers: [PlayService]
})
export class GameOverComponent implements OnInit {
  playId: string;
  playToDisplay;
  plays: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private playService: PlayService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playId = urlParameters['id'];
    });
    this.playToDisplay = this.playService.getPlayById(this.playId);
    this.plays = this.playService.getPlays();
  }

  goToDetailPage(clickedPlay) {
    this.router.navigate(['game-over', clickedPlay.$key]);
  };

}
