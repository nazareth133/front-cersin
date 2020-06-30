import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasicInfoService} from '../../../core/services/negocio/basic-info.service';
import {BreadcrumbService} from '../../../core/services/ui/breadcrumb.service';
import {MenuItemInterface} from '../../../core/models/ui/menu-item-interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  links: MenuItemInterface[];
  configuredPaths;
  isHome;
  max = 6;

  constructor(
    private router: Router,
    private basicInfoService: BasicInfoService,
    private breadcrumbService: BreadcrumbService
  ) {
  }

  ngOnInit() {
    this.configuredPaths = this.router.config.map(e => e.path);
    this.setLinks();
  }

  setLinks() {
    this.breadcrumbService.getBreacrumb().subscribe(
      (l) => {
        this.links = l;
      }
    );
  }

}
