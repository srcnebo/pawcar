import React from 'react'
import {Formik, useField, Form} from 'formik'
import * as Yup from 'yup'

import FormStyles from "./ContactForm.module.scss"

const CustomTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={FormStyles.textInput} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={FormStyles.error}>{meta.error}</div>
      ) : null}
    </>
  )
}

const CustomTextArea = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className={FormStyles.textArea} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={FormStyles.error}>{meta.error}</div>
      ) : null}
    </>
  )
}


const ContactForm = () => {
  return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Must be at least 3 characters long')
            .max(30, 'Must be 30 characters at the most')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          message: Yup.string()
            .min(10, 'Please write a longer message')
            .required('Required')
        })}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          setTimeout(()=>{
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000)
        }}
      >
        {props => (
          <Form>
            <CustomTextInput label="Name" name="name" type="text" placeholder="" />
            <CustomTextInput label="Email" name="email" type="email" placeholder="" />
            <CustomTextArea label="Message" name="message" placeholder="Type your message here..."/>
            <button type="submit">{props.isSubmitting ? 'Sending...' : 'Send'}</button>
          </Form>
        )}
      </Formik>
  )
}
export default ContactForm
