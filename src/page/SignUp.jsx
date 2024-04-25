import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { myApi } from "../api/myApi";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [dataForm, setDataForm] = useState({});
  const [role, setRole] = useState([]);

  useEffect(() => {
    myApi
      .get("/api/roles")
      .then((res) => {
        console.log(res);
        setRole(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = async (data) => {
    let formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: watch("role.id"),
    };
    if (watch("role.id") === "6") {
      formData = {
        ...formData,
        store: {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.storeTaxNo,
          bank_account: data.storeIBAN,
        },
      };
    }
    setDataForm(formData);
    try {
      await myApi.post("/api/register", dataForm).then((res) => {
        console.log(res);
        //history.push("/");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-wrap mb-10 bg-gradient-to-t from-cyan-500 to-blue-500 ">
        <h2 className="text-center w-full text-3xl mt-10">SIGN UP</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[40rem] mx-auto gap-10  p-10 text-sm"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Full Name:</label>
            <input
              id="name"
              className="border border-gray-500 px-[5px] h-8"
              type="text"
              placeholder="Enter your name."
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              className="border border-gray-500 px-[5px] h-8"
              type="email"
              id="email"
              placeholder="Enter your mail address."
              {...register("email", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              className="border border-gray-500 px-[5px] h-8"
              type="password"
              placeholder="Enter your password."
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              className="border border-gray-500 px-[5px] h-8"
              placeholder="Enter your password."
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === getValues("password"),
              })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="role">Role:</label>
            <select
              className="p-2"
              {...register("role.id", { required: true })}
            >
              {role.map((role, i) => (
                <option key={i} value={role.id}>
                  {role.authority}
                </option>
              ))}
            </select>
          </div>
          <>
            {watch("role.id") === "6" && (
              <>
                <div className="flex flex-col gap-1">
                  <label htmlFor="storeName">Store Name:</label>
                  <input
                    className="border border-gray-500 px-[5px] h-8"
                    id="storeName"
                    type="text"
                    {...register("storeName", { required: true })}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="storePhone">Phone:</label>
                  <input
                    className="border border-gray-500 px-[5px] h-8"
                    id="storePhone"
                    type="tel"
                    {...register("storePhone", { required: true })}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="storeTaxNo">Tax NO:</label>
                  <input
                    className="border border-gray-500 px-[5px] h-8"
                    id="storeTaxNo"
                    type="text"
                    {...register("storeTaxNo", { required: true })}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="storeIBAN">Store IBAN:</label>
                  <input
                    className="border border-gray-500 px-[5px] h-8"
                    id="storeIBAN"
                    type="text"
                    {...register("storeIBAN", {
                      required: true,
                      pattern: {
                        value:
                          /^TR\d{2}\s?(\d{4}\s?){1}(\d{1})(\d{3}\s?)(\d{4}\s?){3}(\d{2})\s?$/,
                        message: "Invalid IBAN",
                      },
                    })}
                  ></input>
                  {errors.storeIBAN && <p>{errors.storeIBAN.message}</p>}
                </div>
              </>
            )}
          </>
          <button
            type="submit"
            className="border border-gray-500 bg-blue-400 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
