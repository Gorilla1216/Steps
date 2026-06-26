import React from 'react';

export default function FormInput({ label, id, value, onChange, error, ...props }) {
  return (
    <div className="text-lg text-[#8E8E8E] my-2">
      {label && (
        <label className="text-lg text-[#334155] font-semibold" htmlFor={id} >
          {label}
        </label>
      )}
      
      <input className="w-64 text-<base>/[<44px>] border border-[#0CA5E9] rounded-md"
        id={id}
        value={value}
        onChange={onChange}
        {...props} // Spreads type, placeholder, disabled, etc.
      />
      
      {error && <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{error}</span>}
    </div>
  );
}
