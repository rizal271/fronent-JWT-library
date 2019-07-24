import axios from "axios";
let URL = 'http://localhost:3342'

export const getPeminjaman = (token, id) => {
  return {
    type: "GET_PEMINJAMAN",
    payload: axios.get(URL+'/borrowing', {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
  };
};

export const detailPeminjaman = (token, id) => {
  return {
    type: "DETAIL_PEMINJAMAN",
    payload: axios.get(URL+`/borrowing/details/${id}`, {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
  };
};

export const kembaliPeminjaman = (token,id, data) => {
  console.log('ini dari aksi',data);
  return {
    type: "KEMBALI_PEMINJAMAN",
    payload: axios.patch(URL+`/borrowing/retruned/${id}`, data, {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
  };
};

export const postPeminjaman = (token, id, data) => {
  console.log('ini dari aksi',data[0]);
  return {
    type: "POST_PEMINJAMAN",
    payload: axios.post(URL+'/borrowing', data[0], {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
  };
};

export const deletePinjaman = (token, id, id_ktp) =>{
  console.log('action id', id_ktp)
	return{
		type: 'DELETE_PINJAMAN',
		payload: axios.delete(URL +`/borrowing/${id_ktp}`, {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
	}
}

