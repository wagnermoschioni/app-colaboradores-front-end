import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresPesquisaNomeComponent } from './colaboradores-pesquisa-nome.component';

describe('ColaboradoresPesquisaNomeComponent', () => {
  let component: ColaboradoresPesquisaNomeComponent;
  let fixture: ComponentFixture<ColaboradoresPesquisaNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradoresPesquisaNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresPesquisaNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
