"use client";
import React, { useState } from 'react';
 
export default function OtpEditor(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/, ''); // Remove non-numeric characters
    setInputValue(numericValue);
  };

  return (
    <input
      className="mr-2 bg-neutral-100 border-neutral-200 border h-12 w-12 text-center form-control rounded"
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      id={props.id}
      maxLength="1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
