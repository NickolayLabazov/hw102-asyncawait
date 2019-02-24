import GameSavingLoader from '../src/function';

test('Загрузка и чтение', async () => {
  expect.assertions(1);
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const gameSavingLoader = new GameSavingLoader();
  const load = gameSavingLoader.load();
  const reseived = await load();
  expect(reseived).toEqual(expected);
});
