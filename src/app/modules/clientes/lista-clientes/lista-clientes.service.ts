import { Injectable } from '@angular/core';
import { FooterPagerService } from '../../appcommon/footer-pager/footer-pager.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from '../../home/home/common.service';
import { queryGetCliente } from 'src/app/graphql/queries';
import { map } from 'rxjs/operators';
import { ModalPreview } from 'src/app/models/preview-modal';


@Injectable({
  providedIn: 'root'
})
export class ListaClientesService {

  clientes$: Observable<any>;

  constructor(private footerPageService: FooterPagerService,
              private router: Router,
              private common: CommonService) {
    this.clientes$ = this.footerPageService
                         .valueChanges;
  }

  init() {
    this.footerPageService
          .getPage('PageCliente', 5, 0)
          .subscribe();
  }

  editar(id: number) {
    this.router.navigate(['app', 'clientes', 'editar', id]);
  }

  getModalDataCliente(id: number) {
    return this.common
                .Apollo(queryGetCliente, {Id: id})
                .valueChanges
                .pipe(map(res => {
                    const data = res.data.Cliente[0];
                    const ModalData = new ModalPreview();
                    ModalData.sections.push(
                      {
                      name: 'Datos Personales',
                      content: [
                        {
                          title: 'Nombre y Apellido',
                          content: `${data.Nombre} ${data.Apellido}`
                        },
                        {
                          title: 'CUIL',
                          content: data.CUIL
                        },
                        {
                          title: 'Email',
                          content: data.Email
                        }
                      ]
                    },
                    {
                      name: 'Datos Laborales',
                      content: [
                        {
                          title: 'Trabaja en',
                          content: data.Trabajos[0].LugarDeTrabajo
                        },
                        {
                          title: 'Cargo',
                          content: data.Trabajos[0].Cargo
                        },
                        {
                          title: 'Sueldo',
                          content: `$ ${data.Trabajos[0].Sueldo}`
                        }
                      ]
                    });
                    return ModalData;
                }));
  }

}
