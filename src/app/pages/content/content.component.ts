import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
import { StyledInterface } from 'styled-components';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() photoCovare: string = '';
  @Input() contentTitle: string = '';
  @Input() contentDescription: string = ''


  private id: string | null = '0'


  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(data => { this.id = data.get('id') });

    this.setValuesToComponent(this.id)
  }


  setValuesToComponent(id: string | null) {

    const result = dataFake.filter(contentArticle => contentArticle.id === id)[0]

    if (!result) {
      throw new Error('Result not found');
    }

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCovare = result.photo

  }

}
