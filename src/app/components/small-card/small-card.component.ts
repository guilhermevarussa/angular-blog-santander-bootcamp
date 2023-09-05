import { Component, Input } from '@angular/core';
import { StyledInterface } from 'styled-components';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {

  @Input() photoCoverage: string = ''

  @Input() cardTitle: string = ''

  @Input() id:string = '0'

}
