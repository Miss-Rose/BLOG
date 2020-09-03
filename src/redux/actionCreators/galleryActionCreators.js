import {GET_GALLERY} from "../actionTypes/galleryActionTypes";
import {get} from "../../api/Api";

const url = 'http://localhost:3003/gallery';

export const getGalleryActionCreator = () => ({type: GET_GALLERY, payload: get(`${url}`)});