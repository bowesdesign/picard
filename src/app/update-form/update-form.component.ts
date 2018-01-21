import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Update } from '../models/update';

@Component({
  selector: 'update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  inputValue: string;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
  }

  onPostClicked() {
    const updatesCollection = this.afs.collection<Update>('updates');
    updatesCollection.add({text: this.inputValue, timestamp: new Date()});
  }

  onKey(event: any) {
    this.inputValue = event.target.value;
  }
}
