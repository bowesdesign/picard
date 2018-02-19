import { Component } from '@angular/core';
import { Update } from '../../models/update';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent {
  updates: Update[];

  constructor(db: AngularFirestore) {
    db.collection('updates')
      .valueChanges()
      .subscribe((updateList: Update[]) => {
        this.updates = this.sortByTimestamp(updateList);
      });
  }

  sortByTimestamp(updates: Update[]) {
    const sortedUpdates = updates || [];
    sortedUpdates.sort((a, b) => a.timestamp - b.timestamp).reverse();
    return sortedUpdates;
  }
}
