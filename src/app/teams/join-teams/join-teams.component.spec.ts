import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTeamsComponent } from './join-teams.component';

describe('JoinTeamsComponent', () => {
  let component: JoinTeamsComponent;
  let fixture: ComponentFixture<JoinTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
