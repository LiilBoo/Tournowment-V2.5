import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-player-form-lone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-player-form-lone.component.html',
  styleUrls: ['./create-player-form-lone.component.scss']
})
export class CreatePlayerFormLoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
