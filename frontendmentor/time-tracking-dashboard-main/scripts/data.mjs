// fetch the json file containing data
async function loadData() {
  const data = await fetch("./data.json");
  if (!data.ok) {
    const response = await data.text();
    throw new Error(
      `unable to load data. status: ${data.status}, error: ${response}`
    );
  }
  const jsonData = await data.json();
  return jsonData;
}

export const loadedData = await loadData();
// extracting the data following their indexes
const [work, play, study, exercise, social, self] = loadedData;
// creating a dataObject with the different prefixes set as to avoid reliance on indexes
export const dataObject = { work, play, study, exercise, social, self };
