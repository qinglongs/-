const isSymmetric = (root) => {
  const isMirror = (n1, n2) => {
    if (!n1 && !n2) return true;
    if (!n1 || !n2) return false;

    return (
      n1.value === n2.value &&
      isMirror(n1.left, n2.right) &&
      isMirror(n2.left, n1.right)
    );
  };

  return isMirror(root, root);
};

const node = {
  value: 1,
  left: {
    value: 2,
    left: { value: 3, left: null, right: null },
    right: { value: 4, left: null, right: null },
  },
  right: {
    value: 2,
    left: { value: 4, left: null, right: null },
    right: { value: 3, left: null, right: null },
  },
};

console.log(isSymmetric(node));
