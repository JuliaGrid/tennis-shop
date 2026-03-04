import classes from "./FormInput.module.css";

interface IFormInput {
  id: string;
  name: string;
  type: string;
  label?: string;
}

export function FormInput(props: IFormInput) {
  const { id, name, type, label } = props;

  return (
    <div>
      <label className={classes.formInput__label} htmlFor={id}>
        {label}
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
