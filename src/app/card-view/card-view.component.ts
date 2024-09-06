import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipModule } from 'primeng/tooltip';
import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [QRCodeModule, TooltipModule, CommonModule],
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
  ticketUrl: string = 'www.tazkty.com/473847';
  isCopied: boolean = false;

  constructor(private clipboard: Clipboard) {}

  copyTicketUrl() {
    this.clipboard.copy(this.ticketUrl);
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }
}
