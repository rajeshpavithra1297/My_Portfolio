const API_URL = `${import.meta.env.VITE_API_URL}/experiences`;

export const getExperiences = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
