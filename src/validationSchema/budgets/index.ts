import * as yup from 'yup';

export const budgetValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  personal_id: yup.string().nullable(),
});
