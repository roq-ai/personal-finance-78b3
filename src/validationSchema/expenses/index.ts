import * as yup from 'yup';

export const expenseValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  date: yup.date().required(),
  category: yup.string().required(),
  personal_id: yup.string().nullable(),
});
