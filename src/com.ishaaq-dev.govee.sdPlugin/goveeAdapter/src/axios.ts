import Axios from 'axios';
import { URLS } from '../constants';
import * as dotenv from 'dotenv'
dotenv.config()

const GOVEE_API_KEY = process.env.GOVEE_API_KEY ?? (() => {
    throw new Error('GOVEE_API_KEY has not been set')
})();

const axiosClient = Axios.create({
    baseURL: URLS.GOVEE_URL
});

axiosClient.defaults.headers.common['Content-Type'] = 'application/json';
axiosClient.defaults.headers.common['Govee-API-Key'] = GOVEE_API_KEY;

export default axiosClient;