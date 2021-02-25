# Custom Components

A Calendar component and a Datepicker component built from scratch in Angular.

[Demo](https://ryankeng.com/custom-components)

## Environment

### Prerequisites

Install [Node.js](https://nodejs.org/en/about/releases/).

Install the Angular CLI.

```
npm install -g @angular/cli
```


### Installation

```
git clone https://github.com/rkeng/custom-components.git
npm install
ng serve --open
```

## Components

### `rk-calendar`

#### Properties

Name | Type | Default Value | Description
--- | --- | --- | ---
`date` | `Date` | `null` | Date to be selected on initialization.
`onSelect` | `EventEmitter<Date>` | | Emits a Date object when a date is selected.

#### Usage

##### HTML

```html
<rk-calendar
  [date]="selectedDate"
  (onSelect)="handleOnSelect($event)"
></rk-calendar>
```

##### TypeScript

```ts
selectedDate: Date = new Date(2021, 0, 1);
handleOnSelect(date: Date) {
  this.selectedDate = date;
}
```

### `rk-datepicker`

#### Properties

Name | Type | Default Value | Description
--- | --- | --- | ---
`placeholder` | `string` | `yyyy-MM-dd` | Input placeholder text
`formControl` | `FormControl` | | Inherited from ControlValueAccessor. Assigns a reference to the FormControl instance.

#### Usage

##### HTML

```html
<rk-datepicker
  [formControl]="dateControl"
  placeholder="Select a date"
></rk-datepicker>
```

##### TypeScript

```ts
dateControl = new FormControl(new Date(2021, 0, 1));
```