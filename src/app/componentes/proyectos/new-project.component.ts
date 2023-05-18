import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/servicios/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent {
  titulo: string;
  descripcion: string;

  constructor(private projectS: ProjectService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const project = new Project(this.titulo, this.descripcion);
    this.projectS.save(project).subscribe(
      (data) => {
        alert('Proyecto añadido correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('falló');
        this.router.navigate(['']);
      }
    );
  }
}
