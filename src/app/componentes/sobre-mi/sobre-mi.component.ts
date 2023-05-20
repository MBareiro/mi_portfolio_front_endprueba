import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona: Persona = null;
  isLogged = false;

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    //this.cargarPersona();
  }

  cargarPersona(): void{
    this.personaService.getPersona().subscribe(data => 
      {this.persona = data}
      )
  }
}