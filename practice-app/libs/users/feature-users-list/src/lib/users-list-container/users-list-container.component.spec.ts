import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListContainerComponent } from './users-list-container.component';

describe('UsersListContainerComponent', () => {
  let component: UsersListContainerComponent;
  let fixture: ComponentFixture<UsersListContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsersListContainerComponent]
    });
    fixture = TestBed.createComponent(UsersListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
