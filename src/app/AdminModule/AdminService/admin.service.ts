import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { IFormat } from 'src/app/Models/iformat';
import { IPairingStyle } from 'src/app/Models/ipairing-style';
import { IPlayer } from 'src/app/Models/iplayer';
import { ITourDetails } from 'src/app/Models/itour-details';
import { ITourPatch } from 'src/app/Models/itour-patch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl: String = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //*CRUD : CREATE
  //* ------ POST REQUESTS

  createTour(tournament: ITourDetails) {
    return this.http.post(
      `${this.apiUrl}/api/tournaments/create-tour`,
      tournament
    );
  };

  createPlayer(player: IPlayer) {
    return this.http.post(
      `${this.apiUrl}/api/tournaments/create-tour`,
      player
    );
  };

  createFormat(format: IFormat) {
    return this.http.post(`${this.apiUrl}/api/formats/create-format`, format);
  }

  createPairingStyle(pairingStyle: IPairingStyle) {
    return this.http.post(
      `${this.apiUrl}/api/pairing-style/create-pairing`,
      pairingStyle
    );
  }

  //*CRUD : READ REQUEST

  getAllFormats(): Observable<IFormat[]> {
    return this.http.get<IFormat[]>(`${this.apiUrl}/api/formats/all`);
  }

  getFormatById(id: number): Observable<IFormat> {
    return this.http.get<IFormat>(`${this.apiUrl}/api/formats/by-id?id=${id}`)
    .pipe( first());
  }

  //!Backend to fix , should return 1 not an array
  getFormatByName(name: string): Observable<IFormat[]> {
    return this.http.get<IFormat[]>(
      `${this.apiUrl}/api/formats/formatname?formatname=${name}`
    );
  }

  getPairingList(): Observable<IPairingStyle[]> {
    return this.http.get<IPairingStyle[]>(
      `${this.apiUrl}/api/pairing-styles/list`
    );
  }

  getPairingById(id: number): Observable<IPairingStyle> {
    return this.http.get<IPairingStyle>(
      `${this.apiUrl}/api/pairing-styles/with-id?id=${id}`
    ).pipe( first() );
  }

  //* CRUD : UPDATE
  //* ---- PATCH & PUT REQUEST

  updateTournament(tournament: ITourPatch): Observable<ITourPatch> {
    const body: ITourPatch = {
      ...tournament,
    };

    return this.http.patch<ITourPatch>(
      `${this.apiUrl}/api/tournaments/update?id=${tournament.id}`,
      body
    );
  }

  updateFormat(format: IFormat): Observable<IFormat> {
    const body: IFormat = {
      ...format,
    };

    return this.http.patch<IFormat>(
      `${this.apiUrl}/api/formats/update?id=${format.id}`,
      body
    );
  }

  updatePairing(pairingStyle: IPairingStyle): Observable<IPairingStyle> {
    const body: IPairingStyle = {
      ...pairingStyle,
    };

    return this.http.patch<IPairingStyle>(
      `${this.apiUrl}/api/pairing-styles/update?id=${pairingStyle.id}`,
      body
    );
  }

  //*CRUD : DELETE
  //* ----- DELETE REQUEST
  deleteTournament(id: number) {
    return this.http.delete(`${this.apiUrl}/api/tournaments/${id}`);
    // return this.http.delete(`${this.apiUrl}/api/tournaments/delete-id?id=${id}`);
  }

  deleteFormat(id: number) {
    return this.http.delete(`${this.apiUrl}/api/formats/delete?id=${id}`);
  }

  deletePairing(id: number) {
    return this.http.delete(
      `${this.apiUrl}/api/pairing-styles/destroy?id=${id}`
    );
  }
}
