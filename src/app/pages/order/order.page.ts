import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  items: any[] = [
    { name: 'Caneta' },
    { name: 'Papel' },
    { name: 'Tesoura' },
    { name: 'Cola' },
    { name: 'Lápis' },
  ];

  unity: any[] = [
    { name: 'metros' },
    { name: 'Quilos' },
    { name: 'Metros²' },
    { name: 'Peça' },
  ]

  location: any[] = [
    { name: 'Área externa' },
    { name: 'Torre 1' },
    { name: 'Torre 2' },
    { name: 'Torre 3' },
    { name: 'Torre 4' },
    { name: 'Torre 5' },
    { name: 'Torre 6' },
    { name: 'Torre 7' },
    { name: 'Torre 8' },
  ]

  location2: any[] = [
    { name: 'Área Comum 1' },
    { name: 'Área Comum 2' },
    { name: 'Área Comum 3' },
    { name: 'Área Comum 4' },
    { name: 'Área Comum 5' },
  ]

  form: FormGroup



  constructor(
    private product: ProductService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      orders: this.fb.array([]),
    })
  }

  ngOnInit() {
    // this.product.getAll().subscribe(result => {
    //   console.log(result);
    // });
  }


  log() {
    console.log(this.orders.value);
  }

  delete(i){
    console.log(this.orders.value);
    console.log(i);
    
    // this.orders.value.removeAt(i)
    this.orders.value.splice(i, 1)
    console.log(this.orders.value);
    

    // mostrar modal para confirmação de deletar item aqui
  }

  addOrder(){
    this.orders.push(new FormGroup({
      item: new FormControl ([null, Validators.required]),
      unity: new FormControl ([null, Validators.required]),
      quantity: new FormControl ([null, Validators.required]),
      location: new FormControl ([null, Validators.required]),
      location2: new FormControl ([null]),
      detail: new FormControl ([null]),
    }))
  }

  get orders() { return this.form.get('orders') as FormArray}

  // get externalLocation() { return this.form.get('orders').get('location')}

}
