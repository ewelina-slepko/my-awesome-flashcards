import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {NewWordRequest} from "./dtos";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: AngularFirestore) {
  }

  addWord(document: NewWordRequest) {
    return this.firestore.collection('words').add(document);
  }
}
