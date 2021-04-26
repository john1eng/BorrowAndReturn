export const bookHeightSize = { S: 75, M: 100, L: 115 };

export const bookPageSize = { S: 15, M: 25, L: 35 };

export const shelfSpace = (() => {
  let width = window.screen.width;
  return {
    width: width > 475 ? 375 : 300,
    height: 150};
})();
