import { Component, OnInit } from "@angular/core";
//import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-simpl-list",
  template: `
    <h2>This week schedule </h2>
    <ul *ngFor="let n of list; index as i">
      <li>
        {{ n.day }}
        <h1>{{ arr[i] }}</h1>
        
        <button (click)="onClick(arr[i], i)">out of office</button>
      </li>
    </ul>
  `,
  styleUrls: ["./simpl-list.component.css"]
})
export class SimplListComponent implements OnInit {
  list = [
    {
      day: "Monday Morning",
      name: "Peter"
    },
    {
      day: "Monday Evening",
      name: "Jodi"
    },
    {
      day: "Tuesday Morning",
      name: "Alexis"
    },
    {
      day: "Tuesday Evening",
      name: "Will"
    },
    {
      day: "Wednesday Morning",
      name: "Frank"
    },
    {
      day: "Wednesday Evening",
      name: "Peter"
    },
    {
      day: "Thursday Morning",
      name: "Jodi"
    },
    {
      day: "Thursday Evening",
      name: "Alexis"
    },
    {
      day: "Friday Morning",
      name: "Will"
    },
    {
      day: "Friday Evening",
      name: "Frank"
    }
  ];

  public arr = [];
  public len;

  constructor() {}

  onClick(name, i) {
    if (name == this.arr[this.len - 1]) {
      this.arr[this.len - 1] = this.arr[0];
      this.arr[0] = name;
    } 
    //if else(j.name=="jodi" && ((j.day=="Thursday Evening") ))
    else {
      let res = this.arr.filter((j, index) =>
      
        j !== name ? j : (j == name && index !== i)
      );

      res.push(name);

      this.arr = res;
    }
  }

  ngOnInit(): void {
    for (let i of this.list) {
      this.arr.push(i.name);
    }
    
    this.len = this.arr.length;
  }
}
