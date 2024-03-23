const baseUrl = "https://v2.api.noroff.dev/";

export const fetchProducts = async () => {
    const response = await fetch(`${baseUrl}online-shop`, {
      method: "GET",
    });

    const data = await response.json();
    return data;
};


