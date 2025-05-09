let dis = document.getElementById('dis');

function appendNumber(num) {
  dis.value += num;
}

function appendOperator(op) {
  const last = dis.value.slice(-1);
  if ("+-*/%".includes(last)) return;
  dis.value += op;
}

function cleardis() {
  dis.value = '';
}

function square() {
  const val = parseFloat(dis.value);
  if (!isNaN(val)) dis.value = val * val;
}

function calculate() {
  try {
    const expression = dis.value;
    if (/[^0-9.+\-*/%]/.test(expression)) throw "Invalid"; 
    const result = new Function('return ' + expression)();
    dis.value = result;
  } catch {
    dis.value = 'Error';
  }
}
