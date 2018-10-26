var Rx = require('rxjs');

const observable = Rx.Observable.create(observer => {
    let x = 5;
    observer.next(x);
    x += 10;
    setTimeout(() => {
        observer.next(x);
        observer.complete();
    }, 1000);
    });

    const observer = {
    next: value => console.log(value),
    complete: () => console.log('done')
    };

    observable.subscribe(observer);

    setTimeout(() => {
    observable.subscribe(observer);
    }, 1000);