#include <stdio.h>

//数组的声明、数组赋值、访问数组

int main() {
  int n[10];
  int i, j;

  // 数组元素赋值
  for (i = 0; i < 10 ; i++) {
    n[i] = 100 + i;
  }
  // 数组取值
  for (j = 0; j < 10; j++) {
    printf("Element[%d] = %d\n", j, n[j]);
  }
  return 0;
}
