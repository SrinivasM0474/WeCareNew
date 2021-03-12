import axios from 'axios';
import PostData from '../global/AboutYourSelfPostData'

export const aboutYourSelfAction = () => {
    console.log('>>>>>>>>>>>>>>>>')
    axios.post(`http://localhost:8082/aboutyoyrself`, PostData.aboutYourselfData)
        .then(function (response) {
            console.log(response);
        })

};