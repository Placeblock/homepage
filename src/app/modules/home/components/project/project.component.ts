import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() name = "";
  @Input() description = "";
  @Input() link = "";
  @Input() info = "";
  infoVisible: boolean = false;
}
