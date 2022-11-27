import { Component, OnInit } from '@angular/core';
import { DrugClass } from 'src/model/DrugClass.model';
import { Drugs } from 'src/model/drugs.model';
import { Drugservice } from '../services/drug.service';

@Component({
  selector: 'app-search-drugs-class',
  templateUrl: './search-drugs-class.component.html',
  styleUrls: ['./search-drugs-class.component.css'],
})
export class SearchDrugsClassComponent implements OnInit {
  drugs!: Drugs[];
  DrugClass!: DrugClass[];
  idcla!: number;

  constructor(private drugService: Drugservice) {
    this.DrugClass = this.drugService.listeDrugClass();
  }

  ngOnInit(): void {
    this.DrugClass = this.drugService.listeDrugClass();
    this.drugs = [];
  }

  supprimerProduit(d: Drugs) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.drugService.supprimerDrug(d);
  }

  onChange() {
    this.drugs = this.drugService.rechercheDrugClass(this.idcla);
    console.log(this.drugs);
  }
}
