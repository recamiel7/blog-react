import axios from 'axios';

//post
export const writePost = ({title, body, tags}) => axios.post('/api/posts', { title, body, tags });

//schedule
export const writeSchedule = ({title, body, startDate, endDate}) => axios.schedule('/api/schedules', {title, body, startDate, endDate});