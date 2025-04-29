import { ChangeDetectionStrategy, Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderService } from "../../service/loader.service";
import { TabService } from "../../../soat/tab.service";
@Component({
    selector: 'app-loader',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    providers:[LoaderService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
    isLoading = signal<boolean>(false);
    constructor(private loaderService: LoaderService,
        private readonly tabService: TabService,
    ) {      
      this.tabService.activeTab2$.subscribe(value => {
        this.isLoading.set(value)
       
      });
    }
}