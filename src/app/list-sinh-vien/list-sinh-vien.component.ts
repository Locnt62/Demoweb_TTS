import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchHttpService } from '../http/list_api';

@Component({
  selector: 'app-list-sinh-vien',
  templateUrl: './list-sinh-vien.component.html',
  styleUrls: ['./list-sinh-vien.component.css']
})
export class ListSinhVienComponent implements OnInit {
seg:any
  dssv: any;
  constructor(private router : Router,  private activeRoute: ActivatedRoute, private searchHttpService: SearchHttpService) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      console.log('params');
      console.log(params);
      this.seg = params.id;
      console.log(this.seg)
    })
    this.Listsv();
  }

  Direct(){
    this.router.navigate(['/ds-sinhvien'], { queryParams: { id: '12' } });
  }
  Sua(){
    this.router.navigate(['/sua-sinhvien'], {queryParams: { id: '12' }})
  }

  Listsv(){
    this.searchHttpService.getallsv().subscribe(dt =>{
      console.log('ds sv');
      console.log(dt);
      this.dssv = dt.data;
      console.log('this.dssv');
      console.log(this.dssv);
    })
  }

}
