// 计算阶乘

const factorial = (num) => {
  if (num === 1) return num;
  return num * factorial(num - 1);
};

console.log(factorial(3));

/**
 * 总结：计算机使用栈来记录每个调用中的函数，这个栈就叫做调用栈
 *
 *  起初计算机调用的是factorial(3)，然而，在该方法完成之前，它又调用了factorial(2)，为了记住自己
 *  还在factorial(3)中，计算机将此事压入栈
 *  接着计算机开始处理factorial(2)。该factorial(2)会调用factorial(1)。不过在进入factorial(1)前
 *  计算机记得住自己还在factorial(2)中，于是，它将此事也压入栈中
 *  最后计算机执行factorial(1)。因为1已经是基准情形了，所以它可以返回，不再调用factorial
 */
