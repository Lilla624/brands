import { Component } from '@angular/core';

interface Chips {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-chipsek',
  templateUrl: './chipsek.component.html',
  styleUrls: ['./chipsek.component.css']
})
export class ChipsekComponent {
  chipsek: Chips[] = [
    {
      nev: 'Jalapeño chips',
      image: './assets/chipsImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű chips',
      image: './assets/chipsImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: './assets/chipsImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.chipsek[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
