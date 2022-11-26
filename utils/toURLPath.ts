export const toURLPath = (id: number, title: string) =>
  `${id}-${title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replaceAll(' ', '-')}`;
