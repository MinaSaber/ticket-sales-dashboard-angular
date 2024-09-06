import { Injectable } from '@angular/core';
import { Ticket } from '../dtos/ticket-dto';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  // Single Ticket
  ticket: Ticket = {
    user: {
      name: 'احمد محمود',
      mobileNumber: '0123456789',
      photo:
        'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
    },
    ticketNumber: 101,
    ticketPrice: 100,
    cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
    peapleNumber: 1,
    purchaseNumber: 'مرة واحدة',
  };

  // All Tickets
  tickets: Ticket[] = [
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 10,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo: '',
      },
      ticketNumber: 102,
      ticketPrice: 20,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 103,
      ticketPrice: 80,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 104,
      ticketPrice: 70,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 105,
      ticketPrice: 50,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 106,
      ticketPrice: 44,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 107,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 108,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 109,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 110,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 111,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
    {
      user: {
        name: 'احمد محمود',
        mobileNumber: '0123456789',
        photo:
          'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp',
      },
      ticketNumber: 101,
      ticketPrice: 40,
      cinemas: ['سينما مصر', 'مول العرب', 'برج الاطنان', 'سرايا القبة'],
      peapleNumber: 1,
      purchaseNumber: 'مرة واحدة',
    },
  ];
}
