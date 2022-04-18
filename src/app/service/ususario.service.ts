import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsusarioService {

  constructor(private httpClient: HttpClient) { }

  /**
   * @description Gets a list of categories
   */
  getUsers() {
    return new Promise((resolve, reject) => {

      const url = `${environment.urlDomain}usuarios`;
      this.httpClient.get(url).subscribe((response:any) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });

    });
  }
  /**
   * @description Saves a user
   */
  saveUser(request: any) {
    return new Promise((resolve, reject) => {

      const url = `${environment.urlDomain}usuario`;
      this.httpClient.post(url, request).subscribe((response:any) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });

    });
  }

}
