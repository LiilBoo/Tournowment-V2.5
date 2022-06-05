import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-format-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-format-form.component.html',
  styleUrls: ['./create-format-form.component.scss']
})
export class CreateFormatFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
