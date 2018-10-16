export const set = value => {
  localStorage.setItem('image-finder-app', JSON.stringify(value)); // value - это массив обьетов от USERa
};

export const get = () => { // get -вернет строку
  const data = localStorage.getItem('image-finder-app');

  return data ? JSON.parse(data) : null;
};
