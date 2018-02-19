import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Update } from '../../models/update';

@Component({
  selector: 'update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {
  private inputText: string;
  private inputTitle: string;

  constructor(private afs: AngularFirestore) {
  }

  onPostClicked() {
    const updatesCollection = this.afs.collection<Update>('updates');
    const update: Update = {
      title: this.inputTitle,
      text: this.inputText,
      timestamp: new Date()
    };
    updatesCollection.add(update);
  }

  onTextKey(event: any) {
    this.inputText = event.target.value;
  }

  onTitleKey(event: any) {
    this.inputTitle = event.target.value;
  }
}
