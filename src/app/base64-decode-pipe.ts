import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64Decode',
  standalone: true // for better performance
})
export class Base64DecodePipe implements PipeTransform {

  /**
   * Transforms base64 strings into decoded strings
   * @param value The base64 encoded string
   * @returns The decoded string
   */
  transform(value: string, ...args: unknown[]): string {
    if (!value) {
      return '';
    }
    try {
      return atob(value);
    } catch (e) {
      console.error('Failed to decode base64 string:', e);
      return '';
    }
  }
}
