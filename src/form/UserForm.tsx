import { FormStyleWrapper } from '../common/FormStyleWrapper';
import { IFormData } from '../interface/formData.interface';

interface IUserFormProps {
  firstName: string;
  lastName: string;
  age: number;
  updateFields: (fields: Partial<IFormData>) => void;
}

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: IUserFormProps) {
  return (
    <FormStyleWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: parseInt(e.target.value) })}
      />
    </FormStyleWrapper>
  );
}
