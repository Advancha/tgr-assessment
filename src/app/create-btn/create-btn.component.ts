import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-btn',
  templateUrl: './create-btn.component.html',
  styleUrls: ['./create-btn.component.css']
})
export class CreateBtnComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['locations/create']);
  }
}
