import * as s from "./styled";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import toast, { Toaster } from "react-hot-toast";
import { apiBack } from "../../services/api";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit({ email }) {
    try {
      const response = await apiBack.get(`/devs/${email}`);

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 406) {
        navigate("/login");
        return toast.error("Usuário não cadastrado");
      } else navigate("/login");
      return toast.error("erro ao realizar o login");
    }
  }

  return (
    <s.LoginContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>LOGO</h1>

        <s.InputContainer>
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
        </s.InputContainer>

        <s.ButtonContainer>
          <Button text="Entrar" />

          <p>
            Não possui cadastro? <a href="register">Cadastre-se aqui</a>
          </p>
        </s.ButtonContainer>
      </form>

      <Toaster position="bottom-right" reverseOrder={false} />
    </s.LoginContainer>
  );
}
