import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    @Inject("windowObject") private window: Window
  ) {}

  // onScroll() {
  //   if (matchMedia("(min-width: 992px)").matches) {
  //     //getting Window scroll number
  //     const scrollY = this.window.scrollY;

  //     // add class scroll to the document body if number is greater than 0 and remove if vice-versa
  //     scrollY > 0
  //       ? this.document.body.classList.add("scroll")
  //       : this.document.body.classList.remove("scroll");
  //   } else {
  //     this.document.body.classList.add("scroll");
  //   }
  // }
}
