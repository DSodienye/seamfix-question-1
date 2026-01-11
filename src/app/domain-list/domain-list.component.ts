import { Component } from '@angular/core';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html'
})
export class DomainListComponent {
import { domainList, Domain } from '../../shared/mock-api-response/domain-list';
import { Router } from '@angular/router';

export class DomainListComponent {
  domains: Domain[] = domainList;

  constructor(private router: Router) { }

  formatRenewalPrice(price: number): string {
    return `$${price}/yr`;
  }

  goToDetails(domainId: string) {
    this.router.navigate(['/domain', domainId]);
  }
}
