import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillS: SkillService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkills();    
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}