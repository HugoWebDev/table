import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    const modifiedData = response.data.map((user: any) => ({
      key: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
      zipcode: user.address.zipcode,
      website: user.website,
      company: user.company,
    }));

    return modifiedData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
