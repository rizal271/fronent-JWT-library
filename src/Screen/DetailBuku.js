import React, { Component } from "react";
import "../Screen/assets/css/bookdetail.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import { getdetailBuku } from "../Global/redux/actions/buku";
import { Button } from "reactstrap";
import swal from "sweetalert";

class BookDetail extends Component {
  state = {
    detaillist: [],
    kembalilist: []
  };

  componentDidMount = async () => {
    const id_detail = this.props.match.params.id;
    await this.props.dispatch(getdetailBuku(id_detail));
    console.log("ini dari props", this.props.listbuku);
    this.setState({
      detaillist: this.props.listbuku.listBuku
    });
  };
  onBtnpinjam = () => {
    if (localStorage.getItem("level") === "peminjam") {
      swal({
        title: "Mohon Maaf Fitur Peminjaman dialihkan ke admin Perpustakaan",
        icon: "warning"
      }).then(() => {});
    } else {
      swal({
        title: "Mohon Maaf anda Harus mendaftar terlebih dahulu",
        icon: "warning"
      }).then(() => {
        this.props.history.push(`/register`);
      });
    }
    // swal({
    //     title: "Login Berhasil",
    //     icon: "success"
    //   })
  };

  render() {
    const list = this.state.detaillist;
    return (
      <div className="container">
        <div
          className="jumbotron"
          style={{ backgroundImage: `url(` + list.gbr + ")" }}
        >
          <div className="row">
            {list.status == "ada" ? (
              <Link to="/">
                <input
                  type="button"
                  className="btn btn-outline-info btn-sm ml-3"
                  value="Pinjam Buku"
                  onClick={this.onBtnpinjam}
                />
              </Link>
            ) : (
              <span className="badge badge-warning">Sedang Dipinjam</span>
            )}
          </div>
          <div className="card cardBook" style={{ maxWidth: "15rem" }}>
            <img
              src={list.gbr}
              style={{ height: "299px" }}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <h4>{list.nama_buku}</h4>
            <p>{list.pengarang}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listbuku: state.buku
  };
};

export default connect(mapStateToProps)(BookDetail);
