import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-creator',
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
  `],
  template: `
    <div class="note-creator shadow-2">
    <pre>{{ newNote | json }}</pre>
      <form class="row" (submit)="onCreateNote()">
        <div class="actions col-xs-12 row between-xs">
          <button
            type="submit"
            class="btn-light"
           >
            Done
          </button>
        </div>
      </form>
    </div>
  `
})
export class NoteCreator {
  @Output() createNote = new EventEmitter()
  newNote = {
    title: '',
    value: ''
  }

  onCreateNote() {
    console.log('submitted')
  }
}