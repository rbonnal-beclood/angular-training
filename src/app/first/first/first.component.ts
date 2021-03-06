import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  comments: any[]  = [];
  limit: number    = 10;
  offset: number   = 0;
  currentParams: any;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute,
              private commentsService: CommentsService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.comments = [];
      // this.isLoading = true;
      this.commentsService.getComments(params['params'], this.offset, this.limit).subscribe(data => {
        this.comments = data;
        this.currentParams = params['params'];
        this.isLoading = false;
      });
    });
  }

  deleteComment(comment) {
    this.commentsService.deleteComment(comment).subscribe(
        () => {
          //Delete comment in the current comments list
          this.comments.splice(this.comments.indexOf(comment), 1);
        });
  }


// }  dialogRef.afterClosed().subscribe(result => {
//     if (!!result) {
//       for (let action of actions) {
//         this.deleteAction(action);
//       }

//   });

}
