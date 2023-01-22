import { FormStyleWrapper } from '../common/FormStyleWrapper';
import { IFormData } from '../interface/formData.interface';

interface IAddressFormProps {
  street: string;
  city: string;
  state: string;
  zip: string;
  updateFields: (fields: Partial<IFormData>) => void;
}

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: IAddressFormProps) {
  return (
    <FormStyleWrapper title="Address Details">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        required
        min={1}
        type="text"
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>Zip</label>
      <input
        required
        min={1}
        type="text"
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormStyleWrapper>
  );
}
