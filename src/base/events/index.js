export class EventEmitter {
  //TODO
  /**
   *
   * {
   *  "data:changed": [() => {}, [], ]
   *  "fetch:error": [() => {}, []]
   * }
   *
   *
   *  [() => {}, () => {}, () => {}]
   **/

  // myObj = {
  //   "data:changed": []
  // }

  // myObj.hasOwnProperty('data:changed')

  // myObj['data:changed'] = [() => { }]

  // myObj['data:changed'].push(() => {})

  constructor() {
    this._events = new Map(); //what is map?
  }

  on(eventName, callback) {
    if (!this._events.has(eventName)) {
      this._events.set(eventName, new Set()); //what is set
    }
    this._events.get(eventName).add(callback);
  }

  // off(eventName, callback) {
  //   if (this._events.has(eventName)) {
  //     this._events.get(eventName).delete(callback);
  //     if (this._events.get(eventName).size === 0) {
  //       this._events.delete(eventName);
  //     }
  //   }
  // }

  emit(eventName, data) {
    this._events.forEach((subscribers, name) => {
      if (name === eventName) {
        subscribers.forEach((callback) => callback(data));
      }
    });
  }

  // onAll(callback) {
  //   this.on("*", callback);
  // }

  offAll() {
    this._events = new Map();
  }

  // trigger(eventName, context = {}) {
  //   return (event = {}) => {
  //     this.emit(eventName, { ...event, ...context });
  //   };
  // }
}
