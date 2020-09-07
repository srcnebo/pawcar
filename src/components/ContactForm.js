import React, { useState } from 'react'
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

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


const ContactForm = () => {
  const [formActive, setFormActive] = useState(true)
  

  return (
      <>
        {formActive ? (
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
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "pawcar-contact", ...values })
            })
            .then(() => {
              // alert('Success');
              setFormActive(false);
              actions.resetForm()
            })
            .catch(() => {
              alert('Error');
            })
            .finally(() => {
              actions.setSubmitting(false);
              setTimeout(()=>{
                setFormActive(true)
              }, 3000)
            })
        }}
      >
        {props => (
          <Form name="pawcar-contact" data-netlify={true}>
            <CustomTextInput label="Name" name="name" type="text" placeholder="" />
            <CustomTextInput label="Email" name="email" type="email" placeholder="" />
            <CustomTextArea label="Message" name="message" placeholder="Type your message here..."/>
            <button type="submit">{props.isSubmitting ? 'Sending...' : 'Send'}</button>
          </Form>
        )}
      </Formik>
        ) : (
          <span>Thank you for contacting us, we will reach out to you shortly</span>
        )}
      </>
  )
}
export default ContactForm
