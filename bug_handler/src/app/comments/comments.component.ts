import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  isCommentSectionVisible = false;
  isTextareaAccessible = false;
  isRetestClicked = false;
  comment = '';
  comments: string[] = [];

  bug: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.apiService.getBugReportById(id).then((bug) => {
          this.bug = bug;
        });
      }
    });
  }

  onOpenClick() {
    this.isCommentSectionVisible = true;
    this.isTextareaAccessible = true;
  }

  onCloseClick() {
    this.isCommentSectionVisible = false;
    this.isTextareaAccessible = false;
    this.comment = '';
  }

  onRetestClick() {
    this.isRetestClicked = true;
    // do retest logic here
  }

  post() {
    this.comments.push(this.comment);
    this.comment = '';
  }
}
