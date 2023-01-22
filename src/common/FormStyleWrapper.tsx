import { IFormStyleWrapper } from '../interface/formStyleWrapper.interface';

export function FormStyleWrapper({ title, children }: IFormStyleWrapper) {
  return (
    <>
      <h2
        style={{
          textAlign: 'center',
          margin: 0,
          marginBottom: '2rem',
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: 'grid',
          gap: '1rem 0.5rem',
          justifyContent: 'flex-start',
          gridTemplateColumns: 'auto minmax(auto, 400px)',
        }}
      >
        {children}
      </div>
    </>
  );
}
