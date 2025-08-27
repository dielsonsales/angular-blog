import { Component } from '@angular/core';
import { Base64DecodePipe } from '../../base64-decode-pipe';

@Component({
  selector: 'app-contact',
  imports: [Base64DecodePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  protected encodedEmail: string = 'ZGllbHNvbnNjYXJ2YWxob0BnbWFpbC5jb20='; // base64
}
