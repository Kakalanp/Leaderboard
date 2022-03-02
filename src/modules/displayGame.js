import GET from './getGame.js';
import PRINT from './printGame.js';

export default async function displayGame() {
  PRINT(GET());
}