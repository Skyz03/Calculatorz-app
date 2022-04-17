import React from "react";

const Btn = () => {
  return (
    <div className="calc__keypad">
      <button class="calc__key--num" data-keys="num">
        7
      </button>
      <button class="calc__key--num" data-keys="num">
        8
      </button>
      <button class="calc__key--num" data-keys="num">
        9
      </button>
      <button class="calc__key--spec" data-keys="del">
        del
      </button>
      <button class="calc__key--num" data-keys="num">
        4
      </button>
      <button class="calc__key--num" data-keys="num">
        5
      </button>
      <button class="calc__key--num" data-keys="num">
        6
      </button>
      <button class="calc__key--func" data-keys="func" data-operation="+">
        +
      </button>
      <button class="calc__key--num" data-keys="num">
        1
      </button>
      <button class="calc__key--num" data-keys="num">
        2
      </button>
      <button class="calc__key--num" data-keys="num">
        3
      </button>
      <button class="calc__key--func" data-keys="func" data-operation="-">
        -
      </button>
      <button class="calc__key--num" data-keys="num">
        .
      </button>
      <button class="calc__key--num" data-keys="num">
        0
      </button>
      <button class="calc__key--func" data-keys="func" data-operation="/">
        /
      </button>
      <button class="calc__key--func" data-keys="func" data-operation="*">
        x
      </button>
      <button class="calc__key--spec calc__key--span-two" data-keys="reset">
        reset
      </button>
      <button class="calc__key--equal calc__key--span-two" data-keys="equals">
        &#61;
      </button>
    </div>
  );
};

export default Btn;
