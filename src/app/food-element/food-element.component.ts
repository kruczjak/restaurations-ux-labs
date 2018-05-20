import { Component, HostListener, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

export const HoverContainerAnimations = [
  trigger('hover', [
    state('in', style({ 'border-color': 'lightblue' })),
    state('out', style({ 'border-color': '#f8f9fa' })),
    transition('out => in', animate('0.10s ease-in')),
    transition('in => out', animate('0.25s ease-out')),
  ])
];

@Component({
  selector: 'app-food-element',
  templateUrl: './food-element.component.html',
  styleUrls: ['./food-element.component.css'],
  animations: HoverContainerAnimations,
})
export class FoodElementComponent {
  public readonly MAX_RATING = 5;
  @Input() public imageUrl: string;
  @Input() public imageBy: string;
  @Input() public foodName: string;
  @Input() public foodDescription: string;
  @Input() public price: string;
  @Input() public rating: number;
  public state = 'out';
  public hovered = false;

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  public onHover(event: MouseEvent) {
    this.state = event.type === 'mouseenter' ? 'in' : 'out';
    this.hovered = (event.type === 'mouseenter');
  }

  public missingStars(): number {
    return this.MAX_RATING - (this.rating || 0);
  }

  public arrayFrom(i: number): any[] {
    if (i == null) { return []; }
    return Array(i);
  }

  public onRatingChange(i) {
    this.rating = i['rating'];
  }
}
