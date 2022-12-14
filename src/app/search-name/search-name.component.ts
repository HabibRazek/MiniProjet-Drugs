import { Component, OnInit } from '@angular/core';
import { DrugClass } from 'src/model/DrugClass.model';
import { Drugs } from 'src/model/drugs.model';
import { Drugservice } from '../services/drug.service';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.css'],
})
export class SearchNameComponent implements OnInit {
  drugs!: Drugs[];
  genericName!: string;
  searchTerm!: string;
  allDrugs!: Drugs[];
  drugclass! :DrugClass[];

  constructor(private drugService: Drugservice) {
    this.drugs = this.drugService.listeDrugs();
  }

  ngOnInit(): void {
    // this.drugs = [];
    this.drugclass=this.drugService.listeDrugClass();
    this.drugs = this.drugService.listeDrugs();
    this.allDrugs=this.drugService.listeDrugs();
  }

  onChange() {
    this.drugs = this.drugService.rechercherParNomdrugs(this.genericName);
  }

  onkeyUp(text:String)
  {
    console.log(text);
    this.drugs=this.allDrugs.filter(item=>item.genericName?.toLowerCase().includes(text.toLowerCase()));

  }
}
