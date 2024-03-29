const API_URL = "https://invsys-1.onrender.com/api/auth/";

export default {
    get: jest.fn(() => Promise.resolve({ data: {} })),

    post: jest.fn((url) => {
        if (url === API_URL + '/signin') {
            return Promise.resolve({
                data: {}
            });
        }
    })
}