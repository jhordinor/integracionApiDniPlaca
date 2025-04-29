import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";

@Component({
    selector: 'app-secondary-purposes',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './secondary-purposes.html',
    styleUrls: ['./secondary-purposes.scss'],
})
export class SecondaryPurposesComponent {
        constructor(private router: Router) {}
    
        goToHome(): void {
            this.router.navigate(['/lapositiva/comprar/soat/']); 
        }
}