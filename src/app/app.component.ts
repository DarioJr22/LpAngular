import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LpAngular';

  interesses:string[] = ['Ed. Financeira','Investimentos','Inteligencia Emocional', 'PNL','Matemática', 'Programação']

  Data:String = "22 de Outubro" 
}
