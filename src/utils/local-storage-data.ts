export const localStorageData = () => {
  if (typeof Storage !== "undefined") {
    const keys = Object.keys(localStorage);

    const data: { [key: string]: string } = {};

    keys.forEach((key) => {
      data[key] = localStorage.getItem(key) || "";
    });

    return data;
  } else {
    console.error("localStorage is not supported in this browser.");
  }
};
