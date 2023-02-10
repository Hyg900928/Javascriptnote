#include <stdio.h>

//数组的声明、数组赋值、访问数组

//函数声明
double getAverage(int arr[], int size);

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

  // 多维数组生命与取值
  int a[5][2] = {
      {0, 0},
      {1, 2},
      {2, 4},
      {3, 6},
      {4, 8}
  };
  int c, d;
  for (c = 0; c < 5; c++) {
    for (d = 0; d < 2; d++) {
      printf("a[%d][%d] = %d\n", c, d, a[c][d]);
    }
  }

  // 传递数组给函数
  int balance[5] = { 1000, 2, 3, 17, 50 };
  double avg;

  /* 传递一个指向数组的指针作为参数 */
  avg = getAverage(balance, 5);

  //输出返回值
  printf("平均值是: %f\n", avg);

  return 0;
}
double getAverage(int arr[], int size) {
  int i;
  double avg;
  double sum = 0;
  for (i = 0; i < size; i++) {
    sum += arr[i];
  }
  avg = sum / size;
  return avg;
}
