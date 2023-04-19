// Get the most recent vacancies from the API
export const fetchVacancyRecent = async () => {
  const response = await fetch('http://api.lmiforall.org.uk/api/v1/vacancies/search', {
    method: 'GET',
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

// Search for vacancies by keyword from the API
export const fetchVacancyBySearch = async (keyword) => {
  const response = await fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=${keyword}`, {
    method: 'GET',
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

// Get the description of a job by title from the API
export const fetchDescriptionByTitle = async (JobTitle) => {
  const formattedJobTitle = JobTitle.replace(/ /g, '%20');
  const response = await fetch(`http://api.lmiforall.org.uk/api/v1/soc/search?q=${formattedJobTitle}`, {
    method: 'GET',
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