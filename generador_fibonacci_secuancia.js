/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let current = 0;
    let next = 1;

    while (true) {
        yield current;

        [current, next] = [next, current + next];
    }
};


 const gen = fibGenerator();
 gen.next().value; 
 gen.next().value; 