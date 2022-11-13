import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {
  en_weekDays: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  en_months: string[] = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  es_weekDays: string[] = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  es_months: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  selectedDay:Date | null = null;
  private i18n!:string;
  private daysMatrix!:Date[][];
  today!: Date;
  selectedPeriod!: Date;
  totalDaysInMonth!: number;
  calendarDayRows!: number;
  calendarOffset!: number;
  selectedMonth!: number;
  private langSubscription!: Subscription;
  @Input() canSelectDate:boolean = false;
  @Input() datesToHighlight:Date[]=[];
  @Output() public onSelected = new EventEmitter<Date | null>();
  constructor(
  ) {

  }

  ngOnInit(): void {
    this.today = new Date();
    this.selectedPeriod = new Date(this.today);
    this.selectedMonth =2
    this.calculateMonthSpecifics();
  }

  calculateMonthSpecifics() {
    let year = this.selectedPeriod.getFullYear();
    let month = this.selectedPeriod.getMonth() + 1;
    this.totalDaysInMonth = new Date(year, month, 0).getDate();
    let firstDay = new Date(year, this.selectedPeriod.getMonth(), 1);
    this.calendarOffset = firstDay.getDay();
    this.calendarDayRows = Math.ceil((this.totalDaysInMonth+this.calendarOffset) / 7 );
    this.generateDaysMatrix();
  }

  private generateDaysMatrix(){
    let matrix = [];
    for(let i = 0;i<this.calendarDayRows;i++){
      matrix[i] = new Array(7);
    }
    let pivotDay = new Date(this.selectedPeriod.getFullYear(), this.selectedPeriod.getMonth(), 1);
    let shouldGenerateDay:boolean = false;
    for(let i = 0;i<this.calendarDayRows;i++){
      matrix[i] = new Array(7);
      for(let j = 0;j<7;j++){
        if(i===0 && j ===this.calendarOffset){
          shouldGenerateDay = true;
        }
        if(shouldGenerateDay && this.areDatesInSameMonth(pivotDay,this.selectedPeriod)){
          //should generate
        matrix[i][j] = new Date(pivotDay);
        pivotDay.setDate(pivotDay.getDate()+1);
        }else{
          matrix[i][j] = null;
        }
        
      }
    }
    this.daysMatrix = matrix;

  }

  areDatesInSameMonth(a:Date,b:Date){
    return a.getMonth() === b.getMonth();
  }

  areDatesEqual(a:Date | null,b:Date){
    if(!a || !b) return false;
    return (a.getMonth() === b.getMonth()) && (a.getDate() === b.getDate()) && (a.getFullYear() === b.getFullYear());
  }

  isSelected(a:Date):boolean{
    if(!this.selectedDay) return false;
    return this.areDatesEqual(a,this.selectedDay);
  }

  hasToHighlight(a:Date):boolean{
    let date = this.datesToHighlight.filter(x=>this.areDatesEqual(x,a));
    return date.length>0?true:false;
  }

  getCalendarDay(i: number, j: number){
    return this.daysMatrix[i][j]?this.daysMatrix[i][j].getDate():'';
  }

  getCalendarDayDate(i: number, j: number):Date{
    return this.daysMatrix[i][j];
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }

  getI18nMonths(): string[] {
    return this.i18n === 'es' ? this.es_months : this.en_months;
  }

  getI18nDays(): string[] {
    return this.i18n === 'es' ? this.es_weekDays : this.en_weekDays;
  }

  getCurrentMonth(): string {
    let month = this.selectedPeriod.getMonth();
    return this.getI18nMonths()[month];
  }

  substractMonth() {
    this.selectedPeriod.setMonth(this.selectedPeriod.getMonth() - 1);
    this.calculateMonthSpecifics();
  }

  addMonth() {
    this.selectedPeriod.setMonth(this.selectedPeriod.getMonth() + 1);
    this.calculateMonthSpecifics();
  }


  

  getYear() {
    return this.selectedPeriod.getFullYear();
  }

  selectDay(i:number,j:number){
    if(!this.canSelectDate) return;
    let today = new Date(this.today);
    let selected = this.getCalendarDayDate(i,j);
    today.setHours(0,0,0);
    if(selected<today && !this.areDatesEqual(today,selected))return;
    if(this.areDatesEqual(this.selectedDay,this.daysMatrix[i][j])){
      this.cleanSelectedDay();
      return;
    }
    this.selectedDay = this.daysMatrix[i][j];
    this.onSelected.emit(this.selectedDay);
  }

  cleanSelectedDay(){
    this.selectedDay = null;
    this.onSelected.emit(this.selectedDay);

  }


}
