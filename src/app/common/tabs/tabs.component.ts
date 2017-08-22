import { Component, ContentChildren, QueryList, AfterViewInit, Attribute, Input, ElementRef } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit {
  @Input() customWidth:string;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  highlightedTab:TabComponent = new TabComponent();
  
  constructor(private tabsElement: ElementRef) { };

  ngAfterViewInit(){
    setTimeout(_=> {
        let activeTabs = this.tabs.filter((tab)=>tab.active);
    
        if(activeTabs.length === 0) {
          this.selectTab(this.tabs.first);
        }
    });
  }

  onResize(){
    this.selectTab(this.highlightedTab);
  }

  selectTab(tab: TabComponent){
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
    let currentTabIndex = this.tabs.toArray().indexOf(tab);
    let tabElements = this.tabsElement.nativeElement.children.item(0).children.item(0).children.item(1);
    tabElements.style.transform = "translate3d(0px, 0px, 0px)";
    let currentTabElement = tabElements.children.item(currentTabIndex);
    if(currentTabElement){
      let highlightedTabElement = this.tabsElement.nativeElement.children.item(0).children.item(0).children.item(0);
      let currentOffset:number = currentTabElement.offsetLeft; 
      let width:number = currentTabElement.offsetWidth + 20; 
      let height:number = currentTabElement.offsetHeight + 6; 
      let translate3d = "translate3d("+currentOffset+"px, 0px, 0px)";
      highlightedTabElement.style['-webkit-transform'] = translate3d;
      highlightedTabElement.style['transform'] = translate3d;
      highlightedTabElement.style['width'] = width+'px';
      highlightedTabElement.style['height'] = height+'px';
    }
    tab.onTabClick.emit([]);
    this.highlightedTab = tab;
  }

}