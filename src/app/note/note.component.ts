import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

export interface StickyItem {
  id: number;
  name: string;
  mode: string;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  items = [
    { id: 1, name: 'New Sticky', mode: "view" }
  ];


  @ViewChild(MatMenuTrigger, { static: false })
  contextMenu!: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  // To capture draggable element
  draggableEl!: HTMLElement;


  onContextMenu(event: MouseEvent, item: StickyItem) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { item: item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  // Responsible for Add event from context-menu options
  onContextMenuAddHandler() {
    this.items.push({
      id: this.items.length + 1,
      name: `New Sticky ${this.items.length}`,
      mode: "view"
    });
  }

  // Responsible for 'To Back' event from context-menu options
  onContextMenuMoveBackHandler(item: StickyItem) {
    this.items.forEach((element, index) => {
      if (element.id === item.id) {
        this.items.splice(index, 1)
      }
    })
    this.items.unshift({
      id: item.id,
      name: item.name,
      mode: item.mode
    })
  }

  // Responsible for 'To Front' event from context-menu options
  onContextMenuMoveFrontHandler(item: StickyItem) {
    this.items.forEach((element, index) => {
      if (element.id === item.id) {
        this.items.splice(index, 1)
      }
    })
    this.items.push({
      id: item.id,
      name: item.name,
      mode: item.mode
    })
  }

  // Responsible to enable editing for selected StickyItem
  enableEditMode(item: StickyItem) {
    this.items.forEach(element => {
      if (element.id === item.id) {
        element.mode = "edit"
      }
      else {
        element.mode = "view"
      }
    })
  }

  onEnterPressHandler(){
    this.items.forEach(element => {
      element.mode = "view"
    })
  }
}
