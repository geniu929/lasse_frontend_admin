import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatEnqueteComponent } from './resultat-enquete.component';

describe('ResultatEnqueteComponent', () => {
  let component: ResultatEnqueteComponent;
  let fixture: ComponentFixture<ResultatEnqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatEnqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
