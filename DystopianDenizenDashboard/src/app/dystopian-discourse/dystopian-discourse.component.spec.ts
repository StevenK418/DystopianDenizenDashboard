import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DystopianDiscourseComponent } from './dystopian-discourse.component';

describe('DystopianDiscourseComponent', () => {
  let component: DystopianDiscourseComponent;
  let fixture: ComponentFixture<DystopianDiscourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DystopianDiscourseComponent]
    });
    fixture = TestBed.createComponent(DystopianDiscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
