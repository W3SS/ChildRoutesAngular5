import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { SubCourse1Component } from './subcourse1.component';
import { SubCourse2Component } from './subcourse2.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: 'course/:id', component: CourseComponent, 
                children: [
                  { path: 'subcourse1/:subid/:mainid', component: SubCourse1Component },
                  { path: 'subcourse2', component: SubCourse2Component }
                ]
            }
        ])
    ],
    declarations: [
        CourseComponent,
        SubCourse2Component,
        SubCourse1Component
    ]
})
export class TestRoutingModule {

}