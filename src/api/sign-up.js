import API from "./api";

const signUp = async (data) => {
    const response = await API.post('/auth/sign-up', data);
    return response.data;
}
export default signUp;