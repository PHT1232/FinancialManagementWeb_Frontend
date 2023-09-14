import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-receipt-create',
  templateUrl: './receipt-create.component.html',
  styleUrls: ['./receipt-create.component.css']
})
export class ReceiptCreateComponent extends AppComponent {
  subCategoryFormArray = new FormArray([]);
  isExist: boolean[] = [];
  isTrue = true;
  errorMessage = 'Không được trùng với tên hoặc mã danh mục';

  onChange(subcategoryName: string, index: number) {
  }

  save() {

  }
}
