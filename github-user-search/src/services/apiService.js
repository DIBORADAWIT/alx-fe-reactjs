export const getData = async () => {
    try {
      return await new Promise((resolve) =>
        setTimeout(() => resolve({ data: "Some fetched data" }), 1000)
      );
    } catch (error) {
      console.error("Error fetching data", error);
      throw error;
    }
  };

  