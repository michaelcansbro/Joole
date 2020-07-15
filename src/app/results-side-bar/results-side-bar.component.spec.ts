import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSideBarComponent } from './results-side-bar.component';

describe('ResultsSideBarComponent', () => {
  let component: ResultsSideBarComponent;
  let fixture: ComponentFixture<ResultsSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
