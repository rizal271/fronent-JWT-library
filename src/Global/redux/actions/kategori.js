import axios from "axios";
let URL = 'http://localhost:3342'

export const getKategori = (token, id) => {
  return {
    type: "GET_KATEGORI",
    payload: axios.get(URL+'/category', {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
  };
};

export const postKategori = (token, id, data) => {
  console.log('ini dari aksi',data[0]);
  // {id_ktp:data[0].id_ktp, nama_KATEGORI: data[0].nama_KATEGORI, alamat: data[0].alamat}
  return {
    type: "POST_KATEGORI",
    payload: axios.post(URL+'/category', data[0], {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
  };
};

export const deleteKategori = (token , id ,id_kategori) =>{
  console.log('action id', id_kategori)
	return{
		type: 'DELETE_KATEGORI',
		payload: axios.delete(URL +`/category/${id_kategori}`, {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
	}
}

