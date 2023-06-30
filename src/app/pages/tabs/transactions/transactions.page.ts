import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  allTransactions: any [] = [];
  transactions: any [] = [];
  segmentValue = 'in';  


  constructor() { }

  ngOnInit() {
    this.allTransactions = [
     
      { id: 1, to: 'Piyush', date: '2023-06-30', amount: 5000 },
      { id: 2, to: 'Avinash', date: '2023-06-30', amount: -5000 },
      { id: 3, to: 'Catherine', date: '2023-06-30', amount: -5000 },
      { id: 4, to: 'Akhil Ag', date: '2023-06-30', amount: 5000 },
      { id: 5, to: 'Prem Ag.', date: '2023-06-30', amount: 5000 },
    
    ];
    this.filterTransactions();
  }
  filterTransactions() {
    if(this.segmentValue == 'in'){
      this.transactions = this.allTransactions.filter(x => x.amount >= 0)
    }else{
      this.transactions = this.allTransactions.filter(x => x.amount < 0)
    }
  }

  segmentChanged(event: Event): void {
    const customEvent = event as CustomEvent<any>;
    console.log(customEvent);
    this.segmentValue = customEvent.detail.value;
    this.filterTransactions();
  }

}
