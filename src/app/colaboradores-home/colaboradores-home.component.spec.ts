import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresHomeComponent } from './colaboradores-home.component';

describe('ColaboradoresHomeComponent', () => {
  let component: ColaboradoresHomeComponent;
  let fixture: ComponentFixture<ColaboradoresHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradoresHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
