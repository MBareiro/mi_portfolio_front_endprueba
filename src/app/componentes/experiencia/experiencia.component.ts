import { Component } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
