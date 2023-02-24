import * as React from 'react';

interface IState {
  msg: string;
}

export class MessageForm extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { msg: '' };
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ msg: e.target.value });
  };

  private handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`次のメッセージが送信されました：${this.state.msg}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          メッセージ：
          <input
            type="text"
            value={this.state.msg}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="送信" />
      </form>
    );
  }
}
