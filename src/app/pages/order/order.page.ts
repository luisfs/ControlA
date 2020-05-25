import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  items: any[] = [
    {name: 'Caneta'},
    {name: 'Papel'},
    {name: 'Tesoura'},
    {name: 'Cola'},
    {name: 'Lápis'},
  ];

  unity: any[] = [
    {name: 'metros'},
    {name: 'Quilos'},
    {name: 'Metros²'},
    {name: 'Peça'},
  ]

  constructor(
    private product: ProductService

  ) { }

  ngOnInit() {
    // this.product.getAll().subscribe(result => {
    //   console.log(result);
    // });
}

}
