//
// Created by heyungao on 2023/2/7.

#include <stdio.h>
#include <stdlib.h>

/**
 *
 * @param p
 */
void increment(int *p) {
  // * 运算符用来取出指针变量所指向的内存地址里面的值
  *p = *p + 1;
}

void print(int a) {
  printf("%d\n", a);

}

void swap(int* x, int* y) {
  int temp;
  temp = *x;
  *x = *y;
  *y = temp;
}

int main() {
  int x = 1;
  int a = 1;
  int b = 2;
  // & 运算符 与 * 运算符互为逆运算
  int bol = x == *(&x);

  //  & 运算符，用来取出一个变量所在的内存地址
  //  increment(&x);
  swap(&a,&b);

  //  函数指针
  /**
   * (*print_ptr)(10);
    等同于
    print(10);
   */
  void (*print_ptr)(int) = &print;
  print_ptr(10);

  printf("a = %d\n", a);
  printf("b = %d\n", b);
  printf("%d\n", x);
  printf("%d\n", bol);
  printf("%d\n", *(&x));
  printf("%p\n", &x);
  printf("int存储大小： %lu\n", sizeof(int));
  return 0;
}