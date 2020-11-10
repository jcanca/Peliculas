import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuaioComponent } from './usuaio.component';

describe('UsuaioComponent', () => {
  let component: UsuaioComponent;
  let fixture: ComponentFixture<UsuaioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuaioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
