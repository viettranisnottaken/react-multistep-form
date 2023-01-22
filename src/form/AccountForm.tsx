import { FormStyleWrapper } from '../common/FormStyleWrapper';
import { IFormData } from '../interface/formData.interface';

interface IAccountFormProps {
  email: string;
  password: string;
  updateFields: (fields: Partial<IFormData>) => void;
}

export function AccountForm({
  email,
  password,
  updateFields,
}: IAccountFormProps) {
  return (
    <FormStyleWrapper title="Account Details">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormStyleWrapper>
  );
}
