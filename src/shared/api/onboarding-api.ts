export const fetchOnboardInformation = async (token: string) => {
  const url = '/api/onboard/information';
  const headers = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error('Failed to fetch onboard information');
  }

  return await response.json();
};
