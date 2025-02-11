import { Component } from '@angular/core';

interface Gumicukor {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-gumicukor',
  templateUrl: './gumicukrok.component.html',
  styleUrls: ['./gumicukrok.component.css']
})
export class GumicukrokComponent {
  gumicukrok: Gumicukor[] = [
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

  kosarbaRak(i: number) {
    const termek = this.gumicukrok[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
  }
}
