import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TicketService } from '../services/ticket-mock';
import { Ticket } from '../dtos/ticket-dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileSaverService } from 'ngx-filesaver';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [TableModule, CommonModule, FormsModule, TooltipModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss',
})
export class TableViewComponent implements OnInit {
  constructor(
    private tableService: TicketService,
    private fileSaverService: FileSaverService
  ) {}

  tickets: Ticket[] = [];
  totalPages: number[] = [0];
  currentPage: number = 1;
  rowsOptions: number[] = [5, 10, 20];
  numberOfRowsSelected: number = 5;
  totalItems: number | undefined;
  sortAscending: boolean = true;

  ngOnInit(): void {
    this.tickets = this.tableService.tickets;
    this.totalItems = this.tickets.length;
    this.totalPages = Array.from(
      { length: Math.ceil(this.totalItems / this.numberOfRowsSelected) },
      (_, i) => i + 1
    );
    console.log(this.transliterateArabicToEnglish('مينا صابر'));
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  onRowsPerPageChange(event: any) {
    this.numberOfRowsSelected = parseInt(event.target.value, 10);
    this.currentPage = 1;
    this.updateTotalPages();
  }

  updateTotalPages() {
    const totalItems = this.tickets.length;
    this.totalPages = Array.from(
      { length: Math.ceil(totalItems / this.numberOfRowsSelected) },
      (_, i) => i + 1
    );
  }

  downloadTicket(ticket: Ticket) {
    const blob = new Blob([this.createTicketContent(ticket)], {
      type: 'application/pdf',
    });
    this.fileSaverService.save(blob, `Ticket-${ticket.ticketNumber}.pdf`);
  }

  createTicketContent(ticket: Ticket): string {
    return `
      Ticket Number: ${ticket.ticketNumber}
      User Name: ${ticket.user.name}
      Ticket Price: ${ticket.ticketPrice}
      Cinemas: ${ticket.cinemas}
      Number of People: ${ticket.peapleNumber}
      Purchase Number: ${ticket.purchaseNumber}
    `;
  }

  transliterateArabicToEnglish(name: string): string {
    const transliterationMap: { [key: string]: string } = {
      ا: 'a',
      ب: 'b',
      ت: 't',
      ث: 'th',
      ج: 'j',
      ح: 'h',
      خ: 'kh',
      د: 'd',
      ذ: 'dh',
      ر: 'r',
      ز: 'z',
      س: 's',
      ش: 'sh',
      ص: 's',
      ض: 'd',
      ط: 't',
      ظ: 'z',
      ع: 'a',
      غ: 'gh',
      ف: 'f',
      ق: 'q',
      ك: 'k',
      ل: 'l',
      م: 'm',
      ن: 'n',
      ه: 'h',
      و: 'w',
      ي: 'y',
      ء: "'",
      ى: 'a',
      ؤ: 'w',
      لا: 'la',
      ة: 't',
      ئ: 'y',
      '،': ',',
      ' ': ' ',
    };

    return name
      .split(' ') // Split by space to get individual words
      .map((word) => word[0]) // Take the first letter of each word
      .map((char) => transliterationMap[char] || char) // Transliterate if necessary
      .join('')
      .toUpperCase();
  }

  sortTicketsByPrice() {
    this.tickets.sort((a, b) => {
      return this.sortAscending
        ? a.ticketPrice - b.ticketPrice
        : b.ticketPrice - a.ticketPrice;
    });
    this.sortAscending = !this.sortAscending; // Toggle sorting order
    this.updateTotalPages(); // Update pages to reflect sorting
  }
}
