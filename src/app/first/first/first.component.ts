import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  comments: any[] = [];

  constructor(private route: ActivatedRoute,
              private commentsService: CommentsService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.comments = [];
      // this.isLoading = true;
      this.commentsService.getComments(params['params'], 0, 100).subscribe(data => {
        this.comments = data;
        // this.currentParams = params['params'];
        // this.isLoading = false;
      });
    });
  }

}
