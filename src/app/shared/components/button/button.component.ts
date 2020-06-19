import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() isLarge: boolean;
  @Input() type: 'submit' | 'button' = 'button';
  @Input() disabled: boolean = false;
  @Input() isApprove: boolean = false;
  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick($event) {
    if (!this.disabled) {
      this.clicked.emit($event);
    }
  }
}
