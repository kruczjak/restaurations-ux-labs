import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import fontawesome from '@fortawesome/fontawesome';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  @Input() public set icon(val: fontawesome.IconName) { this._icon = val; this.checkAndHandleNewDefinition(); }
  @Input() public set prefix(val: fontawesome.IconPrefix) { this._prefix = val; this.checkAndHandleNewDefinition(); }
  @Input() public set class(val: string) {
    this._classes = val.split(' ');
    this.checkAndHandleNewDefinition();
  }
  @Input() public set transform(val: string) { this._transform = val; this.checkAndHandleNewDefinition(); }
  @Input() public set mask(val: fontawesome.IconName) { this._mask = val; this.checkAndHandleNewDefinition(); }
  @Input() public set symbol(val: fontawesome.FaSymbol) { this._symbol = val; this.checkAndHandleNewDefinition(); }
  public content: SafeHtml;
  private _icon: fontawesome.IconName;
  private _prefix: fontawesome.IconPrefix = 'fas';
  private _classes: string[] = [];
  private _transform: string;
  private _mask: fontawesome.IconName;
  private _symbol: fontawesome.FaSymbol;
  private _initialized = false;

  constructor(private sanitizer: DomSanitizer) { }

  public ngOnInit() {
    this.handleNewIcon();
    this._initialized = true;
  }

  private handleNewIcon() {
    const iconDefinition = this.findIconDefinition(this._prefix, this._icon);
    if (!iconDefinition) { return; }

    const iconParams: fontawesome.IconParams = { classes: this._classes, symbol: this._symbol, title: 'asd' };
    if (this._transform) { iconParams.transform = this.parseTransformObject(); }
    if (this._mask) { iconParams.mask = this.findIconDefinition(this._prefix, this._mask); }

    const icon = fontawesome.icon(iconDefinition, iconParams);

    this.content = this.sanitizer.bypassSecurityTrustHtml(<any> icon.html);
  }

  private parseTransformObject(): fontawesome.Transform {
    return fontawesome.parse.transform(this._transform);
  }

  private findIconDefinition(prefix: fontawesome.IconPrefix, icon: fontawesome.IconName): fontawesome.IconLookup {
    return fontawesome.findIconDefinition({ prefix: prefix, iconName: icon });
  }

  private checkAndHandleNewDefinition() {
    if (!this._initialized) { return; }
    this.handleNewIcon();
  }
}
