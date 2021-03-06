import { 
  Component, OnInit, Input, EventEmitter, Output,
  ChangeDetectionStrategy, TemplateRef, ViewEncapsulation, ViewChild, SimpleChanges, OnChanges
} from '@angular/core';

@Component({
  selector: 'ms-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // TODO: find better way, without encapsulation none thing
  encapsulation: ViewEncapsulation.None
})
export class OptionsComponent implements OnInit, OnChanges {

  _options: any[] = []

  @Input() disabled: boolean = false;
  @Input() set options(value) {
    this._options = value
  }
  get () { return this._options }
  @Input() optionsTemplate: TemplateRef<any>;
  @Output() selectOption = new EventEmitter<any>();

  start: number = 0
  end: number = 5
  filteredOptions

  @ViewChild('defaultOptionsTemplate') defaultOptionsTemplate: TemplateRef<any>;

  constructor() { }

  getOptionStyle(option: any) {
    return {'marked': option.ticked, disabled: (this.disabled || option.disabled)};
  }

  select (option) {
    this.selectOption.emit(option);
  }

  updateRange ({start, end}) {
    this.filteredOptions = [...this._options].slice(start, end)
  }

  ngOnInit() {
    if(!this.optionsTemplate) {
      this.optionsTemplate = this.defaultOptionsTemplate;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {options} = changes
    if (options.currentValue !== options.previousValue) {
      this.updateRange({start: this.start, end: this.end})
    }
  }
}
