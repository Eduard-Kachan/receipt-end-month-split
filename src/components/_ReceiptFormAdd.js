import React from 'react';

class AddReceiptForm extends React.Component {

  constructor() {
    super();

    // this.goBack = this.goBack.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  // goBack(e) {
  //   e.stopPropagation()
  //   this.props.history.goBack()
  // }

  submitForm(e) {
    e.preventDefault();

    const receipt = {
      owner: this.owner.value,
      price: this.price.value,
    }

    this.props.addReceipt(this.props.match.params.date, receipt)

    this.receiptForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.receiptForm = input } onSubmit={(e) => this.submitForm(e)}>
        <select ref={(input) => this.owner = input}>
          <option key="Eduard" value="Eduard">Eduard</option>
          <option key="Tanya" value="Tanya">Tanya</option>
          {/*{Object.keys(this.props.users).map((key) => {*/}
            {/*return (*/}
              {/*<option key={key} value={key}>{this.props.users[key].name}</option>*/}
            {/*)*/}
          {/*})}*/}
        </select><br/>
        <input ref={(input) => this.price = input} type="text" placeholder="Price"/><br/>
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddReceiptForm;
