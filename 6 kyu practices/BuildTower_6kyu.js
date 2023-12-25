function towerBuilder(nFloors) {
    //create a variable to store returned array
    let tower = [];
    //create a variable to refer floor from 1
    let i = 1;
    //use while loop to iterate every floor until the given floor
    while (i <= nFloors) {
      const numSpaces = nFloors - i;
      const spaces = ' '.repeat(numSpaces);
      tower.push(spaces + '*'.repeat(i*2-1) + spaces)
      i += 1;
     }
    return tower;
    }