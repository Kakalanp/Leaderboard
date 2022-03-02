export default async function getGame() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pHp69yRIlGJ61bg9QCjJ/scores/');
  const responseJSON = await response.json();
  const scrambled = responseJSON.result;
  // this will give us the values we need, then we need to sort them
  const scores = scrambled.sort((a, b) => b.score - a.score);
  // we return an array of sorted values
  return scores;
}