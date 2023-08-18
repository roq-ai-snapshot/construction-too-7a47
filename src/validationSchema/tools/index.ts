import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  quantity: yup.number().integer().required(),
  price_per_day: yup.number().integer().required(),
  company_id: yup.string().nullable(),
});
