import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchesComponent } from './couches.component';

describe('CouchesComponent', () => {
  let component: CouchesComponent;
  let fixture: ComponentFixture<CouchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
