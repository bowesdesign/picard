import { Component } from '@angular/core';
import { Update } from '../../models/update';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent {
  db: AngularFirestore;
  updates: Update[] = [];
  moreUpdatesAvailable = true;

  constructor(db: AngularFirestore) {
    this.db = db;
    this.getUpdates();
  }

  getUpdates() {
    const lastUpdate = this.updates[this.updates.length - 1];

    this.db.collection('updates', this.updateQuery(lastUpdate))
      .valueChanges()
      .subscribe((updateList: Update[]) => {
        if (updateList.length === 0) {
          this.moreUpdatesAvailable = false;
        } else {
          this.updates = this.updates.concat(updateList);
        }
      });
  }

  private updateQuery(lastUpdate: Update) {
    if (lastUpdate) {
      return ref => ref.orderBy('timestamp', 'desc')
        .startAfter(lastUpdate.timestamp)
        .limit(10);
    } else {
      return ref => ref.orderBy('timestamp', 'desc')
        .limit(10);
    }
  }
}
