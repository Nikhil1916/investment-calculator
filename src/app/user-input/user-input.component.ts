import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Input() type!:string;
  @Input() name!:string;
  value:any;
  @Output() selectedValue = new EventEmitter<any>();

  updateValue() {
    // console.log(typeof this.value);
    this.selectedValue.emit({
      value: this.value,
      key: this.name
    });
  }

  convert(name:string, allCaps = true) {
    if(allCaps) return name?.split("_")?.map((_)=>_.toUpperCase()).join(" ");
    return name?.split("_")?.map((_)=>_.charAt(0).toLocaleUpperCase()+_.substring(1)).join(" ");
  }

  blockMinus(event: KeyboardEvent) {
  if (event.key === '-' || event.key === 'e') {
    event.preventDefault();
  }
}

}
