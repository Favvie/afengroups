import useAxios from "axios-hooks";
const useAdminCred = () => {
  const [{ ...loginData }, login] = useAxios(
    {
      method: "post",
      url: "/admin/login",
    },
    {
      manual: true,
    }
  );

  const initLogin = ({ email, password }) => {
    login({
      data: {
        email,
        password,
      },
    });
  };

  return {
    initLogin,
    loginData,
  };
};

export default useAdminCred;
