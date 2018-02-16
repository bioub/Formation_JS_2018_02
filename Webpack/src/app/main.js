// const Clock = require('./clock');
import { Clock } from './clock';

const div = document.querySelector('app-clock');
const clock = new Clock(div);
clock.start();
