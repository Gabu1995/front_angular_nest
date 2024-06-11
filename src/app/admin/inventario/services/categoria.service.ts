import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environment/environment.development';
//import { environment } from '../../../../environment/environment';
//import { environment} from '../../environment/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = environment.urlServidor
  private http=inject(HttpClient)

    funListar(){
      return this.http.get(`${this.baseUrl}/categoria`)
    }

    funGuardar(registro: any){
      return this.http.post(`${this.baseUrl}/categoria`,registro)
    }
}
