import {
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChange,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lucky-draw-prize',
  templateUrl: './lucky-draw-prize.component.html',
  styleUrls: ['./lucky-draw-prize.component.css'],
})
export class LuckyDrawPrizeComponent implements OnInit {
  @Input() isButtonClick: any;
  @Input() prize: any;
  showButton: boolean = false;
  @ViewChild('video1')
  video1!: ElementRef;
  @ViewChild('video2')
  video2!: ElementRef;
  @ViewChild('video3')
  video3!: ElementRef;
  @ViewChild('video4')
  video4!: ElementRef;
  @ViewChild('video5')
  video5!: ElementRef;
  @ViewChild('chucmung')
  chucmung!: ElementRef;
  // @ViewChild('trunggiai')
  // trunggiai!: ElementRef;
  constructor() {}

  ngAfterViewInit() {
    // if (this.prize == 1) {
    //   this.video1.nativeElement.play();
    // }
    // if (this.prize == 2) {
    //   this.video2.nativeElement.play();
    // }
    // if (this.prize == 3) {
    //   this.video3.nativeElement.play();
    // }
    // if (this.prize == 4) {
    //   this.video4.nativeElement.play();
    // }
    // if (this.prize == 5) {
    //   this.video5.nativeElement.play();
    // }
    console.log(this.prize);
    console.log('after view');
    // console.log(this.video1);
    // console.log(this.video2);
    // console.log(this.video3);
    // console.log(this.video4);
    // console.log(this.video5);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
    if (this.isButtonClick) {
      this.onClick();
    }

    if (this.prize == 1) {
      this.playVideo1();
    }
    if (this.prize == 2) {
      this.playVideo2();
    }
    if (this.prize == 3) {
      this.playVideo3();
    }
    if (this.prize == 4) {
      this.playVideo4();
    }
    if (this.prize == 5) {
      this.playVideo5();
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showButton = true;
    }, 3000);
  }

  // playPrize() {
  //   setTimeout(() => {
  //     this.isButtonClick = false;
  //     this.trunggiai.nativeElement.play();
  //   }, 300);
  // }

  playVideo1() {
    setTimeout(() => {
      this.video1.nativeElement.play();
    }, 300);
  }

  playVideo2() {
    setTimeout(() => {
      this.video2.nativeElement.play();
    }, 300);
  }

  playVideo3() {
    setTimeout(() => {
      this.video3.nativeElement.play();
    }, 300);
  }

  playVideo4() {
    setTimeout(() => {
      this.video4.nativeElement.play();
    }, 300);
  }

  playVideo5() {
    setTimeout(() => {
      this.video5.nativeElement.play();
    }, 300);
  }

  onClick() {
    setTimeout(() => {
      this.isButtonClick = true;
      this.chucmung.nativeElement.play();
      // this.trunggiai?.nativeElement.pause();
      this.video1?.nativeElement.pause();
      this.video2?.nativeElement.pause();
      this.video3?.nativeElement.pause();
      this.video4?.nativeElement.pause();
      this.video5?.nativeElement.pause();
    }, 300);
  }
}
