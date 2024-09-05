import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableService } from '../services/table-mock';
import { Table } from '../dtos/table-view-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss',
})
export class TableViewComponent implements OnInit {
  constructor(private tableService: TableService) {}

  tickets: Table[] = [];

  ngOnInit(): void {
    this.tickets = this.tableService.tickts;
  }
}
