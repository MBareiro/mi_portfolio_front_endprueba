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

  constructor(private httpClient: HttpClient) {} public findPersona(): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL+ 'traer/perfil');
  }

  
  
  //Observable hace peticiones asincronas, maneja las peticiones y respuestas
  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL+'traer/perfil');
  }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `traer`);
  }
/*
  public save(Persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', Persona);
  }*/

  public update(id: number, Persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }
/*
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/

}
