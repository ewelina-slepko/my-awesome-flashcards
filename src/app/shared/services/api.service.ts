import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthenticationService} from '../../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: AngularFirestore,
              private authService: AuthenticationService) {
  }

}
