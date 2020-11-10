import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaComponentComponent } from './pelicula-component.component';

describe('PeliculaComponentComponent', () => {
  let component: PeliculaComponentComponent;
  let fixture: ComponentFixture<PeliculaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
