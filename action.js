import {getService} from '../client';
import UnauthorizedError from '../../Errors/UnauthorizerError';

const {LanguageRequest} = require('../../proto/api_pb.js');

export default async (title, iso, status) => {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('authToken');
        if (!token) {
            return reject(new UnauthorizedError());
        }

        const request = new LanguageRequest();
        request.setTitle(title);
        request.setIso(iso);
        request.setStatus(status);

        getService().addLanguage(
            request,
            {
                authorization: `Bearer ${token}`
            },
            (error, response) => {
                if (error) {
                    return reject(error);
                }
                return resolve(response.toObject());
            }
        );
    });
};
