const arr = ['xxx', 'xxz', 'xxxxxsss', 'xx', 'xxxxsadas'];

const longestCommonPrefix = (strs) => {
  if (!strs || !strs.length) return '';
  let str = '';
  const perfix = strs[0];

  for (let i = 0; i < perfix.length; i++) {
    str += perfix[i];
    const isHave = strs.every((i) => i.indexOf(str) > -1);
    if (!isHave) {
      str = str.slice(0, i);
      break;
    }
  }
  return str;
};

console.log(longestCommonPrefix(arr));
