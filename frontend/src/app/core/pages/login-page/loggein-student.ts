import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})

export class LoggedinStudentService implements CanLoad, CanActivate{

  constructor(private loginService: LoginService,
              private router: Router){}

  checkAthentication(path: string){
    const token = localStorage.getItem('userValid')
    if(!token) {
      this.router.navigateByUrl('/login')
      return false;
    }
    if(token !== 'alunoVALID'){
      this.router.navigateByUrl('/professor')
      return false;
    }
    return true
  }

  canLoad(route: Route) : boolean{
    return this.checkAthentication(route.path)
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean{
    return this.checkAthentication(routerState.url)
  }
}
