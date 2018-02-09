import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {

    const noImage = '../assets/img/noimage.png';
    if ( !imagenes ) {
      return noImage;
    }

    return ( imagenes.length > 0 ) ? imagenes[1].url : noImage;
  }

}
