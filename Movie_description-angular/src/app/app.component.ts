import { Component, VERSION } from "@angular/core";
class item {
  name: string;
  val: number;
}
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string;
}
