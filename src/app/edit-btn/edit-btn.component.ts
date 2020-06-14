import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.css']
})
export class EditBtnComponent implements OnInit {
  @Input()index: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClick() {
    this.router.navigate(['locations/edit', this.index.toString()]);
  }
}
