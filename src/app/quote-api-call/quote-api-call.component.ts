import { Component, OnInit  } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-api-call',
  templateUrl: './quote-api-call.component.html',
  styleUrls: ['./quote-api-call.component.scss']
})

export class QuoteApiCallComponent implements OnInit {

  quote: any;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.fetchQuote();
  }

  // fetchQuote() {
  //   this.quoteService.getQuoteOfTheDay().subscribe(
  //     (response) => {
  //       this.quote = response.quote;
  //     },
  //     (error) => {
  //       console.error('Error fetching quote of the day', error);
  //     }
  //   );
  // }

  fetchQuote() {
    this.quoteService.getQuoteOfTheDay().subscribe({
      next: (response) => { 
        this.quote = response.quote;
      },
      error: (error) => { 
        console.error('Error fetching quote of the day', error);
       
      },
      complete: () => { 
        console.log('Quote fetching completed');
      }
    });
  }

}
