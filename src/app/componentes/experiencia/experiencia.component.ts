import { Component } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  
  experienciaArray = [
    {id: 1, empresa : "arcor", puesto: "gerente", fecha: "2002"}    
  ];  

  selectedExperiencia: Experiencia = new Experiencia();

  addOrEdit(){
    if(this.selectedExperiencia.id === 0){
      this.selectedExperiencia.id = this.experienciaArray.length + 1;
      this.experienciaArray.push(this.selectedExperiencia);   
    }
    this.selectedExperiencia = new Experiencia();   
  }  

  clearModal(){
    this.selectedExperiencia = new Experiencia();  
  }

  operForEdit(experiencia: Experiencia){
    this.selectedExperiencia = experiencia;
  }

  delete(){
    this.experienciaArray = this.experienciaArray.filter(x => x != this.selectedExperiencia);
    this.selectedExperiencia = new Experiencia();
  }
}
