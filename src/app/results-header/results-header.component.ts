import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Product} from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-results-header',
  templateUrl: './results-header.component.html',
  styleUrls: ['./results-header.component.css']
})
export class ResultsHeaderComponent implements OnInit {
  searching:String;
  constructor(private HttpClient:HttpClient,private router:Router,private productService:ProductServiceService) { }

  ngOnInit(): void {
  }

  search() {
    // console.log(this.searching)
    console.log(`http://localhost:8080/search/search?productType=${this.searching}`)
   this.HttpClient.get<[Product]>(`http://localhost:8080/search/search?productType=${this.searching}`)
   .subscribe(data => {
     this.productService.product=data;
     console.log(this.productService.product);
   })
   this.router.navigate(["/results"]);
  }
}
