import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { purpleDarkTheme, purpleTheme } from './themeing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None // Needed to get CSS styling to work on our web components - or could modify global styles.css
})
export class AppComponent implements AfterViewInit {
  @ViewChild('splitBtn') splitBtn!: ElementRef;
  @ViewChild('customStyle') customButton!: ElementRef;
  @ViewChild('formattedDate') formattedDatePicker!: ElementRef;
  @ViewChild('dateWithValue') datePickerWithValue!: ElementRef;

  ngAfterViewInit(): void {
    this.customButton.nativeElement.theme = purpleTheme;

    // this.splitBtn.nativeElement.theme = purpleDarkTheme;
    this.splitBtn.nativeElement.onClick = () => { alert('main button clicked!'); };
    this.splitBtn.nativeElement.menuProps = {
      items: [
        {
          key: 'emailMessage',
          text: 'Email message',
          iconProps: { iconName: 'Mail' },
        },
        {
          key: 'calendarEvent',
          text: 'Calendar event',
          iconProps: { iconName: 'Calendar' },
        },
      ],
    };

    this.formattedDatePicker.nativeElement.formatDate = (date) => {
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
    };
    this.formattedDatePicker.nativeElement.parseDateFormatString = (val) => {
      const date = val || new Date();
      const values = (val || '').trim().split('/');
      const day = val.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = val.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = val.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      if (year < 100) {
        year += date.getFullYear() - (date.getFullYear() % 100);
      }
      return new Date(year, month, day);
    };

    // This only works if the other elements are commented out.
    this.formattedDatePicker.nativeElement.theme = purpleDarkTheme;

    this.datePickerWithValue.nativeElement.value = new Date(1776, 6, 4);
  }

}
