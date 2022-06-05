import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITourDetails } from 'src/app/Models/itour-details';
import { ITourPatch } from 'src/app/Models/itour-patch';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private apiUrl: String = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //*CRUD : CREATE
  //* ------ POST REQUESTS

  createTour(tournament: ITourDetails){
    return this.http.post(`${this.apiUrl}/api/tournaments/create-tour`, tournament);
  };

  //* CRUD : UPDATE
  //* ---- PATCH & PUT REQUEST
  
  updateTournament(tournament: ITourPatch): Observable<ITourPatch>{

    const body: ITourPatch = {
     ...tournament,
    }

    return this.http.patch<ITourPatch>(
      `${this.apiUrl}/api/tournaments/update?id=${tournament.id}`,
       body,
       );
  };

  //*CRUD : DELETE
  //* ----- DELETE REQUEST
  deleteTournament(id: number){
    return this.http.delete(`${this.apiUrl}/api/tournaments/${id}`);
    // return this.http.delete(`${this.apiUrl}/api/tournaments/delete-id?id=${id}`);
  };



}
