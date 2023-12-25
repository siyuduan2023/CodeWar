function hexStringToRGB(hexString) {
    //remove the # from the hexString
    hexString = hexString.replace("#", "");
    //use substring to get first two, middle two, and third two letters
    const firstTwo = hexString.substring(0, 2);
    const secondTwo = hexString.substring(2, 4);
    const thirdTwo = hexString.substring(4, 6);
    //convert two letters to r, g, b
    const R = parseInt(firstTwo, 16);
    const G = parseInt(secondTwo, 16);
    const B = parseInt(thirdTwo, 16);
    //return result
    return {r: R, g: G, b: B}
  }