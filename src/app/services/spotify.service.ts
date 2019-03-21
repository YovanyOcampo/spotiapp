import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Para no importar en app.module.ts
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Hello service generated with @angular/cli");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAh2qZGS6aKulLHhSrvJQX0y_VFcO3ksKzQ0_rOoZXxZdMDXzciwCNvkPYBlPOD8HTKwjA-E5-krj_GbWiH7JdI7LMUHGhAfpMazbRzSGTYh39qLEFKjC63QxcFjan0-lb-1ScHDSYOEteSB72TfhxiTWu0lvj3UA'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases?limit=20`).pipe(map(data=> data['albums'].items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe(map(data=> data['artists'].items));
  }
}
