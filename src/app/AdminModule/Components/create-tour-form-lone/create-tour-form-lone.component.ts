import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../AdminService/admin.service';
import { TournamentService } from 'src/app/Services/tournament.service';

@Component({
  selector: 'app-create-tour-form-lone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-tour-form-lone.component.html',
  styleUrls: ['./create-tour-form-lone.component.scss']
})
export class CreateTourFormLoneComponent implements OnInit {

  constructor(private adminService: AdminService, private tourService: TournamentService) { }

  ngOnInit(): void {
  }

}
