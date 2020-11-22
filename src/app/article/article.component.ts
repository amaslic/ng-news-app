import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {


  articles:Array<any>;

  constructor(private newsapi:NewsApiService) { }

  ngOnInit(): void {
     //load articles
     this.newsapi.initArticles().subscribe(data => this.articles = data['articles']);
  }

  customOptions: any = {
		loop: true,
		margin: 40,
		responsiveClass: false,
		navText: ['<', '>'],
		dots: false,
		autoHeight: false,
		responsive: {
      400:{
        items: 1
      },
		  940: {
		   items: 1
		 }
		},
	   nav: true
	  }


}
