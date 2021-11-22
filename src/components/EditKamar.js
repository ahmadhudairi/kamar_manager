import React from "react";

class EditKamar extends React.Component {
  constructor(props) {
    super(props);
    const { id, nama_kamar, status, tarif, jenis_kamar } =
      props.location.state.kamar;
    this.state = { id, nama_kamar, status, tarif, jenis_kamar };
  }

  update = (e) => {
    e.preventDefault();
    if (
      this.state.nama_kamar === "" ||
      this.state.status === "" ||
      this.state.jenis_kamar === "" ||
      this.state.tarif === ""
    ) {
      alert("Semua Fields harus Diisi!");
      return;
    }
    this.props.updateKamarHandler(this.state);
    this.setState({ nama_kamar: "", status: "", jenis_kamar: "", tarif: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main">
        <h1>Edit Kamar</h1>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Nama Kamar</label>
            <input
              type="text"
              name="nama_kamar"
              placeholder="Nama Kamar"
              value={this.state.nama_kamar}
              onChange={(e) => this.setState({ nama_kamar: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Status</label>
            <input
              type="text"
              name="status"
              placeholder="Status"
              value={this.state.status}
              onChange={(e) => this.setState({ status: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Jenis Kamar</label>
            <input
              type="text"
              name="jenis_kamar"
              placeholder="Jenis Kamar"
              value={this.state.jenis_kamar}
              onChange={(e) => this.setState({ jenis_kamar: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Tarif</label>
            <input
              type="text"
              name="tarif"
              placeholder="Tarif"
              value={this.state.tarif}
              onChange={(e) => this.setState({ tarif: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditKamar;
