import React from 'react'

class AddProduct extends React.Component {
  render(){
    return (
      <div className="card m-3 p-3 shadow-lg border-0">
        <h2>Adicionar Produto</h2>
        <form onSubmit={this.props.addProduct}>
          <div className="form-group">
            <label>Nome do produto:</label>
              <input className="form-control" type='text' name="product" onChange={this.props.handleChange} required />
          </div>
          <div className="form-group">
            <label>Categoria:</label>
            <select className="form-control" name="category" id="categoria" onChange={this.props.handleChange} required>
                <option value=''></option>
            {this.props.categories.map(category => (
                <option key={category.id} value={category.id}>{category.categoria}</option>
            ))
            }
            </select>
          </div>
          <button type="submit" className="btn btn-primary m-1">Adicionar</button>
        </form>
      </div>
    )
  }
};

export default AddProduct