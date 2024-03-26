import axios from "axios";

interface iProfile {
  name: string;
  email: string;
}

const URL = "http://localhost:3033/api/profile/";

export const getProfile = async () => {
  return await axios
    .get(`${URL}/allprofile`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const postProfile = async (profileData: iProfile) => {
  const { name, email } = profileData;
  return await axios
    .post(`${URL}/newprofile`, { name, email })
    .then((res) => res.data)
    .catch((err) => err);
};
