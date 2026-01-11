import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-domain-details',
  templateUrl: './domain-details.component.html',
  styleUrls: ['./domain-details.component.scss']
})
export class DomainDetailsComponent implements OnInit { // Export class
  domain: any; // Domain object

  constructor(private route: ActivatedRoute, private router: Router) {} // Inject route and router

  ngOnInit() { // On init
    const id = this.route.snapshot.paramMap.get('id'); // Get domain ID from route
    // Fetch domain by ID from your data source, example:
    // this.domain = this.domainService.getDomainById(id);
    // For demo, use static data:
    this.domain = { id, name: 'example.com', autoRenew: true, privacy: false }; // Example data
  }

  backToList() { // Back to list function
    this.router.navigate(['/']); // Navigate to list
  }
}
