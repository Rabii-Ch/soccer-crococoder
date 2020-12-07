import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 news:any;
  constructor() { }

  ngOnInit(): void {
    this.news=[
      {id:1,title:'title 1', infoDate:'16/10/2020',name:'name1',img1:'assets/images/img_1.jpg',img2:'assets/images/img_1.jpg'},
      {id:2,title:'title 2', infoDate:'16/10/2020',name:'name2',img1:'assets/images/img_1.jpg',img2:'assets/images/img_1.jpg'},
      {id:3,title:'title 3', infoDate:'16/10/2020',name:'name3',img1:'assets/images/img_1.jpg',img2:'assets/images/img_1.jpg'},
      {id:4,title:'title 4', infoDate:'16/10/2020',name:'name4',img1:'assets/images/img_1.jpg',img2:'assets/images/img_1.jpg'},
      {id:5,title:'title 5', infoDate:'16/10/2020',name:'name5',img1:'assets/images/img_1.jpg',img2:'assets/images/img_1.jpg'},
    ]

  }

}
