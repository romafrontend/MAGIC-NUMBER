import {WidgetType} from '../types/widget';

const dbUrl = 'http://localhost:5000/widgets';

export const fetchWidgets = async () => {
  const res = await fetch(dbUrl);
  const data = await res.json();
  return data;
}

export const deleteWidgetById = async (id: number) => {
  await fetch(dbUrl + `/${id}`, {
    method: 'DELETE'
  });
}