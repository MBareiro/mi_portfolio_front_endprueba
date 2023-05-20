import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas/';
  //URL = 'https://mbdevfrontend.web.app/personas';
  URL = environment.URL + 'personas/';

  constructor(private httpClient: HttpClient) {} public getPersona(): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL+ 'traer/perfil');
  }

}
