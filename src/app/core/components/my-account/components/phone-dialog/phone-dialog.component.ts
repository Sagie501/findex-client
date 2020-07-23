import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../../../../shared/helpers/error-state-matcher';

@Component({
  selector: 'ile-email-dialog',
  templateUrl: './phone-dialog.component.html',
  styleUrls: ['./phone-dialog.component.less']
})
export class PhoneDialogComponent implements OnInit {

  phoneFormControl: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]);
  matcher = new MyErrorStateMatcher();
  @Output() changeUserEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: { phone: string }) {
  }

  ngOnInit(): void {
  }
}
