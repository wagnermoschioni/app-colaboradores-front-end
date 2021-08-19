import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresCadastroComponent } from './colaboradores-cadastro.component';

describe('ColaboradoresCadastroComponent', () => {
  let component: ColaboradoresCadastroComponent;
  let fixture: ComponentFixture<ColaboradoresCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradoresCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
