import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { StudentsComponent } from './components/students/students.component';

export const routes: Routes = [
    {path:'' , component: DashboardComponent},
    {path:'subjects/:subjectName' , component: SubjectsComponent},
    {path:'students' , component: StudentsComponent}
];
