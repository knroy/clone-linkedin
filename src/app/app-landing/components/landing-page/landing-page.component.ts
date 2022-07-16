import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  constructor(public mediaObserver: MediaObserver) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy() {

  }

}
