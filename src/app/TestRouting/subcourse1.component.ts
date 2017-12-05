import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'subcourse1',
    template: `<h6>This is SubCourse 1</h6><br>
               <h3>You wanna see submoduleid: {{subid}}</h3>
               <h3>However the main CourseID: {{mainid}}</h3>`
})
export class SubCourse1Component implements OnInit{
    subid: string = '';
    mainid: string = '';

    constructor(private router: ActivatedRoute) {}

    ngOnInit() {
        this.router.params.subscribe(params => {
            this.subid = params["subid"];
            this.mainid = params["mainid"];
        })
    }
}