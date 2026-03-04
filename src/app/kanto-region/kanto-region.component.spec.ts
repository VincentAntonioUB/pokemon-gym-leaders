import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitShakesComponent } from './kanto-region.component';

describe('FruitShakesComponent', () => {
  let component: FruitShakesComponent;
  let fixture: ComponentFixture<FruitShakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitShakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitShakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
