// First submit on 2023.10.18
function goodVsEvil(good, evil){
    const numberGood = good.split(' ').map(Number);
    //console.log(numberGood)
    const sumGood = numberGood[0]*1 + numberGood[1]*2 + numberGood[2]*3 + numberGood[3]*3 + numberGood[4]*4 + numberGood[5]*10;
    //console.log(sumGood);
    
    const numberEvil = evil.split(' ').map(Number);
    //console.log(numberEvil)
    const sumEvil = numberEvil[0]*1 + numberEvil[1]*2 + numberEvil[2]*2 + numberEvil[3]*2 + numberEvil[4]*3 + numberEvil[5]*5 + numberEvil[6]*10;
    //console.log(sumEvil);
    
    if (sumGood < sumEvil) {
      return "Battle Result: Evil eradicates all trace of Good";
    };
    if (sumGood > sumEvil) {
      return "Battle Result: Good triumphs over Evil";
    };
    if (sumGood === sumEvil) {
      return "Battle Result: No victor on this battle field";
    };
  };