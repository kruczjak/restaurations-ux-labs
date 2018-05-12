import { ChangeDetectionStrategy, Component, Input   } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import fontawesome from '@fortawesome/fontawesome';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() public set icon(val: fontawesome.IconName) { this._icon = val; this.handleNewIcon(); }
  @Input() public set prefix(val: fontawesome.IconPrefix) { this._prefix = val; this.handleNewIcon(); }
  @Input() public set class(val: string) { this._classes = val.split(' '); this.handleNewIcon(); }
  @Input() public set transform(val: string) { this._transform = val; this.handleNewIcon(); }
  public content: SafeHtml;
  public _icon: fontawesome.IconName;
  public _prefix: fontawesome.IconPrefix = 'far';
  public _classes = [];
  public _transform;

  constructor(public sanitizer: DomSanitizer) { }

  private handleNewIcon() {
    const iconDefinition = fontawesome.findIconDefinition({ prefix: this._prefix, iconName: this._icon });
    if (!iconDefinition) { return; }

    const transformObject = this._transform ? fontawesome.parse.transform(this._transform) : null;
    const icon = fontawesome.icon(iconDefinition , { transform: transformObject, classes: this._classes });

    this.content = this.sanitizer.bypassSecurityTrustHtml(<any> icon.html);
  }
}
