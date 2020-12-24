import { Component, OnInit } from '@angular/core';
import { InputService } from './input.service.ts';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})

export class InputComponent implements OnInit {
    public email = {
        email: '',
    }

    constructor (
        private inputService: InputService,
    ) { }

    ngOnInit() {
    }
}