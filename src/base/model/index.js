export class Model {
  constructor(events) {
    this.events = events;
  }

  emitChanges(event, payload) {
    //what is payload
    this.events.emit(event, payload ?? {});
  }
}
