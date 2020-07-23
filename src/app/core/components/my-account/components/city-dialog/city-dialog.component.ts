import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../../../../shared/helpers/error-state-matcher';

@Component({
  selector: 'ile-email-dialog',
  templateUrl: './city-dialog.component.html',
  styleUrls: ['./city-dialog.component.less']
})
export class CityDialogComponent implements OnInit {

  cityFormControl: FormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  @Output() changeUserEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: { city: string }) {
  }

  ngOnInit(): void {
  }
}
