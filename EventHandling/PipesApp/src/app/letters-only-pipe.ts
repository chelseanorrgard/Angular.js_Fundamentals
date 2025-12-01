import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lettersOnly',
  standalone: true
})
export class LettersOnlyPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.replace(/[^a-zA-Z]/g, '');
  }
}