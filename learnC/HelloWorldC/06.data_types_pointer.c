#include <stdio.h>

//指针
int main() {
  int i = 10;
  int *p;
  p = &i;
  printf("i 变量的地址是: %p\n", p);
  printf("p 变量的地址是: %p\n", &p);
  return 0;
}
