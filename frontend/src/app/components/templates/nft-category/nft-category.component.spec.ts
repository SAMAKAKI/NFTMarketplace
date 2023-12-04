import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftCategoryComponent } from './nft-category.component';

describe('NftCategoryComponent', () => {
  let component: NftCategoryComponent;
  let fixture: ComponentFixture<NftCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftCategoryComponent]
    });
    fixture = TestBed.createComponent(NftCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
