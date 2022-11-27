import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DrugClass } from 'src/model/DrugClass.model';

@Component({
  selector: 'app-update-drug-class',
  templateUrl: './update-drug-class.component.html',
  styleUrls: ['./update-drug-class.component.css']
})
export class UpdateDrugClassComponent implements OnInit {
  @Input()
  drugclass!: DrugClass;
  @Output()
  updateddrugclass = new EventEmitter<DrugClass>();


  @Input()
  ajout!: boolean;



  constructor() { }

  ngOnInit(): void {
    console.log(this.drugclass);
  }

  saveDrugClass(){
    this.updateddrugclass.emit(this.drugclass);
    console.log(this.drugclass);
  }

}
