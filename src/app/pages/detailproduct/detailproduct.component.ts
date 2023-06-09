import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products from 'src/app/data/product';

import { CommentService } from '../admin/services/binhluan.service';
import { Ibluan } from '../admin/interface/Ibinhluan';




@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})



export class DetailproductComponent implements OnInit {
  // @ViewChild(BinhluanComponent) binhluanComponent!: BinhluanComponent;
  // ngAfterViewInit() {

  //   // sử dụng this.myComponent ở đây để truy cập đến component con
  // }
  products: any;
  id!: string;
  comments!: Ibluan[];
  content = ''
  constructor(private route: ActivatedRoute,
    private commentService: CommentService) {
    // this.commentService.getComments(this.id).subscribe(
    //   (data) => {
    //     this.products = data;
    //   },
    //   (error) => console.log(error.message)
    // );
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      const product = products.find(p => p.id === this.id)
      this.products = product
      const productId = params['id'];
      this.commentService.getComments(productId).subscribe((comments) => {
        this.comments = comments;
      });
    });
  }
  onSubmit(): void {
    console.log(this.content);

    const productId = this.id
    const commen = { productId }
    this.commentService.addComment(this.content, productId).subscribe((comment) => {
      this.comments.push(comment);
      this.content = ''
    });
  }

}