import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDialogComponent } from './navigation-dialog.component';

describe('NavigationDialogComponent', () => {
  let component: NavigationDialogComponent;
  let fixture: ComponentFixture<NavigationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationDialogComponent]
    });
    fixture = TestBed.createComponent(NavigationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
