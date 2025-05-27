import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header class="header">
        <h1 class="title">Bienvenue sur Mon Application web</h1>
        <p class="subtitle">Une démonstration des capacités d'Angular</p>
      </header>

      <div class="card-container">
        <div class="card" *ngFor="let card of cards" (click)="toggleCard(card)">
          <div class="card-content" [class.active]="card.active">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
            <div class="card-details" *ngIf="card.active">
              <p>{{ card.details }}</p>
            </div>
          </div>
        </div>
      </div>  

      <div class="counter-section">
        <h3>Compteur interactif</h3>
        <div class="counter-controls">
          <button (click)="decrement()">-</button>
          <span class="counter">{{ counter }}</span>
          <button (click)="increment()">+</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .title {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #7f8c8d;
    }

    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .card {
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card-content {
      padding: 1.5rem;
    }

    .card-content h2 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .card-details {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #eee;
    }

    .counter-section {
      text-align: center;
      margin-top: 2rem;
    }

    .counter-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      border: none;
      background: #3498db;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    button:hover {
      background: #2980b9;
    }

    .counter {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2c3e50;
    }
  `]
})
export class AppComponent {
  counter = 0;
  cards = [
    {
      title: 'Angular Features',
      description: 'Découvrez les fonctionnalités puissantes d\'Angular',
      details: 'Angular offre des fonctionnalités avancées comme le two-way binding, les directives, les pipes, et bien plus encore.',
      active: false
    },
    {
      title: 'Performance',
      description: 'Une application rapide et réactive',
      details: 'Grâce à son moteur de rendu optimisé, Angular offre des performances exceptionnelles.',
      active: false
    },
    {
      title: 'Développement',
      description: 'Un framework moderne pour vos projets',
      details: 'Angular simplifie le développement d\'applications web complexes avec ses outils intégrés.',
      active: false
    }
  ];

  toggleCard(card: any) {
    card.active = !card.active;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
