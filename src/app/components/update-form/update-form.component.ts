import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { Update } from '../../models/update';
import { Location } from '@angular/common';

@Component({
  selector: 'update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent {
  private task: any;
  private ref: AngularFireStorageReference;
  private inputText = '';

  public imageUrls = [];
  public uploadInProgress: boolean;


  constructor(private afs: AngularFirestore, private afStorage: AngularFireStorage, private location: Location) {
  }

  onPostClicked() {
    const updatesCollection = this.afs.collection<Update>('updates');
    const update: Update = {
      text: this.inputText,
      images: this.imageUrls,
      timestamp: new Date()
    };
    updatesCollection.add(update);
    this.location.back();
  }

  onTextKey(event: any) {
    this.inputText = event.target.value;
  }

  upload(event) {
    const randomId = Math.random().toString(36).substring(2);
    const randomFilePath = '/images/' + randomId;
    const task = this.afStorage.upload(randomFilePath, event.target.files[0], {cacheControl: 'public, max-age=31536000'});
    this.uploadInProgress = true;


    task.downloadURL().subscribe((downloadUrl: string) => {
      this.imageUrls.push(downloadUrl);
    });
  }

  imagePresent() {
    return this.imageUrls && this.imageUrls.length > 0;
  }
}
