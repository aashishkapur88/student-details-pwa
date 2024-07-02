import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [MatIconModule, MatListModule, RouterModule, CommonModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {
  studentsData:any;
  topper:{studentName:string, marks:number} = {studentName:"", marks:Number.MIN_SAFE_INTEGER}

  constructor(private activatedRoute : ActivatedRoute,
              private studentService : StudentsService
  ){}

  ngOnInit(){
    // this.studentsData = this.studentService.getStudents();
    // this.studentsData.map((student:any) =>{
    //   if(student.marks > this.topper.marks){
    //     this.topper = student;      }
    // })
    this.activatedRoute.params.pipe(switchMap(res =>this.studentService.getSubjectData(res['subjectName']))).subscribe(
      res=>{
        this.studentsData=res;
        console.log('this.studentsData',this.studentsData);
        this.updateTopper();
      }
    )

  }
  updateTopper() {
    this.studentsData.map((student:any) =>{
        if(student.marks > this.topper.marks){
          this.topper = student; 
          console.log('current topper', this.topper);     
        }
      })
  }
}
