#include <stdio.h>


// 多维数组相乘

int main() {


  int a[2][5] = {
      {0, 1, 2, 3, 4},
      {5, 6, 7, 8, 9}
  };

  // a[0]本身是一个指针, 指向第二维数组的第一个成员a[0][0]
  // 所以*(a[0])取出的是a[0][0]的值
  printf("a[0][0]=%d\n", **a);
  printf("a[0][0]=%d\n", *(a[0]));
  return 0;
}
