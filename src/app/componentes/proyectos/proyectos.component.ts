import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/servicios/project.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  projects: Project[] = [];
  isLogged = false;

  constructor(private projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.cargarProjects();    
  }

  cargarProjects(): void {
    this.projectService.lista().subscribe(
      data => {
        this.projects = data;
      },
      error => {
        console.log("Error al cargar los proyectos:", error);
      }
    );
  }

  delete(id: number): void {
    if (id != undefined) {
      this.projectService.delete(id).subscribe(
        data => {
          this.cargarProjects();
        },
        error => {
          console.log("Error al borrar el proyecto:", error);
        }
      );
    }
  }
}
