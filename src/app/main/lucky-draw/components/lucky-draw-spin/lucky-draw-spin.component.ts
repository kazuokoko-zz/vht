import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lucky-draw-spin',
  templateUrl: './lucky-draw-spin.component.html',
  styleUrls: ['./lucky-draw-spin.component.css'],
})
export class LuckyDrawSpinComponent implements OnInit {
  @Output() isButtonClick = new EventEmitter<any>();
  @Input() prize: any;
  @Input() isRewarded: boolean = false;
  animationButton: boolean = false;
  spin: boolean = false;
  showButtonReward: boolean = false;
  @ViewChild('video')
  video!: ElementRef;
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

  spinDone: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.video);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
    if (this.isRewarded) {
      this.playWish();
    }
  }

  onClick() {
    this.isButtonClick.emit();
    this.animationButton = true;
    setTimeout(() => {
      this.animationButton = false;
    }, 1300);
    setTimeout(() => {
      this.spin = true;
      this.video.nativeElement.play();
    }, 400);
    setTimeout(() => {
      this.video.nativeElement.pause();
      this.spinDone = true;
      if (this.prize == 1) {
        this.video1.nativeElement.play();
      }
      if (this.prize == 2) {
        this.video2.nativeElement.play();
      }
      if (this.prize == 3) {
        this.video3.nativeElement.play();
      }
      if (this.prize == 4) {
        this.video4.nativeElement.play();
      }
      if (this.prize == 5) {
        this.video5.nativeElement.play();
      }
    }, 5400);
    setTimeout(() => {
      this.showButtonReward = true;
    }, 8400);
  }

  checkSpin() {
    if (!this.spinDone && !this.isRewarded) {
      return true;
    }
    return false;
  }

  checkReward() {
    if (this.spinDone && !this.isRewarded) {
      return true;
    }
    return false;
  }

  checkButtonReward() {
    if (this.spinDone && !this.isRewarded && this.showButtonReward) {
      return true;
    }
    return false;
  }

  playWish() {
    this.showButtonReward = false;
    setTimeout(() => {
      this.isRewarded = true;
      this.chucmung.nativeElement.play();
      this.video1?.nativeElement.pause();
      this.video2?.nativeElement.pause();
      this.video3?.nativeElement.pause();
      this.video4?.nativeElement.pause();
      this.video5?.nativeElement.pause();
    }, 200);
  }
}
