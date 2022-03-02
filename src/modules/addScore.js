export default async function addScore(Name, Score) {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pHp69yRIlGJ61bg9QCjJ/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: Name,
      score: Score,
    }),
  });
}
