import {Component, ContentChildren, OnInit, QueryList, ViewEncapsulation} from '@angular/core';
import {ImgSlideComponent} from './img-slide/img-slide.component';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImgSliderComponent implements OnInit {
  // @ts-ignore
  @ContentChildren(ImgSlideComponent) slides: QueryList<ImgSlideComponent>;
  component: any;
  activeIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterContentInit(): void {
    console.log(this.slides);
    this.component = this.slides.first;
  }

  previos(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }
  next(): void {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }
}
