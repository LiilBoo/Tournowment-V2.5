import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../AdminService/admin.service';
import { TournamentService } from 'src/app/Services/tournament.service';

@Component({
  selector: 'app-update-tour-form-lone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-tour-form-lone.component.html',
  styleUrls: ['./update-tour-form-lone.component.scss']
})
export class UpdateTourFormLoneComponent implements OnInit {

  constructor(private adminService: AdminService, private tourService: TournamentService) { }

  ngOnInit(): void {
  }

}
