import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../../models/file-item';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio : string;

  constructor() {

    var year = new Date();
        
        this.anio =  year.getFullYear().toString();      
   }

  ngOnInit() {
  }

}
