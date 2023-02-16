#include <stdio.h>


int main() {
  int var_runoob = 1000;
  int a[5] = {11, 22, 33, 44, 55};
  int *p;              // 定义指针变量
  p = &var_runoob;
  p++;
  printf("var_runoob 变量的地址： %p\n", p);
  printf("数组第一个值为%d\n", a[1]);
  printf("数组第一个值为%d\n", *a);
  printf("数组第一个地址为%p\n", a);
  printf("数组第一个地址为%p\n", &a[0]);
  return 0;
}
