import { helper } from '@ember/component/helper';

export function eq([leftSide, rightSide]) {
  return leftSide === rightSide;
}

export default helper(eq);
