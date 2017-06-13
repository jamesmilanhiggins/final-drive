import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Play } from '../play.model';
import { PlayService } from '../play.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-third-play',
  templateUrl: './third-play.component.html',
  styleUrls: ['./third-play.component.css'],
  providers: [PlayService]
})
export class ThirdPlayComponent implements OnInit {
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
  }

}
