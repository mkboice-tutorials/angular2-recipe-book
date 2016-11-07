import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2007/4/4/0/ip0202_fudge.jpg.rend.sniipadlarge.jpeg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
