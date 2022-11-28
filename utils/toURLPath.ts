export const toURLPath = (id: string, title: string) =>
  `${id}--${title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replaceAll(' ', '-')}`;
