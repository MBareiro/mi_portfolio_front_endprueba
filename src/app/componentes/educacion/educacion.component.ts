import { Component } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacionArray = [
    {id: 1, institucion : "arcor", carrera: "gerente", AIngreso: "2002", ASalida: "2003"}    
  ];  

  selectedEducacion: Educacion = new Educacion();
  
  addOrEdit(){
    if(this.selectedEducacion.id === 0){
      this.selectedEducacion.id = this.educacionArray.length + 1;
      this.educacionArray.push(this.selectedEducacion);   
    }
    this.selectedEducacion = new Educacion();   
  }  

  clearModal(){
    this.selectedEducacion = new Educacion();  
  }

  operForEdit(educacion: Educacion){
    this.selectedEducacion = educacion;
  }

  delete(){
    this.educacionArray = this.educacionArray.filter(x => x != this.selectedEducacion);
    this.selectedEducacion = new Educacion();
  }
}
