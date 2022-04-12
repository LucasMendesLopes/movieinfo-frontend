import * as s from "./styled";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { apiBack } from "../../services/api";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit({ email, senha }) {
    try {
      const response = await apiBack.post("/devs", {
        email,
        senha,
      });

      if (response.status === 200) {
        navigate("/");
        toast.success("Usuário cadastrado com sucesso");
      }
    } catch (error) {
      if (error.response.status === 406) {
        navigate("/register");
        return toast.error("Usuário já cadastrado");
      } else navigate("/register");
      return toast.error("Erro ao cadastrar usuário");
    }
  }

  return (
    <s.LoginContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>LOGO</h1>

        <p>E-mail:</p>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email", {
            required: "preencha este campo",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p id="error">{message}</p>}
        />

        {/* <input
          type="email"
          placeholder="Confirme seu e-mail"
          {...register("confirmaEmail", {
            required: "preencha este campo",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="confirmaEmail"
          render={({ message }) => <p id="error">{message}</p>}
        /> */}

        <p>Senha:</p>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("senha", {
            required: "preencha este campo",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="senha"
          render={({ message }) => <p id="error">{message}</p>}
        />

        {/* <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmaSenha", {
            required: "preencha este campo",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="confirmaSenha"
          render={({ message }) => <p id="error">{message}</p>}
        /> */}

        <Button text="Cadastrar" />
      </form>
      <Toaster position="bottom-right" reverseOrder={false} />
    </s.LoginContainer>
  );
}
