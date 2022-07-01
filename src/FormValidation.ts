import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


export interface FormInput {
  email: string
  password: string
}

export const schema = yup.object({
  email: yup
    .string()
    .required('メールアドレスが入力されていません。')
    .email('正しいメールアドレス入力してください'),
  password: yup
    .string()
    .required('パスワードが入力されていません。')
    .min(6, '6文字以上で入力してください')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).*$/,
      'パスワードはアルファベット＋数字＋「＠」などの文字を使用してください'
    ),
})
