import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  secondForm: FormGroup; // <--- heroForm is of type FormGroup
  value:string = '';

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  changeValue(value: string) {
    this.value = value;
  }

  createForm() {
    this.secondForm = this.fb.group({
      search: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

}
