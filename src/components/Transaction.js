import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { removeTransaction, findTransactionItem } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  function btnStylesFunction(transaction) {
    let btnStyles = "btn  btn-sm btn-outline- ";
    btnStyles += transaction.amount < 0 ? "danger xbtn" : "success ibtn";
    return btnStyles;
  }

  let btnStyles = btnStylesFunction(transaction);

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => removeTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
        <button
          onClick={() => findTransactionItem(transaction.id)}
          className={btnStyles}
        >
          Edit
        </button>
        <button
          onClick={() => removeTransaction(transaction.id)}
          className={btnStyles}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
