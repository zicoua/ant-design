import moment from 'moment';
import { set, reset } from 'mockdate';

export function setMockDate(dateString = '2017-09-18T03:30:07.795') {
  set(moment(dateString).toDate());
}

export function resetMockDate() {
  reset();
}

export const sleep = (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout));
