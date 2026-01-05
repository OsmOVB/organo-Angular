import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLivro } from './lista-livro';

describe('ListaLivro', () => {
  let component: ListaLivro;
  let fixture: ComponentFixture<ListaLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaLivro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLivro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
