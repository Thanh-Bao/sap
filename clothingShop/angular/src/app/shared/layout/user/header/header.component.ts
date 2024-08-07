import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, map, switchMap, tap } from "rxjs";
import { Category, Color, ColorItem, Product, Size, SizeItem } from "src/app/models/response";
import { ThemeService } from "src/app/theme.service";
import {
  CartService,
  PendingProduct,
} from "src/app/user/services/cart.service";
import { CategoryService } from "src/app/user/services/category.service";
import { FilterService } from "src/app/user/services/filter.service";
import { ProductService } from "src/app/user/services/product.service";
export interface CartItem {
  product: Product;
  colorItem: ColorItem ;
  sizeItem: SizeItem ;
  quantity: number;
}
@Component({
  selector: "user-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  formGroup!: FormGroup;
  selectedItem: any;
  suggestions!: any[];
  isShowClear = true;
  categories$!: Observable<Category[]>;
  selectedCategory$!: Observable<Category | null>;
  cartProducts$!: Observable<CartItem[] | []>;
  cartProducts: CartItem[] = [];
  addedCartProduct!: CartItem;
  quantityTotal: number = 0
  constructor(
    private _categoryService: CategoryService,
    private _filterService: FilterService,
    private _productService: ProductService,
    public cartService: CartService
  ) {
    this.selectedCategory$ = this._categoryService.selectedCateogry$;
  }
  search(event: any) {
    let filter = this._filterService.filterVal;
    filter.search = event.query;
    this._productService.findAll(filter).subscribe((val) => {
      this.suggestions = val.value.map((val) => val.name);
    });
  }
  ngOnInit(): void {
    this.categories$ = this._categoryService
      .findAll()
    this.cartService.cartProducts$
      .pipe(
        tap((cartProducts) => {
          this.quantityTotal = 0
          this.cartProducts = cartProducts;
          cartProducts.forEach(cartProduct => {
            this.quantityTotal += cartProduct.quantity
          })
        })
      )
      .subscribe();
  }
  selectCategory(cateogry: Category) {
    // if (this._categoryService.selectedCategoryVal != cateogry) {
    //   this._categoryService.nextSelectedCategory(cateogry);
    //   let filterVal = this._filterService.filterVal;
    //   filterVal.categoryIds = cateogry.ID === "all" ? undefined : cateogry.ID;
    //   this._filterService.nextFilter(filterVal);
    // }
  }
  @ViewChild("overlayPanel")
  overlayPanel: any;
  toggleCart(event: any) {
    this.overlayPanel.toggle(event);
  }
}
