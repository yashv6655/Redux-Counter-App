import React, { useState } from "react";
import { connect } from "react-redux";
import { decrease, increase, reset, modalOpen } from "./actions";

function Counter({ name, count, increase, decrease, reset, modalOpen }) {
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button className="btn" type="button" onClick={decrease}>
          Decrease
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => {
            reset();
            modalOpen("test name", "test text");
          }}
        >
          Reset
        </button>
        <button className="btn" type="button" onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name };
}

const mapDispatchToProps = {
  increase,
  decrease,
  reset,
  modalOpen,
};

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//     reset: () => {
//       dispatch({ type: reset });
//       dispatch(modalOpen("test name", "test text"));
//     },
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
