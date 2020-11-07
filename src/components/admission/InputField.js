// import { validate } from 'email-validator';
import React, { useState, forwardRef, useImperativeHandle } from 'react';

const InputField = forwardRef((props, ref) => {
   const [value, setValue] = useState('');
   const [error, setError] = useState('');

   const handleChange = (e) => {
      setValue(e.target.value);
      setError('');
      props.onChange(e.target.name, e.target.value);
   };

   const validate = () => {
      //   Return true if valid
      // else return false

      if (props.validation) {
         const rules = props.validation.split('|');

         for (let i = 0; i < rules.length; i++) {
            const current = rules[i];

            if (current === 'required') {
               if (!value) {
                  setError('This field is Required');
                  return false;
               }
            }

            const pair = current.split(':');
            switch (pair[0]) {
               case 'min':
                  if (value.length < pair[1]) {
                     setError(
                        `This field must be at least ${pair[1]} character long`
                     );
                     return false;
                  }
                  break;
               case 'max':
                  if (value.length > pair[1]) {
                     setError(
                        `This field must be at less ${pair[1]} character long`
                     );

                     return false;
                  }
                  break;
               default:
                  break;
            }
         }
      }
      return true;
   };

   useImperativeHandle(ref, () => {
      return {
         validate: () => validate(),
      };
   });

   return (
      <div>
         <input
            className={error ? 'error' : ''}
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            onChange={(e) => handleChange(e)}
            value={props.value ? props.value : value}
            autoComplete={props.autoComplete}
         />
         {error && <small className='error'>{error}</small>}
      </div>
   );
});

InputField.defaultProps = {
   placeholder: '',
   name: '',
   type: '',
   value: '',
   autoComplete: 'off',
   validation: '',
};

export default InputField;
