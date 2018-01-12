import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-event',
  templateUrl: './date-event.component.html',
  styleUrls: ['./date-event.component.css']
})
export class DateEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  events: any = [
    {
      id: 1,
      title: 'titre1',
      subtitle:'sous-titre1',
      description: "description longue de l'evenement qui sera affiché",
      dates:[
        {
          id:1,
          date:Date.now(),
          state:0
        },
        {
          id:2,
          date:Date.now(),
          state:1
        },
        {
          id:3,
          date:Date.now(),
          state:2
        }
      ]
    },
    {
      id: 2,
      title: 'titre2',
      subtitle:'sous-titre2',
      description: "description longue de l'evenement qui sera affiché"
    },
    {
      id: 3,
      title: 'titre3',
      subtitle:'sous-titre3',
      description: "description longue de l'evenement qui sera affiché"
    },
    {
      id: 4,
      title: 'titre4',
      subtitle:'sous-titre4',
      description: "description longue de l'evenement qui sera affiché"
    },
    {
      id: 5,
      title: 'titre5',
      subtitle:'sous-titre5',
      description: "description longue de l'evenement qui sera affiché"
    },
  ];

}
