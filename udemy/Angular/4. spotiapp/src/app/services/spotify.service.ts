import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Permite usar las peticiones GET - POST ...
import 'rxjs/add/operator/map'; // Se hace esta importacion para usar el operardor map



@Injectable()
export class SpotifyService {

  // Contiene el resultado de la busquedad
  artistas: any[] = [];

  // Url de la  API de Spotify
  urlSpotify: String = 'https://api.spotify.com/v1/';

  // Token de conexion (Renovar cada hora)
  token: String = 'BQBzcoTOy9PfMx7ygIDz_4exP5lcpx_B08Jbyv9gWm4Zw-K6wDtHWYtMxPtm0h3pU1GpLWJwNu21u11kie4';



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

 }


  // Hacer peticion GET
    // this.http.get(url, { headers }).subscribe(
    //   data => {
    //       console.log( data );
    //   }
    // );
