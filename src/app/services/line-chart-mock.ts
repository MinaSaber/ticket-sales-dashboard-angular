import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LineCHartService {
  xAxisData: string[] = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];

  yAxisData: number[] = [10, 22, 28, 23, 19, 10, 22, 28, 23, 19, 10, 22];
}
