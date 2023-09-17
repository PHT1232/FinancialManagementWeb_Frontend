import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Location } from '@angular/common';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { appModuleAnimation } from 'src/shared/animations/routerTransitions';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TreeNode } from 'primeng/api';

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

  nodes: TreeNode[] = [];

  selectedNodes: any;

  constructor(locationApi: Location,
      contextsApi: ChildrenOutletContexts,
      private _router: Router,
      public dialogService: DialogService)
  {
    super(locationApi, contextsApi);
  }

  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {
    this.nodes = [
      {
          "label": "Work",
          "icon": "pi pi-folder",
          "children": [
              {
                  "label": "data.json",
                  "icon": "pi pi-file"
              },
              {
                  "label": "sales.docx",
                  "icon": "pi pi-file"
              },
              {
                  "label": "presentation.pptx",
                  "icon": "pi pi-file"
              }
          ]
      },
      {
          "label": "Home",
          "icon": "pi pi-folder",
          "children": [
              {
                  "label": "grocery.word",
                  "icon": "pi pi-file"
              },
              {
                  "label": "picture.jpeg",
                  "icon": "pi pi-file"
              },
              {
                  "label": "homeplan.png",
                  "icon": "pi pi-file"
              }
          ]
      },
      {
          "label": "Multimedia",
          "icon": "pi pi-folder",
          "children": [
              {
                  "label": "infinity-war.mp4",
                  "icon": "pi pi-file"
              },
              {
                  "label": "you.mp3",
                  "icon": "pi pi-file"
              },
              {
                  "label": "endgame.mp4",
                  "icon": "pi pi-file"
              },
              {
                  "label": "MI.mp4",
                  "icon": "pi pi-file"
              }
          ]
      }
  ];
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
