import { Injectable } from '@angular/core';
import { Drugs } from 'src/model/drugs.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrugClass } from 'src/model/DrugClass.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class Drugservice {
  rechercherParNom(genericName: string) {
    throw new Error('Method not implemented.');
  }
  rechercheDrugGenericName(genericName: string): Drugs[] {
    throw new Error('Method not implemented.');
  }
  apiUrl = 'http://localhost:8888/drugs/api';
  Drugs: Drugs[]; // un tableaux de drug
  DrugClass: DrugClass[]; // un tableaux de drugclass


  constructor(private http: HttpClient) {
    this.DrugClass = [
      { idcl: 1, name: 'CNS' },
      { idcl: 2, name: 'Hallucinogens' },
      { idcl: 3, name: 'Inhalants' },
    ];

    this.Drugs = [
      {
        id: 1,
        genericName: 'Armodafinil',
        brandNames: 'Nuvigil',
        dosageForm: 'oral capsule (50 mg)',
        lastUpdated: new Date('2020/01/01'),
        DrugClass: this.DrugClass[0],
      },
      {
        id: 2,
        genericName: 'Atomoxetine',
        brandNames: 'Strattera',
        dosageForm: 'powder capsule (10 mg)',
        lastUpdated: new Date('2020/01/01'),
        DrugClass: this.DrugClass[1],
      },
      {
        id: 3,
        genericName: 'Oxybate',
        brandNames: 'Xyrem',
        dosageForm: 'oral capsule (50 mg)',
        lastUpdated: new Date('2019-01-01'),
        DrugClass: this.DrugClass[2],
      },
    ];
  }
  listeDrugs(): Drugs[] {
    return this.Drugs;
  }

  // listeDrugs(): Observable<Drugs[]> {
  //   return this.http.get<Drugs[]>(this.apiUrl);
  // }
  ajouterDrug(item: Drugs) {
    this.Drugs.push(item);
  }

  // ajouterDrug(item: Drugs): Observable<Drugs> {
  //   return this.http.post<Drugs>(this.apiUrl, item, httpOptions);
  // }

  supprimerDrug(d: Drugs) {
    const index = this.Drugs.indexOf(d, 0);
    if (index > -1) {
      this.Drugs.splice(index, 1);
    }
  }

  // supprimerDrug(d: Drugs): Observable<Drugs> {
  //   const url = `${this.apiUrl}/${d.id}`;
  //   return this.http.delete<Drugs>(url, httpOptions);
  // }

  drug!: Drugs;
  consulterDrug(id: number): Drugs {
    this.drug = this.Drugs.find((d) => d.id == id)!;
    return this.drug;
  }

  updateDrug(d: Drugs) {
    // console.log(p);
    this.supprimerDrug(d);
    this.ajouterDrug(d);
  }

  trierDrugs() {
    this.Drugs = this.Drugs.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

  listeDrugClass(): DrugClass[] {
    return this.DrugClass;
  }

  consulterDrugClass(id: number): DrugClass {
    return this.DrugClass.find((d) => d.idcl == id)!;
  }

  rechercheDrugClass(idcla: number): Drugs[] {
    return this.Drugs.filter((d) => d.DrugClass.idcl == idcla);
  }

  rechercherParNomdrugs(genericName: string): Drugs[] {
    return this.Drugs.filter((d) => d.genericName == genericName);
  }

  ajouterDrugClass(item: DrugClass) {
    this.DrugClass.push(item);
  }



}
