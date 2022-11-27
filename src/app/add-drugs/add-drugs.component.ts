import { Component, OnInit } from '@angular/core';
import { Drugs } from 'src/model/drugs.model';
import { Drugservice } from '../services/drug.service';
import { DrugClass } from 'src/model/DrugClass.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-drugs',
  templateUrl: './add-drugs.component.html',
  styleUrls: ['./add-drugs.component.css'],
})
export class AddDrugsComponent implements OnInit {
  newDrugs = new Drugs();

  DrugClass!: DrugClass[];
  newidcl!: number;
  newDrugClass!: DrugClass;

  constructor(private drugService: Drugservice ,private router:Router) {}

  ngOnInit(): void {
    this.DrugClass = this.drugService.listeDrugClass();
  }
  newDrug = new Drugs();
  addDrug() {
    this.newDrugClass = this.drugService.consulterDrugClass(this.newidcl);
    this.newDrug.DrugClass = this.newDrugClass;
    this.drugService.ajouterDrug(this.newDrug);
    this.router.navigate(['drugs']);
  }
}
