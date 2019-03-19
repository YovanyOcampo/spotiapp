import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Para no importar en app.module.ts
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Hello service generated with @angular/cli");
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCFzDeeO-LNkLG1fWNXQ7QVxHLSMejyRFPqbiIenu_4dsvyYAXOxhh9WztUJm7myRSpm5j2EEAHwNyl6aoBNFLx0G6wMX9AZU9JWcjEGY9bjzj7a9Lj3jECPRK8ZexD4GTlVajzG0Z1oPUyXvEC7iaNGNywnoiWnQ'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
}
