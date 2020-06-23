import axios from 'axios'

const axiosWithAuth = (props) => {

    const token = localStorage.getItem('token')

    return axios.create({
        headers: { Authorization: token }
    })
}
export default axiosWithAuth