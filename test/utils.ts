import * as lib from '../lib/utils';
import { expect } from 'chai';

describe('word parser', () => {
  beforeEach(() => {
    // Set up before running tests.
  });

  it('initializes', () => {
    expect(lib.splitWord('ave')).to.equal('a -- ve');
  });

  it('double consonant', () => {
    expect(lib.splitWord('cheche')).to.equal('che -- che');
  });

  it('upper case', () => {
    expect(lib.splitWord('BonDye')).to.equal('Bon -- Dye');
  });

  it('accents', () => {
    expect(lib.splitWord('Jézi')).to.equal('Jé -- zi');
  });
});
