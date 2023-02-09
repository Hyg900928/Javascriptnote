//
// Created by heyungao on 2023/2/7.

#include <stdio.h>

/**
 *
 * @param p
 */
void increment(int *p) {
//  * 运算符用来取出指针变量所指向的内存地址里面的值
  *p = *p + 1;
}

int main() {
  int x = 1;

//  & 运算符 与 * 运算符互为逆运算
  int bol = x == *(&x);

//  & 运算符，用来取出一个变量所在的内存地址
  increment(&x);
  printf("%d\n", x);
  printf("%d\n", bol);
  return 0;
}