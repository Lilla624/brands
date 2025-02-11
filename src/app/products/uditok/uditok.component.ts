import { Component } from '@angular/core';

interface Uditok {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-uditok',
  templateUrl: './uditok.component.html',
  styleUrls: ['./uditok.component.css']
})
export class UditokComponent {
  gumicukrok: Uditok[] = [
    {
      nev: 'Medvecukor',
      image: './assets/cukorImg/pop.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'Cseresznyés gumicukor',
      image: './assets/gumicukorImg/cseresznyes.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Kólás gumicukor',
      image: './assets/gumicukorImg/kolas.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Színes gyümölcsös',
      image: './assets/gumicukorImg/szines.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Savanyú cukor',
      image: './assets/gumicukorImg/savanyu.jpg',
      ar: 600,
      darab: 1
    }
  ];
  uditok: any;

  kosarbaRak(i: number) {
    const termek = this.uditok[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
  }
}
