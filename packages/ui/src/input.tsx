/*import { getVariant, getVariantOutlineStyles, getVariantBorderStyles, getVariantTextStyles, Variants } from './variant'
import { getSizes, getInputSizesStyles, Sizes } from './size'
import { HTMLInputTypeAttribute } from 'react'
import { getCommons } from './tokens'

interface InputProps {
  placeholder?: string
  className?: string
  defaultValue?: any
  type?: HTMLInputTypeAttribute
  size?: Sizes
  variant?: Variants
  value?: any
  setValue?: (newValue: string) => void
  name: string
  id: string
}

export default function Input({
  placeholder,
  defaultValue,
  type = 'text',
  size = Sizes.Medium,
  variant = Variants.Primary,
  value,
  setValue,
  name,
  id,
}: InputProps) {
  const sizeClasses = getSizes(size)
  const sizeInputClasses = getInputSizesStyles(size)
  const variantClasses = getVariant(variant)
  const variantOutlineClasses = getVariantOutlineStyles(variant)
  const variantBorderClasses = getVariantBorderStyles(variant)
  const variantTextClasses = getVariantTextStyles(variant)
  const commonClasses = getCommons()
  return (
    <input
      placeholder={placeholder}
      className={`${sizeClasses} ${sizeInputClasses} ${variantClasses} ${variantTextClasses} ${variantBorderClasses} ${variantOutlineClasses} ${commonClasses}`}
      defaultValue={defaultValue}
      type={type}
      value={value}
      name={name}
      id={id}
      onChange={setValue ? (newValue) => setValue(newValue.currentTarget.value) : () => {}}
    />
  )
}*/
/*
'use client'
import { getInputSizesStyles, Sizes } from './size'
import { HTMLInputTypeAttribute, useState } from 'react'
import { getVariantBorderStyles, getVariantTextStyles, getVariantOutlineStyles, Variants } from './variant'
import { getCommonInputStyles } from './tokens'
import { noop } from 'lodash'

interface InputProps {
  variant?: Variants
  size?: Sizes
  //setValue: any
  placeholder?: string
  type?: HTMLInputTypeAttribute
  value?: any
  onChange?: (newValue: any) => void
  onEnter?: (newValue: any) => void
  defaultValue?: any
  name: string
  className?: string
  id: string
}
export default function Input({
  variant = Variants.Primary,
  size = Sizes.Medium,
  value,

  name,
  id,
  defaultValue,
  className = '',
  onChange,
  onEnter = noop,
  type = 'text',
  placeholder,
}: InputProps) {
  const [internalValue, setInternalValue] = useState(value)
  const sizeCssClasses = getInputSizesStyles(size)
  const variantOutlineCssClasses = getVariantOutlineStyles(variant)
  const variantBorderCssClasses = getVariantBorderStyles(variant)
  const variantInputTextCssClasses = getVariantTextStyles(variant)
  const commonCssClasses = getCommonInputStyles()

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onEnter(value ?? internalValue)
    }
  }

  return (
    <input
      className={`${sizeCssClasses} ${variantBorderCssClasses} ${variantInputTextCssClasses} ${variantOutlineCssClasses} ${commonCssClasses} ${className}`}
      name={name}
      id={id}
      defaultValue={defaultValue}
      placeholder={placeholder}
      type={type}
      value={value || internalValue}
      onKeyUp={handleKeyUp}
      onChange={
        onChange
          ? (newValue) => onChange(newValue.currentTarget.value)
          : (newValue) => setInternalValue(newValue.currentTarget.value)
      }
    />
  )
}*/
'use client';
import React, { useState, useEffect } from 'react';
import { getInputSizesStyles, Sizes } from './size';
import {
  getVariantBorderStyles,
  getVariantTextStyles,
  getVariantOutlineStyles,
  Variants,
} from './variant';
import { getCommonInputStyles } from './tokens';
import { noop } from 'lodash';

interface InputProps {
  variant?: Variants;
  size?: Sizes;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: any; // Ensure the value is a string for input fields
  onChange?: (newValue: any) => void;
  onEnter?: (newValue: string) => void;
  defaultValue?: string;
  name: string;
  className?: string;
  id: string;
}

export default function Input({
  variant = Variants.Primary,
  size = Sizes.Medium,
  value,
  name,
  id,
  defaultValue = '',
  className = '',
  onChange,
  onEnter = noop,
  type = 'text',
  placeholder,
}: InputProps) {
  const [internalValue, setInternalValue] = useState(value ?? defaultValue);

  // Keep internalValue in sync with value prop
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const sizeCssClasses = getInputSizesStyles(size);
  const variantOutlineCssClasses = getVariantOutlineStyles(variant);
  const variantBorderCssClasses = getVariantBorderStyles(variant);
  const variantInputTextCssClasses = getVariantTextStyles(variant);
  const commonCssClasses = getCommonInputStyles();

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onEnter(internalValue);
    }
  }

 /* function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }
*/
/*
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    setInternalValue(newValue);


  if (onChange) {
    onChange(e);
  }
}*/
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  const newValue = e.currentTarget.value;
  setInternalValue(newValue);

  if (onChange) {
    onChange(newValue); // Pass only the string value to `onChange`
  }
}

  return (
    <input
      className={`${sizeCssClasses} ${variantBorderCssClasses} ${variantInputTextCssClasses} ${variantOutlineCssClasses} ${commonCssClasses} ${className}`}
      name={name}
      id={id}
      value={internalValue}
      placeholder={placeholder}
      type={type}
      onKeyUp={handleKeyUp}
      onChange={handleChange}
    />
  );
}

