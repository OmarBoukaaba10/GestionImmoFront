import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAnnonceDetailsComponent } from './front-annonce-details.component';

describe('FrontAnnonceDetailsComponent', () => {
  let component: FrontAnnonceDetailsComponent;
  let fixture: ComponentFixture<FrontAnnonceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontAnnonceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAnnonceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
