import { Component, OnInit } from '@angular/core';

export class Phone{
    constructor(public title: string)
    { }
}
@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
	
}