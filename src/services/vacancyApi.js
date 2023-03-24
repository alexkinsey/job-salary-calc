export const fetchVacancyRecent = async () => {
  const response = await fetch('http://api.lmiforall.org.uk/api/v1/vacancies/search', {
    method: 'GET',
    // mode: 'no-cors'
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('Response data is not an array');
  }
  return data;
};

export const fetchVacancyBySearch = async (keyword) => {
  const response = await fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=${keyword}`, {
    method: 'GET',
    // mode: 'no-cors'
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('Response data is not an array');
  }
  return data;
};

export const fetchDescriptionByTitle = async (JobTitle) => {
  const formattedJobTitle = JobTitle.replace(/ /g, '%20');
  console.log('API', formattedJobTitle);
  const response = await fetch(`http://api.lmiforall.org.uk/api/v1/soc/search?q=${formattedJobTitle}`, {
    method: 'GET',
    // mode: 'no-cors'
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('Response data is not an array');
  }
  return data;
};