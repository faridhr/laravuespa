import {http, httpFile} from './http_service';

export function categoryPost(data) {
	return httpFile().post('/categories', data);
};

export function getPost() {
	return http().get('/categories');
};

export function deleteCategory(id) {
	return http().delete('/categories/' + id);
};