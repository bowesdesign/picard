import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { Update } from '../../models/update';

@Component({
  selector: 'update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent {
  private task: any;
  private ref: AngularFireStorageReference;
  private inputText = '';
  private inputTitle = '';

  public imageUrls = [];

  constructor(private afs: AngularFirestore, private afStorage: AngularFireStorage) {
  }

  onPostClicked() {
    const updatesCollection = this.afs.collection<Update>('updates');
    const update: Update = {
      title: this.inputTitle,
      text: this.inputText,
      images: this.imageUrls,
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

  upload(event) {
    const randomId = Math.random().toString(36).substring(2);
    const randomFilePath = '/images/' + randomId;
    const task = this.afStorage.upload(randomFilePath, event.target.files[0]);


    task.downloadURL().subscribe((downloadUrl: string) => {
      this.imageUrls.push(downloadUrl);
    });
  }
}
