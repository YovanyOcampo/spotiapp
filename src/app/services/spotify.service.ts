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
      'Authorization': 'Bearer BQDE_ah-RqFHs9NZpklI9Dr1mGdV4Fo-pvCqFw8e9exCRZAGzZIq2c1Q1t0PqEVO6yr6u2mBvMkHFL-yRZIlJHhAgSz5xWpn4i9hVPj-9vwsokRjqOEoJ-NX3S6R7KALytPYqK-eTEqTtjDdDxvz7ifAmjmMN98xwA'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases?limit=20`).pipe(map(data=> data['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe(map(data=> data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);      
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
              .pipe(map(data=> data['tracks']));
  }
}
