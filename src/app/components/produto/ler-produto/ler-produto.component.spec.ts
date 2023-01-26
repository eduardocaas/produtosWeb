import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerProdutoComponent } from './ler-produto.component';

describe('LerProdutoComponent', () => {
  let component: LerProdutoComponent;
  let fixture: ComponentFixture<LerProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LerProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
