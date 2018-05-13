import { Component, HostListener, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

export const HoverContainerAnimations = [
  trigger('hover', [
    state('in', style({ 'border-color': 'lightblue' })),
    state('out', style({ 'border-color': '#f8f9fa' })),
    transition('out => in', animate('0.10s ease-in')),
    transition('in => out', animate('0.25s ease-out')),
  ]),
];

@Component({
  selector: 'app-restaurant-element',
  templateUrl: './restaurant-element.component.html',
  styleUrls: ['./restaurant-element.component.css'],
  animations: HoverContainerAnimations,
})
export class RestaurantElementComponent {
  @Input() public imageUrl: string;
  @Input() public restaurantName: string;
  @Input() public restaurantDescription: string;
  public state = 'out';

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  public onHover(event: MouseEvent) {
    this.state = event.type === 'mouseenter' ? 'in' : 'out';
  }
}
