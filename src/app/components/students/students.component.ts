import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { StudentsService } from '../../services/students.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [MatIconModule,MatCardModule,MatDividerModule, CommonModule, RouterModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  students:any;

  constructor(private studentsService: StudentsService){}

  ngOnInit(){
    this.studentsService.getAllStudents().subscribe(
      (res: any) => {
        this.students = res;
      }
    );
  }
}
