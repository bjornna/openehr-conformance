import { parse, end, toSeconds, pattern } from "iso8601-duration";

const P1D = "P1D";
const P24T = "PT24H";

const s1 = toSeconds(parse(P1D));
const s2 = toSeconds(parse(P24T));
console.log(`${s1} == ${s2}`);

const P1Y = "P1Y";
const P12M = "P12M";
const P52W = "P52W";
const P365D = "P365D";
console.log("Check Y vs M vs W vs D");
console.log(`${P1Y} == ${P12M} == ${P52W} = ${P365D}`);
console.log(
  `${getSeconds(P1Y)} == ${getSeconds(P12M)} == ${getSeconds(
    P52W
  )} == ${getSeconds(P365D)}`
);

function getSeconds(duration: string) {
  return toSeconds(parse(duration));
}
