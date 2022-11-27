import { Component, OnInit } from '@angular/core';
// ActivatedRoute
import { ActivatedRoute, Router } from '@angular/router';
// Sevecices
import { Drugservice } from '../services/drug.service';

// drugs
import { Drugs } from 'src/model/drugs.model';
import { DrugClass } from 'src/model/DrugClass.model';

@Component({
  selector: 'app-update-drug',
  templateUrl: './update-drug.component.html',
  styleUrls: ['./update-drug.component.css'],
})
export class UpdateDrugComponent implements OnInit {
  currentDrug = new Drugs();

  DrugClass!: DrugClass[];
  updateidcl!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private drugService: Drugservice
  ) {}

  ngOnInit(): void {
    this.DrugClass = this.drugService.listeDrugClass();
    this.currentDrug = this.drugService.consulterDrug(
      this.activatedRoute.snapshot.params['id']
    );
    this.updateidcl = this.currentDrug.DrugClass.idcl;
  }

  updateDrug() {
    this.currentDrug.DrugClass = this.drugService.consulterDrugClass(
      this.updateidcl
    );
    this.drugService.updateDrug(this.currentDrug);
    this.router.navigate(['drugs']);
  }
}
