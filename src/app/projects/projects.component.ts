import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { Theme } from '../models/theme';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[];
  @Input() theme: Theme;

  constructor() {}

  ngOnInit() {}
}
