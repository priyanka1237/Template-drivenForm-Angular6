import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent{
  powers = ['super hot','super sexy','attractive']

  model = new Hero(1,'Dr,Bean',this.powers[1],'chuck overstreet')
  submitted = false
  onSubmit(){
    this.submitted=true
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }
}
