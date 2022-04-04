import { Users } from './../Users';
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class AxiosService{

constructor(private _http: HttpClient){

}



apiLogin = 'https://semantix-api-2.herokuapp.com/login';

apiUrl = 'https://semantix-api-2.herokuapp.com/user';
apiUrlJobs = 'https://semantix-api-2.herokuapp.com/jobs';



//login

login(data:any):Observable<any>{

  return this._http.post(`${this.apiLogin	}`, data);
 }



// listar usuarios
usuarios():Observable<any>{

 return this._http.get(`${this.apiUrl	}`);
}

// listar jobs
jobs():Observable<any>{

 return this._http.get(`${this.apiUrlJobs	}`);
}

// criar usuario
usuariosAdd(data:any):Observable<any>{

 return this._http.post(`${this.apiUrl	}`, data);
}

// criar jobs
jobsAdd(data:any):Observable<any>{

 return this._http.post(`${this.apiUrlJobs	}`, data);
}


// deletar usuario
usuariosDelete(id:any):Observable<any>{

  let ids = id;
  return this._http.delete(`${this.apiUrl}/${ids}`,);
}

// deletar job
jobDelete(id:any):Observable<any>{

  let ids = id;
  return this._http.delete(`${this.apiUrlJobs}/${ids}`,);
}


// editar usuario
usuariosUpdate(data:any, id:any):Observable<any>{

  let ids = id;
  return this._http.put(`${this.apiUrl}/${ids}`, data);
}
// editar jobs
jobsUpdate(data:any, id:any):Observable<any>{

  let ids = id;
  return this._http.put(`${this.apiUrlJobs}/${ids}`, data);
}


// buscar usuario especifico
buscaUpdate(id:any):Observable<any>{

  let ids = id;
  return this._http.get(`${this.apiUrl}/${ids}`);
}

// buscar jobs especifico
buscaUpdateJobs(id:any):Observable<any>{

  let ids = id;
  return this._http.get(`${this.apiUrlJobs}/${ids}`);
}

}
