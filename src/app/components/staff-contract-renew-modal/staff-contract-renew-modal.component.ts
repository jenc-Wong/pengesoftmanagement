import { Component, OnInit,Injector } from '@angular/core';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Contract } from 'src/app/domains/contract.domain';
import{NzModalRef} from 'ng-zorro-antd/modal'
@Component({
  selector: 'app-staff-contract-renew-modal',
  templateUrl: './staff-contract-renew-modal.component.html',
  styleUrls: ['./staff-contract-renew-modal.component.less']
})
export class StaffContractRenewModalComponent    extends  CoreComponent  implements OnInit {

  public contract:Contract;
  public file:File;
  constructor(
    private modal:NzModalRef,
    private injector:Injector
  ) {
    super(injector);

   }

  ngOnInit(): void {
  
  }

  Onclick(){
    this.modal.destroy({ContractId:this.contract.ContractId,file:this.file})
  }
  cancel(){
    this.modal.destroy(null)
  }

  uploaderImage(ele: HTMLInputElement): void{
    const files = ele.files[0];
    this.file = files;
    console.log(files);
  }
}
