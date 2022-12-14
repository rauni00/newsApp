import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BusinessesComponent } from "./businessnews-component";

describe("BusinessnewsComponent", () => {
  let component: BusinessesComponent;
  let fixture: ComponentFixture<BusinessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
