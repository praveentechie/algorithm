const printJson = (json) => console.log(JSON.stringify(json, null, ' '));

const printTitle = (title) => console.log(`---------- ${title} ----------`);

module.exports = {
  printJson,
  printTitle
};