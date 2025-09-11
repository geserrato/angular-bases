import { Component, signal } from "@angular/core";

@Component({
	selector: "app-counter",
	templateUrl: "./counter.html",
	styleUrl: "./counter.css",
})
export class Counter {
	counter = 10;
	counterSignal = signal<number>(10);
	increaseBy(value: number) {
		this.counter += value;
		// Update se utiliza para actualizar el valor de la signal conocienco su valor anterior
		this.counterSignal.update((prev) => prev + value);
	}

	decreaseBy(value: number) {
		this.counter -= value;
	}

	reset() {
		this.counter = 0;
		// Set nos sirve para hacer un tipo reset del valor de a signal sin importar cual era su valor anterior
		this.counterSignal.set(0);
	}
}
