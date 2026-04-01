window.generate = function generate() {
  const pattern = document.getElementById('pattern').value.trim().replace(/\s/g, '');
  const key = document.getElementById('key').value.trim().toUpperCase();
  const result = document.getElementById('result');

  try {
    let out = '';
    let keyIndex = 0;

    // 逐个替换 - 为密钥字母
    for (let c of pattern) {
      if (c === '-') {
        out += key[keyIndex++];
      } else {
        out += c;
      }
    }

    // 每两位加一个 %
    let coded = '';
    for (let i = 0; i < out.length; i += 2) {
      coded += '%' + out.slice(i, i + 2);
    }

    // 解码
    const text = decodeURIComponent(coded);

    alert("拼接后编码: \n" + coded + "\n\n解码结果： \n" + text);
    
  } catch (e) {
    alert("解码失败，请查阅编码规则")
  }
}
