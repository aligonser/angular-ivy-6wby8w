import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Hello World";
  isSpecial: boolean = true;
  redColor = "red";
  username: string = "";
  imageURL =
    "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=064680b85e72644d9cc2e69e2763c541";

  message: string = "";
  onClick(msg: string): void {
    this.message = msg;
  }

  checkUserName(): boolean{
    return this.username.length == 0;
  }

  onClick2():void{
    this.username = "Hello World";
  }
}
