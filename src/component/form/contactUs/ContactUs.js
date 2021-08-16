import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./style.css";
import Button from "../../elements/button/Button";
import { fetchSentEmail } from "./action";
import { sentEmail } from "../../../utils/fetch";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string().required("Wajib mengisi nama!"),
  email: Yup.string().email("Format email salah!").required("Wajib mengisi email!"),
  title: Yup.string().min(10, "Minimal 10 karakter").required("Wajib mengisi judul pesan"),
  message: Yup.string().min(20, "Minimal 20 karakter").required("Wajib mengisi pesan!"),
});

export default function ContactUs() {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          title: "",
          message: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values, {resetForm}, e) => {
          fetchSentEmail(values)
          resetForm({})
        }}
      >
        {({ errors, touched }) => (
          <Form className='formContact'>
            <section>
              <Field name='username' placeholder='Nama' />
            {touched.username && errors.username && (
              <div className='validation'>{errors.username}</div>
            )}
            </section>
            <section>
             <Field name='email' placeholder='Email' />
            {touched.email && errors.email && <div className='validation'>{errors.email}</div>} 
            </section>
            <section>
             <Field name='title' placeholder='Judul Pesan' />
            {touched.title && errors.title && <div className='validation'>{errors.title}</div>} 
            </section>
            <section>
               <Field name='message' as='textarea' rows='10' cols='80' placeholder='Pesan'/>
            {touched.message && errors.message && <div className='validation'>{errors.message}</div>}
            </section>
           
            <Button type='submit' label='Kirim Pesan' />
          </Form>
        )}
      </Formik>
    </div>
  );
}
