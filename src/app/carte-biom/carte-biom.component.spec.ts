import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteBiomComponent } from './carte-biom.component';

describe('CarteBiomComponent', () => {
  let component: CarteBiomComponent;
  let fixture: ComponentFixture<CarteBiomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteBiomComponent]
    });
    fixture = TestBed.createComponent(CarteBiomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
