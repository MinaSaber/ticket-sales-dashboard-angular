import { Injectable } from '@angular/core';
import { Table } from '../dtos/table-view-dto';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  tickts: Table[] = [
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo: 'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp'
      },
      ticketNumber: 'C-101',
      ticketPrice: '$40',
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo: 'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp'
      },
      ticketNumber: 'C-101',
      ticketPrice: '$40',
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo: 'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp'
      },
      ticketNumber: 'C-101',
      ticketPrice: '$40',
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo: 'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp'
      },
      ticketNumber: 'C-101',
      ticketPrice: '$40',
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo: 'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp'
      },
      ticketNumber: 'C-101',
      ticketPrice: '$40',
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
  ];
}
