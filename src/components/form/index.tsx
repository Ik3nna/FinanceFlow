import React from 'react';
import styles from "./index.module.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type UserSubmitForm = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const Form: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    company: Yup.string().required('Name of company is required'),
    subject: Yup.string().required("How can we help?"),
    message: Yup.string().required("Please input a message")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <form className={styles.component} onSubmit={handleSubmit(onSubmit)}>
      <section className={styles.subComponents}>
        <div>
          <label htmlFor='name'>Name</label>

          <input type='text' 
            placeholder='Full Name' 
            {...register('name')}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />

          <div className={styles.errorMessage}>{errors.name?.message}</div>
        </div>

        <div>
          <label htmlFor='email'>Email</label>

          <input type='email' 
            placeholder='email@example.com' 
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />

          <div className={styles.errorMessage}>{errors.email?.message}</div>
        </div>
      </section>

      <section className={styles.subComponents}>
        <div>
          <label htmlFor='company'>Company</label>

          <input type='text' 
            placeholder='Company Name' 
            {...register('company')}
            className={`form-control ${errors.company ? 'is-invalid' : ''}`}
          />
        </div>

        <div>
          <label htmlFor='subject'>Subject</label>

          <input type='text' 
            placeholder='How can we help?' 
            {...register('subject')}
            className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
          />

          <div className={styles.errorMessage}>{errors.subject?.message}</div>
        </div>
      </section>

      <section className={styles.subComponents}>
        <div>
          <label htmlFor='message'>Message</label>

          <input type="text" 
            placeholder='Your Message' 
            {...register('message')}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          />

          <div className={styles.errorMessage}>{errors.message?.message}</div>
        </div>
      </section>

      <button type="submit">
        SEND MESSAGE
      </button>
    </form>
  )
}

export default Form