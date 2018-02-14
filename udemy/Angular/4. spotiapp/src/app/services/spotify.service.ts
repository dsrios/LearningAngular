import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Permite usar las peticiones GET - POST ...
import 'rxjs/add/operator/map'; // Se hace esta importacion para usar el operardor map
import { forEach } from '@angular/router/src/utils/collection';



@Injectable()
export class SpotifyService {

  // Contiene el resultado de la busquedad
  artistas: any[] = [];

  // Url de la  API de Spotify
  urlSpotify: String = 'https://api.spotify.com/v1/';

  // Token de conexion (Renovar cada hora)
  token: String = 'BQAhbXHw3PijLh9wt8jPaiJctQzBDloL7T0N4Knhdy7lMVUiJhZ1dQm4yVOfIHzKg8-yMywqMdXaakSmwB4';



  // Se llama el HttpClient para poder hacer las peticiones GET o POST
  constructor( public http: HttpClient) { }

  private getHeaders(): HttpHeaders {
     // Se declara el header para poder enviar el token en la peticion
     return new HttpHeaders({ 'Authorization': `Bearer ${ this.token }` });
  }

  // Funcion para obtner un listado de artistas segun el termino de busquedad
  getArtistas( termino: String) {

    const url_search = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=20`;
    const headers = this.getHeaders();

    // Hacer la peticion GET con el URL + header
    // Se usa el operardor map para modificar mi observable y transformar la data
    return this.http.get(url_search, { headers })
            .map( (resp: any) => {
                          this.artistas = resp.artists.items;
                          return this.artistas;
            });
  }

  // Retorna los datos de un artista partiendo del ID
  getArtista( id_artista: String): any {
    const url_artist = `${ this.urlSpotify }artists/${ id_artista }`;
    const headers = this.getHeaders();

    // Hacer la peticion
    return this.http.get( url_artist, {headers});
  }

  getTopTracks ( id_artista: String): any {
    const country = 'US'; // Select country to get top ES or US ...
    const url_top_track = `${this.urlSpotify}artists/${id_artista}/top-tracks?country=${country}`;
    const headers = this.getHeaders();
    return this.http.get( url_top_track, {headers})
            .map( (result: any) => result.tracks );
  }

 }


  // Hacer peticion GET
    // this.http.get(url, { headers }).subscribe(
    //   data => {
    //       console.log( data );
    //   }
    // );


