import dayjs from 'dayjs';
import OneSignal from 'react-onesignal';
import * as Core from '@material-ui/core';
import * as Lab from '@material-ui/lab';
import * as Pickers from '@material-ui/pickers';
import * as Styles from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import enLocale from 'date-fns/locale/en-US';
import nlLocale from 'date-fns/locale/nl';
import { icons } from './icons';

window.dayjs = dayjs;
window.OneSignal = OneSignal;

export default {
  Core,
  Icons: icons,
  Lab,
  Pickers,
  Styles,
  DateFnsUtils,
  DateLocales: { enLocale, nlLocale },
};
