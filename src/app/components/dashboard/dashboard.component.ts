import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule , UserComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  subjects: string[] =[];
  teachersProfile: any;

  constructor(private studentsService: StudentsService){}

  ngOnInit(){
    this.subjects = ['physics', 'chemistry' , 'maths' , 'computers'];
    this.studentsService.getTeachersProfile().subscribe(
			(res: any) => {
				this.teachersProfile = res;
			}
		);
  }
}
