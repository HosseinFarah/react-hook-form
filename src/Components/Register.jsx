import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Register = () => {
  const schema = yup.object().shape({
    firstname: yup.string().required("Enter Your Firsname"),
    lastname: yup.string().required("Enter Your Lastname"),
    email: yup.string().email("Email Not Valid").required("Enter Valid Email"),
    reemail: yup
      .string()
      .oneOf([yup.ref("email")], "Email Not same")
      .required("ReEnter Valid Email"),
    age: yup.number().positive().min(18).required("Enter your Age >= 18").typeError("Just Number"),
    password: yup
      .string()
      .min(4,"Password Must be Contained 4-15 Characters and one of them must be small character and one Capital character")
      .max(15)
      .matches(/[a-z]+/)
      .matches(/[A-Z]+/)
      .required(
        "Enter Password:Must be Containes one smal charechter & one Capital charechter & numbers"
      ),
    repassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Password Not Mathed.Enter Correct Password!"
      )
      .required("Enter Password Again!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const formFunc = (e) => {
    console.log("Form Submited");
    console.log(e);
  };
  return (
    <div className="container mt-5 my-5 col-4">
      <form onSubmit={handleSubmit(formFunc)}>
        First Name:
        <input className="form-control" type="text" placeholder="First Name" {...register("firstname")}/>
        {errors.firstname && <p>{errors?.firstname.message}</p>}
        Last Name:
        <input
          className="form-control"
          type="text"
          placeholder="Last Name"
          {...register("lastname")}
        />
        {errors.lastname && <p>{errors?.lastname.message}</p>}
        Email:
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <p>{errors?.email.message}</p>}
        Email Confirmation:
        <input
          className="form-control"
          type="email"
          placeholder="Email Confirmation"
          {...register("reemail")}
        />
        {errors.reemail && <p>{errors?.reemail.message}</p>}
        Age:
        <input
          className="form-control"
          type="number"
          placeholder="Age"
          {...register("age")}
        />
        {errors.age && <p>{errors?.age.message}</p>}
        Password:
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <p>{errors?.password.message}</p>}
        Password Again:
        <input
          className="form-control"
          type="password"
          placeholder="Re Password"
          {...register("repassword")}
        />
        {errors.repassword && <p>{errors?.repassword.message}</p>}
        <input className="form-control" type="submit" />
      </form>
    </div>
  );
};
