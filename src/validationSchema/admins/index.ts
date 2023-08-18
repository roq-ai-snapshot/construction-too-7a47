import * as yup from 'yup';

export const adminValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
