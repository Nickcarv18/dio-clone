import { Controller } from "react-hook-form";
import { ErrorText, IconContainer, InputContainer, InputText } from "./styles";
import { IInput } from "./types";

const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput) => {
  return (
    <>
      <InputContainer>
        {leftIcon? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) =>  <InputText {...field} {...rest} />}
        />
      </InputContainer>

      {errorMessage? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
}

export { Input };

