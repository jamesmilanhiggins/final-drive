import { Injectable } from '@angular/core';
import { Play } from './play.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayService {
  plays: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.plays = database.list('plays');
  }

  getPlays() {
    return this.plays;
  }

  getPlayById(playId: string) {
    return this.database.object('plays/' + playId);
  }
}
