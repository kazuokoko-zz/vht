import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lucky-draw-home',
  templateUrl: './lucky-draw-home.component.html',
  styleUrls: ['./lucky-draw-home.component.scss'],
})
export class LuckyDrawHomeComponent implements OnInit {
  @Output() isButtonClick = new EventEmitter<any>();
  @Input() errorType: any;
  employeeCode: any;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isButtonClick.emit(this.employeeCode);
  }

  _keyUp(event: any) {
    const pattern = /[a-zA-Z1-90]/;
    if (!pattern.test(event.key)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  scroll() {
    window.scrollTo({ top: 250, behavior: 'smooth' });
  }
}
