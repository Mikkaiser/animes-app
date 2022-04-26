import api from './index';

export default class VideoService {
    get(endpoint: string) : any {
        return api.get(endpoint)
            .then(function (response) {
                return response.data.data;
            });
    }
}