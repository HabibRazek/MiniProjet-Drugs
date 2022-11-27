import { Component, OnInit } from '@angular/core';
import { DrugClass } from 'src/model/DrugClass.model';
import { Drugservice } from '../services/drug.service';

@Component({
  selector: 'app-liste-drugs-class',
  templateUrl: './liste-drugs-class.component.html',
  styleUrls: ['./liste-drugs-class.component.css']
})
export class ListeDrugsClassComponent implements OnInit {
  drugclass! :DrugClass[];
  updateddrugclass : DrugClass ={"idcl":0, "name":''};
  ajout:boolean=true;


  constructor(private drugService: Drugservice) { }

  ngOnInit(): void {
    this.drugclass=this.drugService.listeDrugClass();
  }

  updateDrugClass(drugclass: DrugClass){
    this.drugService.ajouterDrugClass(drugclass);
    console.log(drugclass);
  }

  chargerDrugClass(){
    this.drugclass = this.drugService.listeDrugClass();
  }
  update(drugclass: DrugClass){
    this.updateddrugclass = drugclass
    this.ajout=false;

}
}
