import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./style.css";
import Button from "../../elements/button/Button";
import { sentEmail } from "../../../utils/fetch";
import { ToastContainer, toast } from "react-toastify";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string().required("Wajib mengisi nama!"),
  email: Yup.string()
    .email("Format email salah!")
    .required("Wajib mengisi email!"),
  title: Yup.string()
    .min(10, "Minimal 10 karakter")
    .required("Wajib mengisi judul pesan"),
  message: Yup.string()
    .min(20, "Minimal 20 karakter")
    .required("Wajib mengisi pesan!"),
});

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
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
        onSubmit={(values, { resetForm }, e) => {
          const notifySuccess = () =>
            toast.success("Pesan berhasil dikirim", {
              position: "top-center",
              autoClose: 3500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });

          setIsLoading(true);
          sentEmail(values)
            .then((res) => {
              notifySuccess();
              setIsLoading(false);
            })
            .catch((error) => {
              const message = "Ups, Sepertinya ada masalah. Silahkan coba lagi";
              const notifyFailed = () =>
                toast.error(`${message}`, {
                  position: "top-center",
                  autoClose: 3500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                });

              notifyFailed(message);
            });
          resetForm({});
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
              {touched.email && errors.email && (
                <div className='validation'>{errors.email}</div>
              )}
            </section>
            <section>
              <Field name='title' placeholder='Judul Pesan' />
              {touched.title && errors.title && (
                <div className='validation'>{errors.title}</div>
              )}
            </section>
            <section>
              <Field
                name='message'
                as='textarea'
                rows='10'
                cols='80'
                placeholder='Pesan'
              />
              {touched.message && errors.message && (
                <div className='validation'>{errors.message}</div>
              )}
            </section>
            <ToastContainer />
            <section className='button-submit'>
            <Button type='submit' label='Submit' isLoading={isLoading} />
            </section>
            
          </Form>
        )}
      </Formik>
    </div>
  );
}
