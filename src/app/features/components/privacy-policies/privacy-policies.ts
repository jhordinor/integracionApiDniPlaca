import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";

@Component ({
    selector: 'app-privacy-policies',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './privacy-policies.html',
    styleUrls: ['./privacy-policies.scss'],
})
export class PrivacyPoliciesComponent{
    constructor(private router: Router) {}

    goToHome(): void {
        this.router.navigate(['/lapositiva/comprar/soat/']); 
    }
}