import {Injectable} from '@angular/core';
import {WordDto} from "../../shared/dtos";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  details: WordDto;
}
