import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; // Permite cargar links de video de youtube desde el ts al html


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer) {

  }

  transform( value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value);
  }

}
