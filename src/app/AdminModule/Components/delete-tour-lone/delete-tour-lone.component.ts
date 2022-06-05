import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../AdminService/admin.service';
import { TournamentService } from 'src/app/Services/tournament.service';

@Component({
  selector: 'app-delete-tour-lone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-tour-lone.component.html',
  styleUrls: ['./delete-tour-lone.component.scss']
})
export class DeleteTourLoneComponent implements OnInit {

  constructor(private adminService: AdminService, private tourService: TournamentService) { }

  ngOnInit(): void {
  }

}
