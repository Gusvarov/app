import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSelComponent } from './theme-sel.component';

describe('ThemeSelComponent', () => {
  let component: ThemeSelComponent;
  let fixture: ComponentFixture<ThemeSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
