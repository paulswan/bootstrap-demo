import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  tintShadeColors = ['tint-shade-purple-900', 'tint-shade-green-200', 'tint-shade-yellow-200', 'tint-shade-grey-800'];
  lightenDarkenColors = [
    'lighten-darken-purple-800',
    'lighten-darken-green-200',
    'lighten-darken-yellow-200',
    'lighten-darken-grey-800',
  ];
  materialDesign2Colors = ['md2-purple-900', 'md2-green-200', 'md2-yellow-300', 'md2-grey-800'];

  constructor() {}

  ngOnInit(): void {}
}
