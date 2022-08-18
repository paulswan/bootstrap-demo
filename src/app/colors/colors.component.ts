import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  tintShadeColors = ['tint-shade-purple-900', 'tint-shade-green-200', 'tint-shade-yellow-200'];
  lightenDarkenColors = ['lighten-darken-purple-800', 'lighten-darken-green-200', 'lighten-darken-yellow-200'];
  angularMaterialColors = ['angular-material-purple-900', 'angular-material-green-200', 'angular-material-yellow-300'];

  constructor() {}

  ngOnInit(): void {}
}
