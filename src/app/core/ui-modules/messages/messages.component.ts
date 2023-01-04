import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import { messagesSelect } from "../../../store/messages/selectors/messages.selectors";
import { Message } from "primeng/api";
import {IStateMessages} from "../../../shared/interfaces/state-messages.interface";
import {AppState} from "../../../store/state";

@Component({
  selector: 'so-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public messages: Observable<Message[]> = of([]);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.messages = this.store.select(messagesSelect);
  }

}
