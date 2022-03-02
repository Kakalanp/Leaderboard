export default async (Name, Score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FtbSsyyRO5eDxJO72kQu/scores/', {
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
};
