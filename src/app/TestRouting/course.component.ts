import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'test',
    templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit{
    CourseID: string = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit() { 
        this.route.params.subscribe(params => 
        {
            this.CourseID = params['id'];
        });
    
    }
}