import classes from "./FormInput.module.css";

interface IFormInput {
  id: string;
  name: string;
  type: string;
}

export function FormInput(props: IFormInput) {
  const { id, name, type } = props;

  return (
    <div>
      <label className={classes.formInput__label} htmlFor={id}>
        Логин
      </label>
      <input
        className={classes.formInput__input}
        type={type}
        name={name}
        id={id}
      />
    </div>
  );
}
