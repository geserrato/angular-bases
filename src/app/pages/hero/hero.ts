import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: "app-hero",
  templateUrl: "./hero.html",
  styleUrls: ["./hero.css"],
  imports: [UpperCasePipe]
})
export class Hero {
  name = signal<string>("Ironman");
  age = signal<number>(45);
  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  capitalizeName = computed(() => this.name().toUpperCase());

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set("Spiderman");
    this.age.set(22);
  }

  resetForm() {
    this.name.set("Ironman");
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
