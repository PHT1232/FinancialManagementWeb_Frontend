import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Location } from '@angular/common';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { appModuleAnimation } from 'src/shared/animations/routerTransitions';

@Component({
  selector: 'app-receipt-create',
  templateUrl: './receipt-create.component.html',
  styleUrls: ['./receipt-create.component.css'],
  animations: [ appModuleAnimation() ]
})
export class ReceiptCreateComponent extends AppComponent implements OnInit {
  subCategoryFormArray = new FormArray([]);
  isExist: boolean[] = [];
  isTrue = true;
  errorMessage = 'Không được trùng với tên hoặc mã danh mục';
  lessons = new FormArray<FormGroup>([]);
  loading = false;
  saving = false;

  constructor(locationApi: Location,
      contextsApi: ChildrenOutletContexts,
      private fb: FormBuilder,
      private _router: Router)
  {
    super(locationApi, contextsApi);
  }


  ngOnInit(): void {
  }

  onChange(subcategoryName: string, index: number) {
  }

  save() {
    this.lessons.controls.forEach((element, index) => {
      console.log(element.controls['title'].value)
    });
  }

  AddItem(): void {
  }

  RemoveItem(index: number) {
    this.subCategoryFormArray.removeAt(index);
  }

  addLesson() {
    this.loading = true;

    const lessonForm = new FormGroup({
      title: new FormControl('', Validators.required),
      level: new FormControl('beginner', Validators.required)
    });
    
    this.lessons.push(lessonForm);
    setTimeout(() => {
      this.loading = false
    }, 500);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  Cancel(): void {
    this._router.navigate(['receipt']);
  }

  checkFormValid(): boolean {
      return false;
  }
}
