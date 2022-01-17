import { Component, OnInit } from '@angular/core';
import { LuckyDrawService } from '../../services/lucky-draw.service';

@Component({
  selector: 'app-lucky-draw-container',
  templateUrl: './lucky-draw-container.component.html',
  styleUrls: ['./lucky-draw-container.component.css'],
})
export class LuckyDrawContainerComponent implements OnInit {
  spinStatus: boolean = false;
  prizeStatus: boolean = false;
  homeStatus: boolean = true;
  employeeCode: any;
  wishStatus: boolean = false;
  prize: any;
  errorType: any;

  constructor(private luckyDrawService: LuckyDrawService) {}

  ngOnInit(): void {}

  onClickComfirm(value: any) {
    this.employeeCode = value;
    this.luckyDrawService.getData(this.employeeCode).subscribe((res: any) => {
      console.log(this.employeeCode);
      console.log(res);
      if (res.code != '0') {
        console.log('Lỗi hệ thống');
        this.errorType = 0;
      } else if (res.data == -1) {
        this.homeStatus = false;
        this.spinStatus = true;
        this.wishStatus = true;
      } else if (res.data == '0') {
        this.homeStatus = false;
        this.spinStatus = true;
        this.wishStatus = false;
        this.prize = 5;
      } else if (res.data == '100000') {
        this.homeStatus = false;
        this.spinStatus = true;
        this.wishStatus = false;
        this.prize = 4;
      } else if (res.data == '200000') {
        this.homeStatus = false;
        this.spinStatus = true;
        this.wishStatus = false;
        this.prize = 3;
      } else if (res.data == '500000') {
        this.homeStatus = false;
        this.spinStatus = true;
        this.wishStatus = false;
        this.prize = 2;
      } else if (res.data == '1000000') {
        this.homeStatus = false;
        this.spinStatus = true;
        this.wishStatus = false;
        this.prize = 1;
      } else if (res.data == '-2') {
        this.errorType = -2;
      } else if (res.data == '-3') {
        this.errorType = -3;
      } else if (res.data == '-4') {
        this.errorType = -4;
      }
    });
  }
}
