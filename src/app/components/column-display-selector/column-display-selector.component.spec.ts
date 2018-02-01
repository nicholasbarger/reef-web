import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDisplaySelectorComponent } from './column-display-selector.component';

describe('ColumnDisplaySelectorComponent', () => {
  let component: ColumnDisplaySelectorComponent;
  let fixture: ComponentFixture<ColumnDisplaySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnDisplaySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnDisplaySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
