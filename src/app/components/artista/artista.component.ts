import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  loadingArtist: boolean;
  artista: any = {};
  tracks: any = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe(params=> {
      // console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
      
    });
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtista(id).subscribe(artista=> {
      this.artista = artista
      // console.log(artista)
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(tracks=> {
      this.tracks = tracks;
      console.log(tracks);
    });
  }
}
