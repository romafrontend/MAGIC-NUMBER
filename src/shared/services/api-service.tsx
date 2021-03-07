import {WidgetType} from '../types/widget';

const dbUrl = 'http://localhost:5000/widgets';

export const fetchWidgets = async () => {
  const res = await fetch(dbUrl);
  const data = await res.json();
  return data;
}

export const saveWidget = async (widgetToUpdate: WidgetType) => {
  const res = await fetch(dbUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(widgetToUpdate)
  });
  return await res.json();
}

export const editWidget = async (widgetToUpdate: WidgetType) => {
  const res = await fetch(dbUrl + `/${widgetToUpdate.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(widgetToUpdate)
  });
  return await res.json();
}

export const deleteWidget = async (id: number) => {
  await fetch(dbUrl + `/${id}`, {
    method: 'DELETE'
  });
}