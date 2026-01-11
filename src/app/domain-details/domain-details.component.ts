import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { domainList, Domain } from '../../shared/mock-api-response/domain-list';

@Component({
  selector: 'app-domain-details',
  templateUrl: './domain-details.component.html',
  styleUrls: ['./domain-details.component.scss']
})
export class DomainDetailsComponent {
  domain?: Domain;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.domain = domainList.find(d => d.id === id!);
    if (!this.domain) {
      this.router.navigate(['']);
    }
  }

  formatRenewalPrice(price: number): string {
    return `$${price}/yr`;
  }

  formatFlag(flag: boolean): string {
    return flag ? 'Yes' : 'No';
  }

  backToList() {
    this.router.navigate(['']);
  }
}
