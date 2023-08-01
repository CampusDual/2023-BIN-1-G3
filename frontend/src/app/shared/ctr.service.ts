import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CtrService {
  private ctr: number;
constructor() {
  this.ctr = 0;
 }
 add() {
  this.ctr++;
 }
 dec() {
  this.ctr--;
 }
 get value() {
  return this.ctr;
 }
}
