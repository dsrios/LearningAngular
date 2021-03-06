// Example Array Promise
const promiseArray = [];
			// Sync
			moduleIds.forEach( (moduleId, index) => {
				const currentModule = this.getModule(moduleId);
				if ([3, 4, 6].indexOf(currentModule.moduleType) === -1) {
					promiseArray.push(this._moduleService.getPositionsByIdModule(moduleId, currentModule).toPromise());
				}

				if ( moduleIds.length - 1 === index ) {
					// Ended foreach
					Promise.all( promiseArray ).then( ( valuesPromiseArray ) => {
						valuesPromiseArray.forEach( ( valuePromise: IResponse ) => {
							if ( valuePromise.ReturnAPI !== undefined ) {
								respuestaService = valuePromise.ReturnAPI.list;

								respuestaService.forEach( (position) => {
									allPositions.push(position);
								});
							}
						});
					});

				}
            });


// Example BehaviorSubject
    // When you change structures currentStructures change automatically
    private structures = new BehaviorSubject<any>([]);
    currentStructures = this.structures.asObservable();

    // Update structure from service
    this.structures.next(auxStructures);

// Example Observable
    selectBackFront(positionFill?, textTitle?) {
        return new Observable((observable) => {
            const dialogRef = this.dialog.open(DialogBackFrontUiComponent, {
                disableClose: false,
                width: '260px',
                maxHeight: '50px',
                panelClass: 'back-front-dialog-container-class',
                data: {
                    title: textTitle ? textTitle : 'UI Station Location',
                    idFilled: positionFill
                }
            });

            dialogRef.afterClosed().subscribe((response) => {
                // console.log('RESPONSE EN EL AFTER CLOSE', response);
                if (response !== undefined) {
                    if (response.type === 'accept' && response.selector !== '') {
                        observable.next(parseFloat(response.selector));
                    } else {
                        // send answer to observable the function make a wait until that observable is complete with next
                        observable.next(0);
                    }
                } else {
                    observable.next(0);
                }
            });
        });
    }
    // CAll
    this.selectBackFront.subscribe();

// Example SVG with a fill
    const html = 
    `<svg width="100%"
    [attr.height]="heightSvg"
    fxFlex
    *ngFor="let item of moduleInfo.Positions | ngForWithNumber; let index = index"
    [attr.fill]="fillSvg"
    [attr.stroke]="strokeSvg"
    [attr.stroke-width]="strokeWidthSvg"
    (click)="[3, 4, 6].indexOf(moduleType) === -1 ? clickOnPosition($event, index, moduleInfo.Module_ID) : ClickOnPositionUI({strcIndex: structureIndex - 1, mdlIndex: mdlIndex, colIndex: colIndex})">
    <defs>
    <pattern [attr.id]="patterId"
                [attr.width]="smallGridW"
                [attr.height]="smallGridH"
                patternUnits="userSpaceOnUse">
        <path d="M 1000 0 L 0 0 0 1000"
                [attr.fill]="fillPath"
                [attr.stroke]="strokePath"
                stroke-width="2" />
    </pattern>
    </defs>
    <svg:rect *ngIf="[3, 4, 6].indexOf(moduleType) === -1 "
            width="100%"
            [attr.height]="heightSvg"
            [attr.fill]="fillSvgRect"
            [appChangeColorSvg]="{ 'boolean': moduleType === 99 ? false : addClickPosition, 'color': theme }" />
    <svg:rect *ngIf="[3, 4, 6].indexOf(moduleType) > -1 "
            width="100%"
            [attr.height]="heightSvg"
            [attr.fill]="fillSvgRect"
            [appChangeColorSvg]="{ 'boolean': false, 'color': theme }" />

    <!-- <text stroke="none" stroke-width="1" fill="#ffffff" font-size="16" font-family="Calibri" x="40" y="50">UI: Name Front</text>
    <text  stroke="none" stroke-width="1" fill="#FFFFFF" font-size="16" font-family="Calibri" x="40" y="70">UI: Name Back</text> -->


    <!-- UI BACK -->
    <rect *ngIf="[3, 4, 6].indexOf(moduleType) > -1"
        x="71"
        y="3"
        width="15"
        height="15"
        [attr.fill]="fillSR2"
        [attr.stroke]="strokeSR2"
        style="stroke-width:2;" />
    <!-- UI FRONT -->
    <rect *ngIf="[3, 4, 6].indexOf(moduleType) > -1"
        x="65"
        y="8"
        width="15"
        height="15"
        [attr.fill]="fillSR1"
        [attr.stroke]="strokeSR1"
        style="stroke-width:2;" />

    </svg>`

// Example directive component change color target
    import {LayoutService} from './../../layout.service';
    import {Directive, ElementRef, Renderer2, AfterViewInit, Input, OnChanges, SimpleChanges} from '@angular/core';
    import {Observable} from 'rxjs/Observable';

    @Directive({
        selector: '[appChangeColorSvg]'
    })
    export class ChangeColorSvgDirective implements OnChanges {
        private currentElement: any;
        private allElement: any;
        theme = '';
        @Input() appChangeColorSvg;
        // Get true or false and color svg
        // { boolean: 'true', color: 'theme' }

        constructor(private element: ElementRef, private _service: LayoutService) {
            this.currentElement = element.nativeElement;
            this._service.currentTheme.subscribe((theme) => {
                this.theme = theme;

                if (this.currentElement.style.fill !== '') {
                    this.addColorSvg(theme);
                }
            });
        }

        // ngAfterViewInit() {
        //   // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //   // Add 'implements AfterViewInit' to the class.

        //   // Get input with true or false to apply this style
        //   if ( this.appChangeColorSvg.boolean ) {
        //     this.setMouseEvent( this.appChangeColorSvg.color );
        //     this.allElement = document.getElementsByTagName('rect');
        //   }
        // }

        ngOnChanges(changes: SimpleChanges): void {
            // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
            // Add '${implements OnChanges}' to the class.

            if (this.appChangeColorSvg.boolean) {
                this.setMouseEvent(this.appChangeColorSvg.color);
                this.allElement = document.getElementsByTagName('rect');
            }
        }

        setMouseEvent(color) {
            this.currentElement.onclick = () => {
                // Reset all SVG
                this.changeAllRects().subscribe((resp) => {
                    if (resp) {
                        // Add the color
                        this.addColorSvg(color);
                    }
                });
            };
        }

        cleanAllSvg() {
            this.allElement = document.getElementsByTagName('rect');
            if (this.allElement !== undefined) {
                this.changeAllRects().subscribe();
            }
        }

        addColorSvg(color) {
            let fill_color;

            switch (color) {
                case 'orange-theme':
                    fill_color = '#f8971d';
                    break;
                case 'green-theme':
                    fill_color = '#b0be36';
                    break;
                case 'blue-theme':
                    fill_color = '#00bcd4';
                    break;
                default:
                    fill_color = '#f8971d';
                    break;
            }
            this.currentElement.style.fill = fill_color;
        }

        changeAllRects() {
            return new Observable((observable) => {
                // Validate if element in style fill have the color = "red" dont change

                for (let x = 0; x < this.allElement.length; x++) {
                    this.allElement[x].removeAttribute('style');

                    if (x === this.allElement.length - 1) {
                        observable.next(true);
                    }
                }
            });
        }
    }

// Example directive component disable click
    import {Directive, ElementRef, AfterViewInit, Input} from '@angular/core';
    import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

    @Directive({
        selector: '[appDisableClick]'
    })
    export class DisableClickDirective implements AfterViewInit {
        private element: any;
        @Input() appDisableClick;

        constructor(el: ElementRef) {
            this.element = el.nativeElement;
        }

        ngAfterViewInit() {
            if (this.appDisableClick) {
                this.addPointerStyle();
                this.setMouseEvent();
            }
            // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
            // Add 'implements AfterViewInit' to the class.
        }

        setMouseEvent() {
            this.element.onmouseover = () => {
                this.addPointerStyle();
            };
        }

        addPointerStyle() {
            this.element.style.pointerEvents = 'none';
        }
    }

// Gradient Text
    .span {
        // background: linear-gradient(60deg, #98288f, #d88ee0, #8785f2, #00fff7) !important;
        font-size: 25px;
        background: -webkit-linear-gradient(#98288f, #d88ee0, #8785f2, #00fff7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: $fontFamilyPrimary !important;
    }
 

// EVETNS PAGE
<section class="events">
  <!-- intro banner with img -->
  <!-- material tabs -->
  <!-- workshop component -->
  <!-- meet up component -->
  <!-- labs component -->
  <!-- code jams component -->
  <div class="banner">

  </div>
  <div class="content-tabs">
      <mat-tab-group dynamicHeight>
          <mat-tab>
            <ng-template mat-tab-label>
                <span>WORKSHOPS</span>
            </ng-template>
            
            <div class="content-tabs-workshop content" >
              Work Shop content
            </div>
          </mat-tab>
          <mat-tab>
              <ng-template mat-tab-label>
                  <span>MEET UP</span>
              </ng-template>
            <div class="content-tabs-meetup content" >
              Meet up content
            </div>
          </mat-tab>
          <mat-tab>
              <ng-template mat-tab-label>
                  <span>LABS</span>
              </ng-template>
            <div class="content-tabs-labs content" >
              Labs content
            </div>
          </mat-tab>
          <mat-tab>
              <ng-template mat-tab-label>
                  <span>CODE JAMS</span>
              </ng-template>
            <div class="content-tabs-codejams content" >
              Code Jams content
            </div>
          </mat-tab>
        </mat-tab-group>
  </div>

</section>
<app-get-in-touch
  [class.active]="showOverlay"
  (toggleGetInTouchOverlay)="closeOverlay()">
</app-get-in-touch>

// CSS EVENTS PAGE
@import '~styles/variables';
.events {

    
   
}

.banner {
    background-color: $ciberGrape;
    // background : linear-gradient(60deg, $fandango, $brightLilac, $mediumSlateBlue, $turquoiseBlue);

    width: 100%;
    // height: 100vh;
    height: 90vh;
    display: block;
}

.content-tabs {
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        // margin: 16px;
        // padding: 16px;
        border-radius: 8px;
       
        

        width: 100%;
        height: 100vh;
    }

    ::ng-deep .mat-tab-label {
        span {
            // background: linear-gradient(60deg, #98288f, #d88ee0, #8785f2, #00fff7) !important;
            font-size: 25px;
            background: -webkit-linear-gradient(#98288f, #d88ee0, #8785f2, #00fff7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: $fontFamilyPrimary !important;
        }
    }
    

    &-workshop {
        height: 50vh !important; 
    }
    &-meetup {

    }
    &-labs {

    }
    &-codejams {

    }
}

::ng-deep .mat-tab-header {
    background-color: $ciberGrape;
}

::ng-deep .mat-body-wrapper{
    width: 100%
}

@media (min-width: 1024px) {
    ::ng-deep .mat-tab-body-wrapper {
        width: 95%;
    }
}

// Border Gradient
https://cssgurubd.wordpress.com/2017/04/16/how-to-style-gradient-border-color/

// Border Gradient
.rounded-corners-gradient-borders {
    width: 300px;
    height: 80px;
    border: double 4px transparent;
    border-radius: 80px;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  &-info {
        
    width: 80%;
    height: 80vh;
    background: #ADF;
    // background: #FFF;
    

    -webkit-box-shadow: 0 3px 12px 2px #b0b0b0;
    -moz-box-shadow: 0 3px 12px 2px #b0b0b0;
    box-shadow: 0 3px 12px 2px #b0b0b0;


    border-bottom: 5px solid transparent;
    border-radius: 13px;
    background-image: linear-gradient(white, white), linear-gradient(60deg, $fandango, $brightLilac, $mediumSlateBlue, $turquoiseBlue);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border-image: linear-gradient(60deg, $fandango, $brightLilac, $mediumSlateBlue, $turquoiseBlue);
    border-image-slice: 1;
}