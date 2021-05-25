import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent implements OnInit {
  fileName: string = '';
  TREE_DATA = [
    {
      name: 'root',
      children: [
        {
          name: 'dir4',
          children: [
            {
              name: 'dira',
              children: [{ name: 'image1.jpg' }, { name: 'image2.jpg' }],
            },
          ],
        },
        {
          name: 'dir3',
          children: [
            {
              name: 'dira',
              children: [{ name: 'image3.jpg' }, { name: 'image4.jpg' }],
            },
          ],
        },
      ],
    },
  ];
  constructor(public dialogRef: MatDialogRef<TreeViewComponent>) {
    this.dataSource.data = this.TREE_DATA;
  }

  ngOnInit(): void {}
  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: any) => node.expandable;
  selectedFile(node: any) {
    this.fileName = node.name;
  }

}
