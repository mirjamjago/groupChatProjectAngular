import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChatManagerComponent } from './group-chat-manager.component';

describe('GroupChatManagerComponent', () => {
  let component: GroupChatManagerComponent;
  let fixture: ComponentFixture<GroupChatManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupChatManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChatManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
