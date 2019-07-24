import axios from "axios";
let URL = 'http://localhost:3342'

export const getBuku = (token, id) => {
  return {
    type: "GET_BUKU",
    payload: axios.get(URL+'/book', {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
  };
};

export const getBukuactive = (token, id) => {
  return {
    type: "GET_BUKU_ACTIVE",
    payload: axios.get(URL+'/book/active', {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
  };
};

export const postBuku = (token, id, data) => {
  console.log('ini dari aksi',data[0]);
  // {id_ktp:data[0].id_ktp, nama_KATEGORI: data[0].nama_KATEGORI, alamat: data[0].alamat}
  return {
    type: "POST_BUKU",
    payload: axios.post(URL+'/book', data[0], {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
  };
};

export const deleteBuku = (token, id, id_kategori) =>{
  console.log('action id', id_kategori)
	return{
		type: 'DELETE_BUKU',
		payload: axios.delete(URL +`/book/${id_kategori}`, {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
	}
}