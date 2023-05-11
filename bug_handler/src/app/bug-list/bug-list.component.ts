import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent {
  bugReports : any[] = [];
  currentPage=1;
  itemsPerPage=8;
  constructor(private apiService:ApiService) {}
  
  ngOnInit():void{
    this.fetchBugReports();
  }

  async fetchBugReports () {
    try {
      this.bugReports = await this.apiService.getAllBugs();
      console.log(this.bugReports);
    } catch (error) {
      console.log(error);
    }
  }
  
  getPages() {
    const pages = [];
    const totalPages = this.totalPages();
    const startPage = Math.max(1, this.currentPage - 3);
    const endPage = Math.min(totalPages, this.currentPage + 3);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  
  totalPages() {
    return Math.ceil(this.bugReports.length / this.itemsPerPage);
  }
}
