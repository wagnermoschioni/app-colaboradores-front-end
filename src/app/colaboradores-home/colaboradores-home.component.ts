import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colaboradores-home',
  templateUrl: './colaboradores-home.component.html',
  styleUrls: ['./colaboradores-home.component.scss']
})
export class ColaboradoresHomeComponent implements OnInit {

  constructor(private router: Router) { }

  gotoPage(operation: number) {
    if (operation === 1) {
      this.router.navigate(['/cadastro']);
    } else if (operation === 2) {
      this.router.navigate(['/listagem']);
    } else {
      this.router.navigate(['/pesquisa']);
    }

  }


  ngOnInit() {
  }

}
