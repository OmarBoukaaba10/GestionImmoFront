import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent  implements OnInit{

  constructor(private http: HttpClient , private r: ActivatedRoute) {}

  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  ngOnInit(): void {

  }


  async pay(): Promise<void> {
    const pricefromdate: number = +this.r.snapshot.params.pricefromdate;
    // here we create a payment object
    const payment = {
      name: 'Payment',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: 10000,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };
    console.log(pricefromdate);


    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
      .post(`http://localhost:8081/api/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To check out page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }


}
