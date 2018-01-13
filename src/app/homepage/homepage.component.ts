import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Http, Headers} from '@angular/http';

import {config} from '../../config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private loading = false;
  private contactUsForm;
  private mailingOption = {
    name: '',
    email: '',
    content: ''
  };

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  });

  constructor(public fb: FormBuilder, private http: Http) {
    this.contactUsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  sendEmail() {
    this.loading = true;
    this.http.post(`${config.SERVER_URL}/sendEmail`, this.mailingOption, {headers: this.headers})
      .map(res => res.json())
      .subscribe(res => {
        console.log(res);
        this.contactUsForm.reset();
        this.mailingOption = {
          name: '',
          email: '',
          content: ''
        }; // resetting mailing options
        this.loading = false;
      });
  }

}
