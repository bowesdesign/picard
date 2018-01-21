import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public items: any[];

  constructor(db: AngularFirestore) {
    db.collection('updates').valueChanges().subscribe((val) => {
      this.items = val;
    });
  }
}
