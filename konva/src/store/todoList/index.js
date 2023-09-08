import React from 'react';
import { makeAutoObservable } from 'mobx';

class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggle() {
    this.finished = !this.finished;
  }
}

export default new Todo();
