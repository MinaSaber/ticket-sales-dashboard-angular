import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableViewComponent } from './table-view/table-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TicketService } from './services/ticket-mock';
import { Ticket } from './dtos/ticket-dto';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TableViewComponent,
    CardViewComponent,
    LineChartComponent,
    InputSwitchModule,
    FormsModule,
    TooltipModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'tickets-sales';
  ticket: Ticket | undefined;
  checked: boolean = false;
  direction: string = 'rtl';

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticket = this.ticketService.ticket;
  }

  onChick = (event: boolean) => {
    this.checked = event;
  };

  switchDirection() {
    this.direction = this.direction === 'rtl' ? 'ltr' : 'rtl';
  }
}
