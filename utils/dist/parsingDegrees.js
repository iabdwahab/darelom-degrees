export function parseDegree(degree) {
  // Degree has 3 shapes
  //   1. `${number}`.
  //   2. `غـ`.
  //   3. `/${number}`.
  let manipulatedDegree = degree.replace('/', '');
  if (Number(manipulatedDegree)) {
    return Number(manipulatedDegree);
  }
  // If degree is not parsed, means that degree = 0.
  return 0;
}
