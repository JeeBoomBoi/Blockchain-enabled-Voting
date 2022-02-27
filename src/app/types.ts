export interface Poll {
  id: number, // some random id, ex 11
  question: string,
  results: number[], // result for an option
  options: string[],
  thumbnail: string;
}

export interface Voter {
  id: string,
  voted: number[];
}
