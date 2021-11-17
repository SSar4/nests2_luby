/* eslint-disable prettier/prettier */
import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';

export const mailerConfig: MailerOptions = {
  template: {
    dir: path.resolve(__dirname, '..', '..', 'templates'),
    adapter: new HandlebarsAdapter(),
    options: {
      extName: '.hbs',
      layoutsDir: path.resolve(__dirname, '..', '..', 'templates'),
    },
  },
  transport: {
    host: 'smtp.mailtrap.io',
    secure: false,
    auth: {
      user: 'f288f20fff892d',
      pass: 'f193adf1730ac5',
    },
  },
};
