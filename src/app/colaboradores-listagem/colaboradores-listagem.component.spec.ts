import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresListagemComponent } from './colaboradores-listagem.component';

describe('ColaboradoresListagemComponent', () => {
  let component: ColaboradoresListagemComponent;
  let fixture: ComponentFixture<ColaboradoresListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradoresListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
